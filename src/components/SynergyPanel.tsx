import { useTeamStore } from "../store/teamStore";
import useHaikyuData from "../hooks/useHaikyuData";

export default function SynergyPanel() {
  const currentData = useTeamStore((s) => s.positionless ? s.positionlessData : s.normal);

  const activeId = currentData.activeTeamId;
  const activeTeam = currentData.teams.find((t) => t.id === activeId) || currentData.teams[0];
  const starters = activeTeam.starters;

  const { synergyMeta, synergyDescriptions, synergyPairs, loading } = useHaikyuData();

  if (loading) return <div style={{ padding: 16, color: "#888" }}>Loading synergies...</div>;

  const active = [];
  const activePlayers = Object.values(starters)
    .filter((p) => p !== null)
    .map((p) => p!.name);
  for (const synergyName in synergyMeta) {
    const meta = synergyMeta[synergyName];
    if (meta.category === "school") {
      const count = activePlayers.filter((p) =>
        p.includes(meta.school || synergyName)
      ).length;

      if (count >= meta.activation.min) {
        active.push({
          name: synergyName,
          description: synergyDescriptions[synergyName],
        });
      }
    }
    if (synergyPairs[synergyName]) {
      const pairs = synergyPairs[synergyName];
      for (const group of pairs) {
        const match = group.every((charName: string) =>
          activePlayers.some((p) => p.includes(charName))
        );

        if (match) {
          active.push({
            name: synergyName,
            description: synergyDescriptions[synergyName],
          });
          break;
        }
      }
    }
  }

  return (
    <div className="synergy-card">
      <h3 className="panel-title">
        <span>Deployment Bonds</span>
      </h3>

      <div className="bond-list">
        {active.length === 0 && (
          <div style={{ padding: "8px", color: "#888", fontStyle: "italic" }}>
            No deployment bonds active.
          </div>
        )}

        {active.map((s, i) => (
          <div key={i} className="bond-item bond-active">
            <div className="bond-title">
              <span>{s.name}</span>
              <span className="active-label" style={{ marginLeft: "auto", color: "#4ade80", fontSize: "11px" }}>
                ACTIVE
              </span>
            </div>

            <div className="bond-content" style={{ marginTop: "8px" }}>
              <div className="bond-description">
                {typeof s.description === "string" ? (
                  <p>{s.description}</p>
                ) : (
                  <p>{JSON.stringify(s.description).replace(/[{}"']/g, " ")}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}