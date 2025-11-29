import { useState, useRef, useEffect } from "react";
import { uploadImageToGithub, appendToCode } from "../utils/githubSync";
import "./AdminPage.css";

// --- TYPES & CONSTANTS ---
const TABS = ["Players", "Memories", "Bonds", "Character Data"];
const SCHOOLS = ["Karasuno", "Aoba Johsai", "Nekoma", "Date Kogyo", "Fukurodani", "Shiratorizawa", "Inarizaki", "Kamomedai", "Jozenji", "Itachiyama"];
const POSITIONS = ["S", "WS", "MB", "OP", "LI"];
const POWERS = ["Power", "Quick", "Block", "Receive"];
const RARITIES = ["R", "SR", "SSR", "UR", "SP"];
const BOND_STATS = ["Power", "Quick", "Block", "Receive", "No buff"];

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState("Players");

    // SHARED GITHUB CONFIG
    const [ghConfig, setGhConfig] = useState({
        owner: "thehaccon",
        repo: "haikyu-builder",
        branch: "main",
        token: ""
    });

    return (
        <div className="admin-page">
            <header className="admin-header">
                <h1>Admin Panel</h1>
                <div className="admin-tabs">
                    {TABS.map(tab => (
                        <button
                            key={tab}
                            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </header>

            <div className="admin-card config-section" style={{ marginBottom: 20, borderColor: '#4ade80' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <h3 style={{ margin: 0, color: '#4ade80' }}>GitHub Connection</h3>
                    <span style={{ fontSize: 12, color: '#666' }}>Target: {ghConfig.owner}/{ghConfig.repo}</span>
                </div>

                <div className="input-group">
                    <label>Paste Access Token</label>
                    <input
                        type="password"
                        placeholder="ghp_..."
                        value={ghConfig.token}
                        onChange={e => setGhConfig({ ...ghConfig, token: e.target.value })}
                        style={{ width: '100%' }}
                    />
                </div>
            </div>

            <div className="admin-content">
                {activeTab === "Players" && <PlayerForm config={ghConfig} />}
                {activeTab === "Memories" && <MemoryForm config={ghConfig} />}
                {activeTab === "Bonds" && <BondForm config={ghConfig} />}
                {activeTab === "Character Data" && <CharDataForm config={ghConfig} />}
            </div>
        </div>
    );
}

// ==========================================
// 1. PLAYER FORM
// ==========================================
function PlayerForm({ config }: { config: any }) {
    const [form, setForm] = useState({
        name: "", school: "Karasuno", role: "MB", rarity: "R", power: [] as string[], img: ""
    });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState("");
    const fileInput = useRef<HTMLInputElement>(null);

    const [isCustomSchool, setIsCustomSchool] = useState(false);

    useEffect(() => {
        const n = form.name.toUpperCase();
        let r = "N";
        if (n.includes("SP")) r = "SP"; else if (n.includes("UR")) r = "UR"; else if (n.includes("SSR")) r = "SSR"; else if (n.includes("SR")) r = "SR"; else if (n.includes(" R")) r = "R";
        setForm(p => ({ ...p, rarity: r }));
    }, [form.name]);

    useEffect(() => {
        const handlePaste = (e: ClipboardEvent) => {
            const item = e.clipboardData?.items[0];
            if (item?.type.includes("image")) {
                const f = item.getAsFile();
                if (f) { setFile(f); setPreview(URL.createObjectURL(f)); }
            }
        };
        window.addEventListener("paste", handlePaste);
        return () => window.removeEventListener("paste", handlePaste);
    }, []);

    const handleSchoolChange = (val: string) => {
        if (val === "Other") {
            setIsCustomSchool(true);
            setForm(p => ({ ...p, school: "" }));
        } else {
            setIsCustomSchool(false);
            setForm(p => ({ ...p, school: val }));
        }
    };

    const handleSave = async () => {
        if (!config.token) return setStatus({ type: 'error', msg: 'Missing Token' });
        setStatus({ type: 'loading', msg: 'Saving...' });
        try {
            if (file) await uploadImageToGithub(config, new File([file], form.img, { type: file.type }), "public/data/img-global");
            const code = `  { name: "${form.name}", role: "${form.role}", img: "img-global/${form.img}" , power: ${JSON.stringify(form.power)}, school: "${form.school}"},`;
            await appendToCode(config, code, "src/data/characters-global.ts");
            setStatus({ type: 'success', msg: 'Player Saved!' });
        } catch (e: any) { setStatus({ type: 'error', msg: e.message }); }
    };

    return (
        <div className="admin-grid">
            <div className="left-col admin-card">
                <h2>Add Player</h2>
                <div className="input-group"><label>Name [Alays cap first letter and rarity]</label><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name Rarity | e.g. Hinata UR" /></div>

                <div className="row-group">
                    {/* SCHOOL SELECTOR WITH CUSTOM OPTION */}
                    <div className="input-group">
                        <label>School</label>
                        <select value={isCustomSchool ? "Other" : form.school} onChange={e => handleSchoolChange(e.target.value)}>
                            {SCHOOLS.map(s => <option key={s} value={s}>{s}</option>)}
                            <option value="Other" style={{ color: '#fbbf24' }}>+ Not Listed</option>
                        </select>
                        {isCustomSchool && (
                            <input
                                style={{ marginTop: 8, borderColor: '#fbbf24' }}
                                value={form.school}
                                onChange={e => setForm({ ...form, school: e.target.value })}
                                placeholder="Enter School Name"
                            />
                        )}
                    </div>

                    <div className="input-group"><label>Role</label><select value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}>{POSITIONS.map(p => <option key={p}>{p}</option>)}</select></div>
                </div>

                <div className="input-group"><label>Powers</label>
                    <div className="power-select">
                        {POWERS.map(p => (
                            <span key={p} onClick={() => {
                                const newP = form.power.includes(p) ? form.power.filter(x => x !== p) : [...form.power, p];
                                setForm({ ...form, power: newP });
                            }} className={form.power.includes(p) ? "selected" : ""}>{p}</span>
                        ))}
                    </div>
                    {/* SHOWCASE SELECTED POWERS */}
                    <div style={{ marginTop: 8, fontSize: 12, color: '#4ade80', minHeight: 18 }}>
                        {form.power.length > 0 ? `Selected: ${form.power.join(", ")}` : "No power selected"}
                    </div>
                </div>
                <div className="input-group"><label>Image Name [if you take a screenshot you can just ctrl+v] </label>
                    <label>lower letter name and CAP rarity.png</label><input value={form.img} onChange={e => setForm({ ...form, img: e.target.value })} placeholder="hinataUR.png" /></div>
                <div style={{ marginTop: 10 }}>
                    <button className="action-btn" style={{ width: 'auto', padding: '5px 10px', height: 'auto' }} onClick={() => fileInput.current?.click()}>Upload Img</button>
                    <input type="file" ref={fileInput} hidden onChange={e => { if (e.target.files?.[0]) { setFile(e.target.files[0]); setPreview(URL.createObjectURL(e.target.files[0])); setForm({ ...form, img: e.target.files[0].name }) } }} />
                </div>
            </div>
            <div className="right-col admin-card">
                <h2>Preview</h2>
                <div className="card-preview-box">
                    <div className="card-mockup">
                        <span className={`used-tag`} style={{ background: "#333", right: 6, top: 6, position: "absolute" }}>{form.rarity}</span>
                        <div className="card-img-holder">
                            {preview ? <img src={preview} alt="Preview" /> : <div className="placeholder-img">No Image</div>}
                        </div>
                        <div className="card-name">{form.name || "Player Name"}</div>
                        <div className="card-meta">{form.school} • {form.role} • {form.rarity}</div>
                    </div>
                </div>
                <button className="copy-btn success save-btn" onClick={handleSave}>{status.type === 'loading' ? '...' : 'Save Player'}</button>
                {status.msg && <p className={status.type}>{status.msg}</p>}
            </div>
        </div>
    );
}
// ==========================================
// 2. MEMORY FORM
// ==========================================
function MemoryForm({ config }: { config: any }) {
    const [form, setForm] = useState({
        name: "", position: "MB", rarity: "SSR", image: "",
        descLvl1: "", descMax: "",
        block: { l1: 0, mx: 0 }, power: { l1: 0, mx: 0 }, serve: { l1: 0, mx: 0 },
        receive: { l1: 0, mx: 0 }, save: { l1: 0, mx: 0 }, set: { l1: 0, mx: 0 }
    });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState("");
    const fileInput = useRef<HTMLInputElement>(null);

    const ROLE_NAMES: Record<string, string> = {
        "S": "Setter",
        "WS": "Wing Spiker",
        "MB": "Middle Blocker",
        "OP": "Opposite Hitter",
        "LI": "Libero"
    };
    // Paste Listener
    useEffect(() => {
        const handlePaste = (e: ClipboardEvent) => {
            const item = e.clipboardData?.items[0];
            if (item?.type.includes("image")) {
                const f = item.getAsFile();
                if (f) { setFile(f); setPreview(URL.createObjectURL(f)); }
            }
        };
        window.addEventListener("paste", handlePaste);
        return () => window.removeEventListener("paste", handlePaste);
    }, []);

    const handleSave = async () => {
        if (!config.token) return setStatus({ type: 'error', msg: 'Missing Token' });
        setStatus({ type: 'loading', msg: 'Saving...' });
        try {
            if (file) await uploadImageToGithub(config, new File([file], form.image, { type: file.type }), "public/data/memory");
            const fullPos = ROLE_NAMES[form.position] || form.position;
            const cleanLvl1 = form.descLvl1.replace(/\n/g, '\\n').replace(/"/g, '\\"');
            const cleanMax = form.descMax.replace(/\n/g, '\\n').replace(/"/g, '\\"');
            const code = `  {
    name: "${form.name}",
    position: "${form.position}",
    rarity: "${form.rarity}",
    image: "memory/${form.image}",
    description: {
        lvl1: "Memory Tier I - [${fullPos}] Exclusive Effects: ${cleanLvl1}",
        max: "Memory Tier V - [${fullPos}] Exclusive Effects: ${cleanMax}" },
    stats: {
        block: { lvl1: ${form.block.l1}, max: ${form.block.mx} },
        power: { lvl1: ${form.power.l1}, max: ${form.power.mx} },
        serve: { lvl1: ${form.serve.l1}, max: ${form.serve.mx} },
        receive: { lvl1: ${form.receive.l1}, max: ${form.receive.mx} },
        save: { lvl1: ${form.save.l1}, max: ${form.save.mx} },
        set: { lvl1: ${form.set.l1}, max: ${form.set.mx} }
    }
  },`;
            await appendToCode(config, code, "src/data/memories.ts");
            setStatus({ type: 'success', msg: 'Memory Saved!' });
        } catch (e: any) { setStatus({ type: 'error', msg: e.message }); }
    };

    return (
        <div className="admin-grid">
            <div className="left-col admin-card">
                <h2>Add Memory</h2>
                <div className="input-group"><label>Name</label><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Memory name" /></div>
                <div className="row-group">
                    <div className="input-group"><label>Position</label><select value={form.position} onChange={e => setForm({ ...form, position: e.target.value })}>{POSITIONS.map(p => <option key={p}>{p}</option>)}</select></div>
                    <div className="input-group"><label>Rarity</label><select value={form.rarity} onChange={e => setForm({ ...form, rarity: e.target.value })}>{RARITIES.map(r => <option key={r}>{r}</option>)}</select></div>
                </div>
                <div className="input-group"><label>Description Lv1</label><textarea value={form.descLvl1} onChange={e => setForm({ ...form, descLvl1: e.target.value })} rows={3} /></div>
                <div className="input-group"><label>Description Max</label><textarea value={form.descMax} onChange={e => setForm({ ...form, descMax: e.target.value })} rows={3} /></div>
                <div className="input-group"><label>Image Name</label><input value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} placeholder="mem_name.png" /></div>
                <button className="action-btn" style={{ width: 'auto', padding: '5px 10px', height: 'auto', marginTop: 10 }} onClick={() => fileInput.current?.click()}>Upload Img</button>
                <input type="file" ref={fileInput} hidden onChange={e => { if (e.target.files?.[0]) { setFile(e.target.files[0]); setPreview(URL.createObjectURL(e.target.files[0])); setForm({ ...form, image: e.target.files[0].name }) } }} />

                <h4 style={{ marginTop: 20 }}>Stats (Lv1 / Max)</h4>
                <div className="stat-grid">
                    {['block', 'power', 'serve', 'receive', 'save', 'set'].map(stat => (
                        <div key={stat} className="stat-row-input">
                            <label style={{ width: 60 }}>{stat}</label>
                            <input type="number" placeholder="Lv1" onChange={e => setForm({ ...form, [stat]: { ...(form as any)[stat], l1: e.target.value } })} />
                            <input type="number" placeholder="Max" onChange={e => setForm({ ...form, [stat]: { ...(form as any)[stat], mx: e.target.value } })} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="right-col admin-card">
                <h2>Memory Preview</h2>
                <div className="mem-preview-box">
                    <div className="mem-preview-row">
                        <div className="mem-img-wrap" style={{ width: 48, height: 48, background: '#222', borderRadius: 6, overflow: 'hidden' }}>
                            {preview ? <img src={preview} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : null}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 'bold', fontSize: 14 }}>{form.name || "Memory Name"}</div>
                            <div style={{ display: 'flex', gap: 5, marginTop: 4 }}>
                                <span style={{ fontSize: 10, background: '#4b5563', padding: '2px 6px', borderRadius: 4 }}>{form.position}</span>
                                <span style={{ fontSize: 10, background: '#eab308', color: '#000', padding: '2px 6px', borderRadius: 4 }}>{form.rarity}</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 10, fontSize: 12, color: '#ccc', fontStyle: 'italic' }}>
                        {form.descMax || "Description preview..."}
                    </div>
                </div>
                <button className="copy-btn success" onClick={handleSave} style={{ marginTop: 20 }}>{status.type === 'loading' ? '...' : 'Save Memory'}</button>
                {status.msg && <p className={status.type}>{status.msg}</p>}
            </div>
        </div>
    );
}
// ==========================================
// 3. BOND FORM (AUTO-FORMATTER)
// ==========================================
function BondForm({ config }: { config: any }) {
    const [form, setForm] = useState({
        name: "",
        category: "stats",
        school: "",
        min: 2,
        members: [] as string[],
        desc: "",
        memberBuffs: {} as Record<string, string> // Stores just "Block" or "Power" now
    });

    const [newMember, setNewMember] = useState("");
    const [status, setStatus] = useState({ type: '', msg: '' });

    const addMember = () => {
        if (newMember) {
            // Default new members to "Power" to avoid undefined issues
            setForm(p => ({
                ...p,
                members: [...p.members, newMember],
                memberBuffs: { ...p.memberBuffs, [newMember]: "Power" }
            }));
            setNewMember("");
        }
    };

    const removeMember = (m: string) => {
        setForm(p => {
            const newBuffs = { ...p.memberBuffs };
            delete newBuffs[m];
            return { ...p, members: p.members.filter(mem => mem !== m), memberBuffs: newBuffs };
        });
    };

    const handleBuffChange = (member: string, stat: string) => {
        setForm(p => ({
            ...p,
            memberBuffs: { ...p.memberBuffs, [member]: stat }
        }));
    };

    const handleSave = async () => {
        if (!config.token) return setStatus({ type: 'error', msg: 'Missing Token' });
        setStatus({ type: 'loading', msg: 'Saving...' });

        try {
            let descriptionCode = "";

            if (form.category === "stats") {
                const buffEntries = form.members.map(m => {
                    const stat = form.memberBuffs[m] || "Power";

                    // LOGIC: If "No buff", just print that. Otherwise, apply the formula.
                    const val = stat === "No buff"
                        ? "No buff"
                        : `${stat} +5/7/9/12/15, ${stat} +1/2/3/4/5%`;

                    return `"${m}": "${val}"`;
                });
                descriptionCode = `{ ${buffEntries.join(", ")} }`;
            } else {
                descriptionCode = `"${form.desc.replace(/\n/g, ' ')}"`;
            }

            const code = `  {
    name: "${form.name}",
    category: "${form.category}",${form.category === "school" ? `school: "${form.school}",` : ""}
    members: ${JSON.stringify(form.members)},
    description: ${descriptionCode},
    activation: { type: "${form.category === 'school' ? 'count' : 'all'}", min: ${form.min} }
  },`;

            await appendToCode(config, code, "src/data/synergies.ts");
            setStatus({ type: 'success', msg: 'Bond Saved!' });
        } catch (e: any) { setStatus({ type: 'error', msg: e.message }); }
    };

    return (
        <div className="admin-grid">
            <div className="left-col admin-card">
                <h2>Add Bond</h2>
                <div className="input-group"><label>Bond Name</label><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
                <div className="input-group"><label>Category</label>
                    <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                        <option value="stats">Stats (Auto-Formatted)</option>
                        <option value="deployment">Deployment (Manual Desc)</option>
                        <option value="school">School (Count)</option>
                    </select>
                </div>

                {form.category === 'school' && (
                    <div className="input-group"><label>School Name</label><input value={form.school} onChange={e => setForm({ ...form, school: e.target.value })} /></div>
                )}

                <div className="input-group"><label>Members</label>
                    <div style={{ display: 'flex', gap: 5 }}>
                        <input value={newMember} onChange={e => setNewMember(e.target.value)} placeholder="e.g. Hinata SSR" />
                        <button className="action-btn" style={{ width: 'auto', height: 'auto' }} onClick={addMember}>Add</button>
                    </div>
                    <div style={{ marginTop: 5, fontSize: 12, display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                        {form.members.map(m => (
                            <span key={m} style={{ background: '#333', padding: '2px 6px', borderRadius: 4, cursor: 'pointer' }} onClick={() => removeMember(m)}>
                                {m} ✕
                            </span>
                        ))}
                    </div>
                </div>

                {/* --- DYNAMIC STAT SELECTORS --- */}
                {form.category === "stats" ? (
                    <div className="input-group">
                        <label>Select Stat per Member</label>
                        <div style={{ background: '#222', padding: 10, borderRadius: 6, border: '1px solid #444' }}>
                            {form.members.length === 0 && <span style={{ color: '#666', fontSize: 12 }}>Add members above first...</span>}
                            {form.members.map(m => (
                                <div key={m} style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ fontSize: 12, color: '#fff' }}>{m}:</div>
                                    <select
                                        value={form.memberBuffs[m] || "Power"}
                                        onChange={e => handleBuffChange(m, e.target.value)}
                                        style={{ width: '120px', padding: '4px', fontSize: '12px' }}
                                    >
                                        {BOND_STATS.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="input-group">
                        <label>Description (General)</label>
                        <textarea value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} rows={3} />
                    </div>
                )}
            </div>

            <div className="right-col admin-card">
                <h2>Bond Preview</h2>
                <div className="bond-preview-box" style={{ background: 'rgba(0,0,0,0.2)', padding: 10, borderRadius: 8, border: '1px solid #5c5c5c' }}>
                    <div style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                        <span>{form.name || "Bond Name"}</span>
                        <span style={{ fontSize: 10, color: '#4ade80' }}>ACTIVE</span>
                    </div>
                    <div style={{ fontSize: 12, marginBottom: 8, color: '#ccc' }}>
                        {form.members.length > 0 ? form.members.join(" • ") : "Member 1 • Member 2"}
                    </div>

                    <div style={{ fontSize: 13, lineHeight: 1.4 }}>
                        {form.category === "stats" ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                {form.members.map(m => {
                                    const stat = form.memberBuffs[m] || "Power";
                                    const text = stat === "No buff" ? "No buff" : `${stat} +5/7/9/12/15, ${stat} +1/2/3/4/5%`;
                                    return (
                                        <div key={m}>
                                            <strong style={{ color: '#fbbf24' }}>{m}:</strong> {text}
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            form.desc || "Bond description goes here..."
                        )}
                    </div>
                </div>
                <button className="copy-btn success save-btn" onClick={handleSave}>{status.type === 'loading' ? '...' : 'Save Bond'}</button>
                {status.msg && <p className={status.type} style={{ textAlign: 'center' }}>{status.msg}</p>}
            </div>
        </div>
    );
}

// ==========================================
// 4. CHAR DATA FORM (FIXED FOR NEW STRUCTURE)
// ==========================================
function CharDataForm({ config }: { config: any }) {
    // Toggle for the specific attack stat key
    const [attackType, setAttackType] = useState<"Power_Attack" | "Quick_Attack">("Quick_Attack");

    const [form, setForm] = useState({
        name: "",
        school: "Karasuno",
        position: "MB",
        rarity: "N",

        // Stats (Lvl 1 / Max)
        serve: { l1: 0, mx: 0 },
        attack: { l1: 0, mx: 0 }, // Will map to Quick_Attack or Power_Attack
        set: { l1: 0, mx: 0 },
        receive: { l1: 0, mx: 0 },
        block: { l1: 0, mx: 0 },
        save: { l1: 0, mx: 0 },

        // Skills (4 slots) - 'tags' is a string here for input, converted to array on save
        skills: [
            { name: "", tags: "", desc: "" },
            { name: "", tags: "", desc: "" },
            { name: "", tags: "", desc: "" },
            { name: "", tags: "", desc: "" }
        ]
    });

    const [status, setStatus] = useState({ type: '', msg: '' });

    // Map short codes to full names for the "tags" array
    const FULL_POS_MAP: Record<string, string> = {
        "S": "Setter",
        "MB": "Middle Blocker",
        "WS": "Wing Spiker",
        "LI": "Libero",
        "OP": "Opposite Hitter"
    };

    // Auto-detect rarity
    useEffect(() => {
        const n = form.name.toUpperCase();
        let r = form.rarity; // Keep current if no match
        if (n.includes("SP")) r = "SP";
        else if (n.includes("UR")) r = "UR";
        else if (n.includes("SSR")) r = "SSR";
        else if (n.includes("SR")) r = "SR";
        else if (n.includes(" R")) r = "R";
        setForm(p => ({ ...p, rarity: r }));
    }, [form.name]);

    const handleSkillChange = (index: number, field: string, value: string) => {
        const newSkills = [...form.skills];
        newSkills[index] = { ...newSkills[index], [field]: value };
        setForm({ ...form, skills: newSkills });
    };

    const handleStatChange = (stat: string, type: 'l1' | 'mx', val: string) => {
        setForm(p => ({
            ...p,
            [stat]: { ...(p as any)[stat], [type]: Number(val) }
        }));
    };

    const handleSave = async () => {
        if (!config.token) return setStatus({ type: 'error', msg: 'Missing Token' });
        setStatus({ type: 'loading', msg: 'Saving...' });

        try {
            // 1. Generate ID
            const id = form.name.toLowerCase().replace(/\(practice\)/g, '').trim().replace(/\s+/g, '_');

            // 2. Generate Skills Code
            const skillsCode = form.skills.map(s => {
                // Convert "Passive, Enhance Team" -> ["Passive", "Enhance Team"]
                const tagsArray = s.tags.split(",")
                    .map(t => t.trim())
                    .filter(t => t !== "")
                    .map(t => `"${t}"`) // Wrap in quotes
                    .join(", ");

                return `    {
        name: "${s.name}",
        tags: [${tagsArray}],
        description: "${s.desc.replace(/\n/g, ' ').replace(/"/g, '\\"')}"
      }`;
            }).join(",\n");

            // 3. Generate Full Tags (Full Position, School, Rarity)
            const fullPos = FULL_POS_MAP[form.position] || form.position;
            const charTags = `["${fullPos}", "${form.school}", "${form.rarity}"]`;

            // 4. Construct Final Code
            const code = `  {
    id: "${id}",
    name: "${form.name}",
    school: "${form.school}",
    rarity: "${form.rarity}",
    position: "${fullPos}",
    stats: {
        lvl1: {
            Serve: ${form.serve.l1 || 0},
            ${attackType}: ${form.attack.l1 || 0},
            Set: ${form.set.l1 || 0},
            Receive: ${form.receive.l1 || 0},
            Block: ${form.block.l1 || 0},
            Save: ${form.save.l1 || 0}
        },
        max: {
            Serve: ${form.serve.mx || '"-"'},
            ${attackType}: ${form.attack.mx || '"-"'},
                Set: ${form.set.mx || '"-"'},
            Receive: ${form.receive.mx || '"-"'},
            Block: ${form.block.mx || '"-"'},
            Save: ${form.save.mx || '"-"'}
          },
    },
    tags: ${charTags},
    skills: [
${skillsCode}
    ],
  },`;

            await appendToCode(config, code, "src/data/player.ts");
            setStatus({ type: 'success', msg: 'Character Saved!' });
        } catch (e: any) { setStatus({ type: 'error', msg: e.message }); }
    };

    return (
        <div className="admin-grid">
            <div className="left-col admin-card">
                <h2>Character Data</h2>

                {/* Info Inputs */}
                <div className="input-group"><label>Name</label><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Shoyo Hinata (Practice)" /></div>

                <div className="row-group">
                    <div className="input-group"><label>School</label><select value={form.school} onChange={e => setForm({ ...form, school: e.target.value })}>{SCHOOLS.map(s => <option key={s}>{s}</option>)}</select></div>
                    <div className="input-group"><label>Position</label><select value={form.position} onChange={e => setForm({ ...form, position: e.target.value })}>{POSITIONS.map(p => <option key={p}>{p}</option>)}</select></div>
                    <div className="input-group">
                        <label>Rarity</label>
                        <select value={form.rarity} onChange={e => setForm({ ...form, rarity: e.target.value })}>
                            {RARITIES.map(r => (
                                <option key={r} value={r}>{r}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* Stats */}
                <h4 style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                    Stats (Lvl 1 / Max)
                    <select value={attackType} onChange={e => setAttackType(e.target.value as any)} style={{ width: 'auto', fontSize: 11, padding: 2 }}>
                        <option value="Quick_Attack">Quick Attack</option>
                        <option value="Power_Attack">Power Attack</option>
                    </select>
                </h4>

                <div className="stat-grid">
                    <div className="stat-row-input"><label>Serve</label><input type="number" onChange={e => handleStatChange('serve', 'l1', e.target.value)} /><input type="number" onChange={e => handleStatChange('serve', 'mx', e.target.value)} /></div>
                    <div className="stat-row-input"><label style={{ color: '#fbbf24' }}>Attack</label><input type="number" onChange={e => handleStatChange('attack', 'l1', e.target.value)} /><input type="number" onChange={e => handleStatChange('attack', 'mx', e.target.value)} /></div>
                    <div className="stat-row-input"><label>Set</label><input type="number" onChange={e => handleStatChange('set', 'l1', e.target.value)} /><input type="number" onChange={e => handleStatChange('set', 'mx', e.target.value)} /></div>
                    <div className="stat-row-input"><label>Receive</label><input type="number" onChange={e => handleStatChange('receive', 'l1', e.target.value)} /><input type="number" onChange={e => handleStatChange('receive', 'mx', e.target.value)} /></div>
                    <div className="stat-row-input"><label>Block</label><input type="number" onChange={e => handleStatChange('block', 'l1', e.target.value)} /><input type="number" onChange={e => handleStatChange('block', 'mx', e.target.value)} /></div>
                    <div className="stat-row-input"><label>Save</label><input type="number" onChange={e => handleStatChange('save', 'l1', e.target.value)} /><input type="number" onChange={e => handleStatChange('save', 'mx', e.target.value)} /></div>
                </div>

                {/* Skills */}
                <h4 style={{ marginTop: 20 }}>Skills</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                    {form.skills.map((skill, i) => (
                        <div key={i} style={{ background: '#222', padding: 10, borderRadius: 8, border: '1px solid #444' }}>
                            <div style={{ fontSize: 12, color: '#fbbf24', marginBottom: 5, fontWeight: 'bold' }}>Skill {i + 1}</div>
                            <div className="input-group" style={{ marginBottom: 5 }}>
                                <input placeholder="Skill Name" value={skill.name} onChange={e => handleSkillChange(i, "name", e.target.value)} />
                            </div>
                            <div className="input-group" style={{ marginBottom: 5 }}>
                                <input placeholder="Tags (e.g. Passive, Enhance Team)" value={skill.tags} onChange={e => handleSkillChange(i, "tags", e.target.value)} />
                            </div>
                            <textarea placeholder="Description" rows={7} value={skill.desc} onChange={e => handleSkillChange(i, "desc", e.target.value)} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Preview */}
            <div className="right-col admin-card">
                <h2>Data Preview</h2>
                <div style={{ background: '#222', padding: 15, borderRadius: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 15, borderBottom: '1px solid #444', paddingBottom: 10 }}>
                        <div>
                            <div style={{ fontWeight: 'bold' }}>{form.name || "Name"}</div>
                            <div style={{ fontSize: 12, color: '#aaa' }}>{form.school} • {FULL_POS_MAP[form.position]} • {form.rarity}</div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5, fontSize: 11, color: '#ccc', marginBottom: 15 }}>
                        <div>Serve: <b style={{ color: 'white' }}>{form.serve.l1}</b></div>
                        <div>{attackType === "Power_Attack" ? "Power" : "Quick"}: <b style={{ color: 'white' }}>{form.attack.l1}</b></div>
                        <div>Set: <b style={{ color: 'white' }}>{form.set.l1}</b></div>
                        <div>Recv: <b style={{ color: 'white' }}>{form.receive.l1}</b></div>
                        <div>Block: <b style={{ color: 'white' }}>{form.block.l1}</b></div>
                        <div>Save: <b style={{ color: 'white' }}>{form.save.l1}</b></div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {form.skills.map((s, i) => (
                            <div key={i} style={{ fontSize: 11 }}>
                                <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>{s.name || `Skill ${i + 1}`}</span>
                                <div style={{ fontSize: 10, color: '#4ade80', marginBottom: 2 }}>[{s.tags}]</div>
                                <div style={{ color: '#888' }}>{s.desc || "..."}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="copy-btn success save-btn" onClick={handleSave}>
                    {status.type === 'loading' ? '...' : 'Save Data'}
                </button>
                {status.msg && <p className={status.type} style={{ textAlign: 'center' }}>{status.msg}</p>}
            </div>
        </div>
    );
}