import { useTeamStore } from "../../store/teamStore";
import type { Player } from "../../types/Player";

const SPECIALTY_RULES: Record<string, { counter: string; tiers: Record<number, string> }> = {
  "Quick": { 
    counter: "Block",
    tiers: { 
        4: "All allies' power +15%", 
        5: "All allies' power +20%", 
        6: "All allies' power +25%" 
    },
  },
  "Block": {
    counter: "Power",
    tiers: { 
        4: "All allies' power +15%", 
        5: "All allies' power +20%", 
        6: "All allies' power +25%" 
    },
  },
  "Power": {
    counter: "Receive",
    tiers: { 
        4: "All allies' power +15%", 
        5: "All allies' power +20%", 
        6: "All allies' power +25%" 
    },
  },
  "Receive": {
    counter: "Quick",
    tiers: { 
        5: "All allies' power +15%", 
        6: "All allies' power +20%", 
        7: "All allies' power +25%" 
    },
  },
};

const getActivePowers = (starters: Record<string, Player | null>) => {
    const activePlayers = Object.values(starters).filter((p): p is Player => p !== null);
    const powerMap: Record<string, Player[]> = {};

    activePlayers.forEach((p) => {
        const rawPower = (p as any).power;
        if (rawPower) {
            const powerList: string[] = Array.isArray(rawPower) ? rawPower : [rawPower];
            powerList.forEach((ability) => {
                const cleanAbility = ability === "Quick Attack" ? "Quick" : ability;
                if (!powerMap[cleanAbility]) powerMap[cleanAbility] = [];
                powerMap[cleanAbility].push(p);
            });
        }
    });

    return Object.entries(powerMap).sort((a, b) => {
        const isSpecialtyA = !!SPECIALTY_RULES[a[0]];
        const isSpecialtyB = !!SPECIALTY_RULES[b[0]];
        if (isSpecialtyA && !isSpecialtyB) return -1;
        if (!isSpecialtyA && isSpecialtyB) return 1;
        return b[1].length - a[1].length;
    });
};

export default function SpecialtyPanel() {
    const positionless = useTeamStore((s) => s.positionless);
    const currentData = useTeamStore((s) => s.positionless ? s.positionlessData : s.normal);

    const teams = currentData.teams;
    const activeId = currentData.activeTeamId;
    const activeTeam = teams.find((t) => t.id === activeId) || teams[0];
    const starters = activeTeam.starters;
    
    const activePowers = getActivePowers(starters);

    return (
        <div className="synergy-card">
            <h3 className="panel-title">
                <span>Specialty Synergies</span>
            </h3>

            <div className="power-list">
                {activePowers.length === 0 && (
                    <div style={{ padding: "8px", color: "#888", fontStyle: "italic", fontSize: "13px" }}>
                        No specialty players on board.
                    </div>
                )}

                {activePowers.map(([powerName, players]) => {
                    const rule = SPECIALTY_RULES[powerName];
                    const count = players.length;
                    
                    // --- DYNAMIC ACTIVATION LOGIC ---
                    // Find the lowest tier requirement (4 for most, 5 for Receive)
                    const minTier = rule ? Math.min(...Object.keys(rule.tiers).map(Number)) : 0;
                    const isActive = rule ? count >= minTier : false;
                    const missing = Math.max(0, minTier - count);

                    // Only render if it's one of the 4 main specialties OR if it has players
                    if (!rule && count === 0) return null;

                    return (
                        <div key={powerName} className={`power-item ${isActive ? 'active-specialty' : ''}`}>
                            <div className="power-header">
                                <div className="power-title-row">
                                    <span className="power-name">{powerName}</span>
                                    <span className="power-count">x{count}</span>
                                </div>

                                {rule && (
                                    <div className="power-meta" style={{fontSize: '11px', color: '#aaa'}}>
                                        Counters: <strong style={{color:'#f87171'}}>{rule.counter}</strong>
                                    </div>
                                )}
                            </div>

                            {rule ? (
                                <>
                                    {!isActive ? (
                                        <div className="activation-warning">
                                            Needs <strong>{missing}</strong> more
                                        </div>
                                    ) : (
                                        <div className="tier-list">
                                            {Object.entries(rule.tiers).map(([reqCount, effect]) => {
                                                const req = parseInt(reqCount);
                                                const isMet = count >= req;
                                                const maxTier = Math.max(...Object.keys(rule.tiers).map(Number));
                                                // Highlight current tier
                                                const isCurrentTier = count === req || (count > maxTier && req === maxTier);

                                                return (
                                                    <div
                                                        key={req}
                                                        className={`tier-line ${isCurrentTier ? 'tier-active' : ''} ${!isMet ? 'tier-locked' : ''}`}
                                                    >
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                            {isCurrentTier && <span>✓</span>}
                                                            <span className="tier-req">{req} tags:</span>
                                                        </div>
                                                        <span className="tier-effect" style={{fontSize: '11px'}}>{effect}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </>
                            ) : null}

                            <div className="power-contributors" style={{ marginTop: '10px' }}>
                                {players.map((p, i) => (
                                    <div key={`${powerName}-${p.name}-${i}`} className="mini-head" title={p.name}>
                                        <img src={`data/${p.img}`} alt={p.name} onError={(e) => e.currentTarget.style.display='none'} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}