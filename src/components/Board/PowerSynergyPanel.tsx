import { useTeamStore } from "../../store/teamStore";
import type { Player } from "../../types/Player";

const SPECIALTY_RULES: Record<string, { counter: string; tiers: Record<number, string> }> = {
    "Quick": {
        counter: "Block",
        tiers: { 3: "30%", 4: "50%", 5: "70%", 6: "90%" },
    },
    "Block": {
        counter: "Power",
        tiers: { 3: "30%", 4: "50%", 5: "70%", 6: "90%" },
    },
    "Power": {
        counter: "Receive",
        tiers: { 3: "30%", 4: "50%", 5: "70%", 6: "90%" },
    },
    "Receive": {
        counter: "Quick Attack",
        tiers: { 3: "30%", 4: "50%", 5: "70%", 6: "90%", 7: "110%" },
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
                if (!powerMap[ability]) powerMap[ability] = [];
                powerMap[ability].push(p);
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

export default function PowerSynergyPanel() {
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
                {activePowers.map(([powerName, players]) => {
                    const rule = SPECIALTY_RULES[powerName];
                    const count = players.length;
                    const isActive = rule ? count >= 3 : false;
                    const missing = 3 - count;
                    return (
                        <div key={powerName} className={`power-item ${isActive ? 'active-specialty' : ''}`}>
                            <div className="power-header">
                                <div className="power-title-row">
                                    <span className="power-name">{powerName}</span>
                                    <span className="power-count">x{count}</span>
                                </div>
                                {isActive && rule && (
                                    <div className="power-meta">
                                        Counters: <strong className="counter-target">{rule.counter}</strong>
                                    </div>
                                )}
                            </div>
                            {rule ? (
                                <>
                                    {!isActive ? (
                                        <div className="activation-warning">
                                            Needs <strong>{missing}</strong> more to activate
                                        </div>
                                    ) : (
                                        <div className="tier-list">
                                            {Object.entries(rule.tiers).map(([reqCount, effect]) => {
                                                const req = parseInt(reqCount);
                                                const isMet = count >= req;
                                                const maxTier = Math.max(...Object.keys(rule.tiers).map(Number));
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
                                                        <span className="tier-effect">Power +{effect}</span>
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
                                        <img src={`data/${p.img}`} alt={p.name} />
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