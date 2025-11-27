import { Buffer } from 'buffer';

// Polyfill Buffer for the browser
if (typeof window !== 'undefined') {
  (window as any).Buffer = Buffer;
}

const GITHUB_API_URL = "https://api.github.com";

interface GithubConfig {
  token: string;
  owner: string;
  repo: string;
  branch: string;
}

// 1. Upload Image (Generic)
export async function uploadImageToGithub(
  config: GithubConfig,
  file: File,
  path: string // e.g. "public/data/img-global"
) {
  const reader = new FileReader();
  
  return new Promise((resolve, reject) => {
    reader.onload = async () => {
      const contentBase64 = (reader.result as string).split(',')[1];

      try {
        const url = `${GITHUB_API_URL}/repos/${config.owner}/${config.repo}/contents/${path}/${file.name}`;
        
        // Check if file exists to get SHA
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
            sha: sha
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

// 2. Append Code (Generic)
// Now accepts 'filePath' to know which file to edit
export async function appendToCode(
  config: GithubConfig,
  newEntryString: string,
  filePath: string // e.g. "src/data/memories.ts"
) {
  const url = `${GITHUB_API_URL}/repos/${config.owner}/${config.repo}/contents/${filePath}?ref=${config.branch}`;

  // A. Get current file content
  const getRes = await fetch(url, {
    headers: { 
        "Authorization": `Bearer ${config.token}`,
        "Accept": "application/vnd.github.v3+json"
    }
  });

  if (!getRes.ok) throw new Error(`Could not fetch ${filePath}. Check path/token.`);
  
  const data = await getRes.json();
  const originalContent = Buffer.from(data.content, 'base64').toString('utf-8');

  // B. Find insertion point (Last "];")
  // This assumes all your data files end with an array export like "export const X = [ ... ];"
  const lastIndex = originalContent.lastIndexOf("];");
  if (lastIndex === -1) throw new Error(`Could not find closing '];' in ${filePath}`);

  // C. Inject new data
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
      message: `[Admin] Update ${filePath}`,
      content: Buffer.from(newContent).toString('base64'),
      sha: data.sha,
      branch: config.branch
    }),
  });

  if (!putRes.ok) throw new Error(await putRes.text());
  return await putRes.json();
}