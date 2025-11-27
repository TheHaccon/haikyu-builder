import { Buffer } from 'buffer';


// Polyfill Buffer for the browser
if (typeof window !== 'undefined') {
  // FIX: Cast window to 'any' to stop the TypeScript error
  (window as any).Buffer = Buffer;
}

const GITHUB_API_URL = "https://api.github.com";

interface GithubConfig {
  token: string;
  owner: string; // e.g. "thehaccon"
  repo: string;  // e.g. "haikyu-builder"
  branch: string; // e.g. "main"
}

// 1. Upload Image
export async function uploadImageToGithub(
  config: GithubConfig,
  file: File,
  path: string = "public/data/img-global"
) {
  const reader = new FileReader();
  
  return new Promise((resolve, reject) => {
    reader.onload = async () => {
      const contentBase64 = (reader.result as string).split(',')[1]; // Remove "data:image..." prefix

      try {
        const url = `${GITHUB_API_URL}/repos/${config.owner}/${config.repo}/contents/${path}/${file.name}`;
        
        // Check if file exists (to get SHA if updating, or just to know)
        // For now, we assume new file or overwrite
        const checkRes = await fetch(url, {
            headers: { Authorization: `Bearer ${config.token}` }
        });
        let sha = undefined;
        if (checkRes.ok) {
            const data = await checkRes.json();
            sha = data.sha;
        }

        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${config.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `[Admin] Upload ${file.name}`,
            content: contentBase64,
            branch: config.branch,
            sha: sha // Needed if overwriting
          }),
        });

        if (!response.ok) throw new Error(await response.text());
        resolve(await response.json());
      } catch (error) {
        reject(error);
      }
    };
    reader.readAsDataURL(file);
  });
}

// 2. Append Code to File
export async function appendPlayerToCode(
  config: GithubConfig,
  newEntryString: string,
  filePath: string = "src/data/characters-global.ts"
) {
  const url = `${GITHUB_API_URL}/repos/${config.owner}/${config.repo}/contents/${filePath}?ref=${config.branch}`;

  // A. Get current file content
  const getRes = await fetch(url, {
    headers: { 
        "Authorization": `Bearer ${config.token}`,
        "Accept": "application/vnd.github.v3+json"
    }
  });

  if (!getRes.ok) throw new Error("Could not fetch code file. Check path/token.");
  
  const data = await getRes.json();
  const originalContent = Buffer.from(data.content, 'base64').toString('utf-8');

  // B. Find insertion point (Last "];")
  const lastIndex = originalContent.lastIndexOf("];");
  if (lastIndex === -1) throw new Error("Could not find closing '];' in file.");

  // C. Inject new data
  // We add a comma before if needed, but usually the list items end with commas.
  const newContent = 
    originalContent.slice(0, lastIndex) + 
    "\n" + newEntryString + "\n" + 
    originalContent.slice(lastIndex);

  // D. Push update
  const putRes = await fetch(url, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `[Admin] Add player data`,
      content: Buffer.from(newContent).toString('base64'),
      sha: data.sha,
      branch: config.branch
    }),
  });

  if (!putRes.ok) throw new Error(await putRes.text());
  return await putRes.json();
}