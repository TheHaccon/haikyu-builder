import { useState, useRef, useEffect } from "react";
import { uploadImageToGithub, appendPlayerToCode } from "../utils/githubSync";
import "./AdminPage.css";

// --- CONSTANTS ---
const SCHOOLS = ["Karasuno", "Aoba Johsai", "Nekoma", "Date Kogyo", "Fukurodani", "Shiratorizawa", "Inarizaki", "Kamomedai", "Jozenji", "Itachiyama"];
const ROLES = ["S", "WS", "MB", "OP", "LI"];
// Added more powers to the list if needed
const POWERS = ["Power", "Quick", "Block", "Receive", "Serve", "Spike", "Toss", "Jump"];

const DEFAULT_PLAYER = {
    name: "",
    school: "Karasuno",
    role: "MB",
    rarity: "N",
    power: [] as string[], // CHANGED: Now an array of strings
    img: "",
};

export default function AdminPage() {
    const [form, setForm] = useState(DEFAULT_PLAYER);

    // GitHub Config State
    const [ghConfig, setGhConfig] = useState({
        owner: "thehaccon", 
        repo: "haikyu-builder", 
        branch: "main",
        token: "" 
    });

    // UI States
    const [isCustomSchool, setIsCustomSchool] = useState(false);
    const [previewSrc, setPreviewSrc] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error', msg: string }>({ type: 'idle', msg: '' });

    const fileInputRef = useRef<HTMLInputElement>(null);

    // --- PASTE LISTENER ---
    useEffect(() => {
        const handlePaste = (e: ClipboardEvent) => {
            const items = e.clipboardData?.items;
            if (!items) return;
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf("image") !== -1) {
                    const blob = items[i].getAsFile();
                    if (blob) {
                        const file = new File([blob], "pasted_image.png", { type: "image/png" });
                        const objectUrl = URL.createObjectURL(file);
                        setPreviewSrc(objectUrl);
                        setSelectedFile(file);
                    }
                }
            }
        };
        window.addEventListener("paste", handlePaste);
        return () => window.removeEventListener("paste", handlePaste);
    }, []);

    // --- HELPERS ---
    const detectRarity = (name: string): string => {
        const n = name.toUpperCase();
        if (n.includes("SP")) return "SP";
        if (n.includes("UR")) return "UR";
        if (n.includes("SSR")) return "SSR";
        if (n.includes("SR")) return "SR";
        if (n.includes(" R")) return "R";
        return "N";
    };

    const handleChange = (field: string, value: any) => {
        setForm(prev => {
            const newData = { ...prev, [field]: value };
            if (field === "name") newData.rarity = detectRarity(value);
            return newData;
        });
    };

    // --- NEW: TOGGLE POWER ---
    const togglePower = (powerName: string) => {
        setForm(prev => {
            const current = prev.power;
            if (current.includes(powerName)) {
                return { ...prev, power: current.filter(p => p !== powerName) };
            } else {
                return { ...prev, power: [...current, powerName] };
            }
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const objectUrl = URL.createObjectURL(file);
            setPreviewSrc(objectUrl);
            setSelectedFile(file);
            handleChange("img", file.name);
        }
    };

    const handleSaveToGithub = async () => {
        if (!ghConfig.token) { setStatus({ type: 'error', msg: 'Missing GitHub Token!' }); return; }
        if (!form.img || form.img.trim() === "") { setStatus({ type: 'error', msg: '❌ Error: Image Filename is required!' }); return; }
        if (!selectedFile && !form.name) { setStatus({ type: 'error', msg: 'Nothing to save.' }); return; }

        setStatus({ type: 'loading', msg: 'Uploading Image...' });

        try {
            if (selectedFile) {
                const finalFile = new File([selectedFile], form.img, { type: selectedFile.type });
                await uploadImageToGithub(ghConfig, finalFile);
            }

            setStatus({ type: 'loading', msg: 'Updating Code...' });

            // Format array correctly: ["Quick", "Block"]
            const formattedPower = JSON.stringify(form.power); 

            const newEntry = `  { name: "${form.name}", role: "${form.role}", img: "img-global/${form.img}.png", power: ${formattedPower}, school: "${form.school}" },`;

            await appendPlayerToCode(ghConfig, newEntry);
            setStatus({ type: 'success', msg: 'Saved! Updates will appear in a few minutes.' });

        } catch (err: any) {
            console.error(err);
            setStatus({ type: 'error', msg: 'Error: ' + err.message });
        }
    };

    const handleSchoolChange = (val: string) => {
        if (val === "Other") { setIsCustomSchool(true); handleChange("school", ""); }
        else { setIsCustomSchool(false); handleChange("school", val); }
    };

    return (
        <div className="admin-page">
            <header className="admin-header">
                <h1>Admin: Player Generator</h1>
                <p>Rarity is auto-detected from the name (e.g. "Kageyama <strong>UR</strong>")</p>
            </header>

            <div className="admin-grid">
                <div className="left-col">
                    <div className="admin-card config-section" style={{ marginBottom: '20px', border: '1px solid #4ade80' }}>
                        <h2 style={{ color: '#4ade80' }}>1. Connection Setup</h2>
                        <div className="input-group">
                            <label>GitHub Token</label>
                            <input type="password" value={ghConfig.token} onChange={e => setGhConfig(prev => ({ ...prev, token: e.target.value }))} placeholder="ghp_..." />
                        </div>
                    </div>

                    <div className="admin-card form-section">
                        <h2>2. Player Details</h2>
                        <div className="input-group">
                            <label>Name</label>
                            <input value={form.name} onChange={e => handleChange("name", e.target.value)} placeholder="e.g. Tobio Kageyama UR" autoFocus />
                        </div>

                        <div className="row-group">
                            <div className="input-group">
                                <label>School</label>
                                <select value={isCustomSchool ? "Other" : form.school} onChange={e => handleSchoolChange(e.target.value)}>
                                    {SCHOOLS.map(s => <option key={s} value={s}>{s}</option>)}
                                    <option value="Other" style={{ color: "#fbbf24" }}>+ Not Listed</option>
                                </select>
                                {isCustomSchool && <input style={{ marginTop: 8 }} value={form.school} onChange={e => handleChange("school", e.target.value)} />}
                            </div>
                            <div className="input-group">
                                <label>Position</label>
                                <select value={form.role} onChange={e => handleChange("role", e.target.value)}>
                                    {ROLES.map(p => <option key={p} value={p}>{p}</option>)}
                                </select>
                            </div>
                        </div>

                        {/* --- NEW MULTI-SELECT POWER --- */}
                        <div className="input-group">
                            <label>Specialty / Power (Select Multiple)</label>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', background: '#222', padding: '10px', borderRadius: '6px', border: '1px solid #444' }}>
                                {POWERS.map(p => {
                                    const isSelected = form.power.includes(p);
                                    return (
                                        <div 
                                            key={p} 
                                            onClick={() => togglePower(p)}
                                            style={{
                                                padding: '4px 10px',
                                                borderRadius: '4px',
                                                fontSize: '12px',
                                                cursor: 'pointer',
                                                background: isSelected ? '#3b82f6' : '#333',
                                                color: isSelected ? 'white' : '#aaa',
                                                border: isSelected ? '1px solid #3b82f6' : '1px solid #555'
                                            }}
                                        >
                                            {p} {isSelected ? '✓' : ''}
                                        </div>
                                    );
                                })}
                            </div>
                            <div style={{marginTop: '6px', fontSize: '11px', color: '#aaa'}}>
                                Selected: {form.power.length > 0 ? form.power.join(", ") : "(None)"}
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Image</label>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
                                <button className="action-btn" style={{ width: 'auto', padding: '0 12px', height: '40px', fontSize: '12px' }} onClick={() => fileInputRef.current?.click()}>📁 Select</button>
                                <input value={form.img} onChange={e => handleChange("img", e.target.value)} placeholder="filename.png" style={{ flex: 1 }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-col">
                    <div className="admin-card preview-card">
                        <h2>3. Preview</h2>
                        <div className="card-preview-box">
                            <div className="card-mockup">
                                <span className={`used-tag`} style={{ background: "#333", right: 6, top: 6, position: "absolute" }}>{form.rarity}</span>
                                <div className="card-img-holder">
                                    {previewSrc ? <img src={previewSrc} alt="Preview" /> : <div className="placeholder-img">No Image</div>}
                                </div>
                                <div className="card-name">{form.name || "Player Name"}</div>
                                <div className="card-meta">{form.school} • {form.role} • {form.rarity}</div>
                            </div>
                        </div>
                    </div>

                    <div className="admin-card code-card">
                        <h2>4. Save</h2>
                        <button
                            className={`copy-btn ${status.type === 'loading' ? 'loading' : status.type === 'success' ? 'success' : ''}`}
                            onClick={handleSaveToGithub}
                            disabled={status.type === 'loading'}
                            style={{ width: '100%', padding: '15px', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }}
                        >
                            {status.type === 'loading' ? '⏳ Saving...' : '🚀 Save to GitHub'}
                        </button>
                        {status.msg && <div style={{ marginTop: '15px', padding: '10px', color: status.type === 'error' ? '#fca5a5' : '#4ade80' }}>{status.msg}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}