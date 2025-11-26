import { useState } from "react";
import { useTeamStore } from "../../store/teamStore";
import type { Player } from "../../types/Player";

const ROLE_RULES: Record<string, {
    name: string;
    color: string;
    tiers: Record<number, string>
}> = {
    "S": {
        name: "Setter",
        color: "linear-gradient(90deg, #14b8a6, #2dd4bf)",
        tiers: {
            2: "Increases your Setter's (S) Set and Serve stats by 20%",
            3: "Your Setter's (S) Receive stat and Block stat increase by 20%, and the power of receives and blocks increases by 50% of their respective stats",
            4: "When your Setter (S) sets or performs a Setter Dump, increases your players' Defense Technique and Attack Technique by 20%, lasting for 4 net crossings"
        }
    },
    "OP": {
        name: "Opposite Hitter",
        color: "linear-gradient(90deg, #7e22ce, #a855f7)",
        tiers: {
            2: "Increases your Opposite Hitter's (OP) Basic Stats by 15%",
            3: "Your Opposite Hitter's (OP) Serve stat and Block stat increase by 20%, and the power of serves and blocks increases by 50% of their respective stats",
            4: "When your OP receives, increases their Attack Technique when spiking by 35% (4 net crossings); When your OP spikes, increases their Defense Technique when receiving by 35% (4 net crossings)"
        }
    },
    "WS": {
        name: "Wing Spiker",
        color: "linear-gradient(90deg, #ea580c, #fb923c)",
        tiers: {
            2: "Increases your Wing Spiker's (WS) Power and Receive stats by 20%",
            3: "Your Wing Spiker's (WS) Receive stat and Block stat increase by 20%, and the power of receives and blocks increases by 50% of their respective stats",
            4: "When your Wing Spiker (WS) performs a Power Spike, increases Awareness by 30% and Strength by 120%"
        }
    },
    "MB": {
        name: "Middle Blocker",
        color: "linear-gradient(90deg, #c2410c, #f97316)",
        tiers: {
            2: "Increases your Middle Blocker's (MB) Quick Attack and Block stats by 20%",
            3: "Your Middle Blocker's (MB) Serve stat and Receive stat increase by 20%, and the power of serves and receives increases by 50% of their respective stats",
            4: "Your Middle Blocker's (MB) Reflex when blocking increases by 30%; if this block is Critical, your MB's Strength when spiking next time increases by 120%"
        }
    }
};

export default function RoleSynergyPanel() {
    const [isOpen, setIsOpen] = useState(false);
    const currentData = useTeamStore((s) => s.positionless ? s.positionlessData : s.normal);

    const teams = currentData.teams;
    const activeId = currentData.activeTeamId;
    const activeTeam = teams.find((t) => t.id === activeId) || teams[0];
    const starters = activeTeam.starters;

    const roleGroups = Object.values(starters).reduce((acc, p) => {
        if (p) {
            const role = p.role;
            if (!acc[role]) acc[role] = [];
            acc[role].push(p);
        }
        return acc;
    }, {} as Record<string, Player[]>);

    const activeRoles = Object.entries(roleGroups)
        .filter(([role]) => ROLE_RULES[role])
        .sort((a, b) => b[1].length - a[1].length);

    return (
        <div className="synergy-card">
            <h3
                className="panel-title"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    cursor: "pointer",
                    userSelect: "none",
                    justifyContent: "space-between"
                }}
            >
                <span>Freedom Championship</span>
                <span style={{ fontSize: '12px', color: '#888' }}>
                    {isOpen ? "▼" : "▶"}
                </span>
            </h3>
            {isOpen && (
                <div className="role-list">
                    {activeRoles.map(([roleCode, players]) => {
                        const rule = ROLE_RULES[roleCode];
                        const count = players.length;

                        return (
                            <div key={roleCode} className="role-card">
                                <div className="role-header" style={{ background: rule.color }}>
                                    <div className="role-title">
                                        <span className="role-badge">{roleCode}</span>
                                        <span className="role-tier-indicator">{count}/4</span>
                                    </div>

                                    <div className="role-heads">
                                        {players.map((p, i) => (
                                            <img key={i} src={`data/${p.img}`} alt={p.name} className="role-head-img" />
                                        ))}
                                        {Array.from({ length: Math.max(0, 4 - count) }).map((_, i) => (
                                            <div key={`empty-${i}`} className="role-head-empty" />
                                        ))}
                                    </div>
                                </div>

                                <div className="role-body">
                                    {Object.entries(rule.tiers).map(([tierStr, desc]) => {
                                        const tier = parseInt(tierStr);
                                        const isActive = count >= tier;

                                        return (
                                            <div key={tier} className={`role-rule ${isActive ? "active" : "inactive"}`}>
                                                <span className="rule-number">{tier}:</span>
                                                <p className="rule-text">{desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}