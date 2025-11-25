import { useTeamStore } from "../store/teamStore";
import useHaikyuData from "../hooks/useHaikyuData";

export default function SynergyPanel() {
  const { starters } = useTeamStore();
  const { synergyMeta, synergyDescriptions, synergyPairs, loading } = useHaikyuData();

  if (loading) return <div>Loading synergies...</div>;

  const active = [];

  // Create a flat list of active player names
  const activePlayers = Object.values(starters)
    .filter((p) => p !== null)
    .map((p) => p!.name);

  // Check every synergy
  for (const synergyName in synergyMeta) {
    const meta = synergyMeta[synergyName];

    // Check if it's a school synergy
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

    // Check character pair synergies
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
        }
      }
    }
  }

  return (
    <div className="synergy-panel">
      <h2>Active Synergies</h2>

      {active.length === 0 && <p>No synergies active.</p>}

      {active.map((s, i) => (
        <div key={i} className="synergy-item">
          <h3>{s.name}</h3>
          <p>{JSON.stringify(s.description)}</p>
        </div>
      ))}
    </div>
  );
}
