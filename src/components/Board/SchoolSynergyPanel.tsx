import { useMemo } from "react";
import { useTeamStore } from "../../store/teamStore";
import { synergies } from "../../data/synergies";

export default function SchoolSynergyPanel() {
const teams = useTeamStore((s) => s.teams);
  const activeId = useTeamStore((s) => s.activeTeamId);
  
  const activeTeam = teams.find((t) => t.id === activeId) || teams[0];
  const starters = activeTeam.starters;

  const schoolBonds = useMemo(() => {
    return synergies
      .filter((s) => s.category === "school")
      .map((s) => {
        const schoolName = s.school!;
        const presentPlayers = Object.values(starters).filter(
          (p) => p && p.school === schoolName
        );

        const presentCount = presentPlayers.length;
        const min = s.activation?.min ?? 0;

        return {
          name: s.name,
          description: s.description,
          presentCount,
          missing: Math.max(0, min - presentCount),
          min,
          active: presentCount >= min,
        };
      })
      .filter((b) => b.presentCount > 0);
  }, [starters]);

  return (
    <div className="synergy-card">
      <h3 className="panel-title">
        <span>School Synergies</span>
      </h3>
      <ul className="bond-list">
        {schoolBonds.map((bond) => (
          <li
            key={bond.name}
            className={`bond-item ${bond.active ? "bond-active" : ""}`}
          >
            <div className="bond-title">
              <span>{bond.name}</span>
              {!bond.active && (
                <span className="missing-label" style={{ marginLeft: "auto", fontSize: "11px" }}>
                  (Need {bond.missing} more)
                </span>
              )}
              {bond.active && <span className="active-label" style={{ marginLeft: "auto", color: "#4ade80", fontSize: "11px" }}>ACTIVE</span>}
            </div>
            {bond.active && (
              <div className="bond-content" style={{ marginTop: "8px" }}>
                <div className="bond-description">
                  {typeof bond.description === "string" ? (
                    <p>{bond.description}</p>
                  ) : (
                    Object.entries(bond.description).map(([who, text]) => (
                      <p key={who}>
                        <strong>{who}:</strong> {text}
                      </p>
                    ))
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}