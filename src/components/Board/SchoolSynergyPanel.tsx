import { useMemo } from "react";
import { useTeamStore } from "../../store/teamStore";
import { synergies } from "../../data/synergies";

export default function SchoolSynergyPanel() {
  const starters = useTeamStore((s) => s.starters);

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
    <ul className="bond-list">
      {schoolBonds.length === 0 && <li>(no active school)</li>}

      {schoolBonds.map((bond) => (
        <li
          key={bond.name}
          className={`bond-item ${bond.active ? "bond-active" : ""}`}
        >
          <div className="bond-title">
            {bond.name}
            {!bond.active && (
              <span className="missing-label">
                {" "}
                — {bond.missing} missing (need {bond.min})
              </span>
            )}
            {bond.active && <span className="active-label"> — ACTIVE</span>}
          </div>

          {bond.active && (
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
          )}
        </li>
      ))}
    </ul>
  );
}
