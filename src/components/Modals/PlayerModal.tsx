import { useState, useMemo } from "react";
import type { Player } from "../../types/Player";
import { useTeamStore } from "../../store/teamStore";

interface Props {
  open: boolean;
  players: Player[];
  filterRole: string | null;
  onClose: () => void;
  onSelect: (p: Player) => void;
}

export default function PlayerModal({
  open,
  players,
  filterRole,
  onClose,
  onSelect,
}: Props) {

  // HOOKS must always run:
  const [search, setSearch] = useState("");
  const [school, setSchool] = useState("ALL");
  const [rarityFilter, setRarityFilter] = useState("ALL");

  const starters = useTeamStore((s) => s.starters);
  const bench = useTeamStore((s) => s.bench);

  const usedNames = useMemo(() => {
    const set = new Set<string>();
    Object.values(starters).forEach((p) => p && set.add(p.name.split(" ")[0]));
    bench.forEach((p) => p && set.add(p.name.split(" ")[0]));
    return set;
  }, [starters, bench]);

  // Determine rarity from name
  const getRarity = (n: string): "SP" | "UR" | "SSR" | "SR" | "R" | "NONE" => {
    if (n.includes("SP")) return "SP";
    if (n.includes("UR")) return "UR";
    if (n.includes("SSR")) return "SSR";
    if (n.includes("SR")) return "SR";
    if (n.includes(" R")) return "R";
    return "NONE";
  };

  const rarityOrder = (r: string) =>
    r === "SP" ? 0 :
    r === "UR" ? 1 :
      r === "SSR" ? 2 :
        r === "SR" ? 3 :
          r === "R" ? 4 : 5;

  const schoolList = useMemo(() => {
    const s = new Set<string>();
    players.forEach((p) => s.add(p.school));
    return ["ALL", ...Array.from(s).sort()];
  }, [players]);

  const filtered = useMemo(() => {
    const searchLower = search.toLowerCase();

    return players
      .filter((p) => {
        if (filterRole && p.role !== filterRole) return false;
        if (school !== "ALL" && p.school !== school) return false;

        const r = getRarity(p.name);
        if (rarityFilter !== "ALL" && r !== rarityFilter) return false;

        if (searchLower && !p.name.toLowerCase().includes(searchLower))
          return false;

        return true;
      })
      .sort((a, b) => {
        const baseA = a.name.split(" ")[0];
        const baseB = b.name.split(" ")[0];
        const nameOrder = baseA.localeCompare(baseB);
        if (nameOrder !== 0) return nameOrder;

        const ra = rarityOrder(getRarity(a.name));
        const rb = rarityOrder(getRarity(b.name));
        return ra - rb;
      });
  }, [players, filterRole, school, rarityFilter, search]);


  if (!open) return null;

  return (
    <div id="modal" aria-hidden="false" onClick={onClose}>
      <div id="sheet" onClick={(e) => e.stopPropagation()}>

        <header id="modal-header">
          <h3>Players</h3>

          <div id="modal-actions">

            {/* School Filter */}
            <select value={school} onChange={(e) => setSchool(e.target.value)}>
              {schoolList.map((s) => (
                <option key={s} value={s}>{s === "ALL" ? "All schools" : s}</option>
              ))}
            </select>

            {/* Rarity Filter */}
            <select
              value={rarityFilter}
              onChange={(e) => setRarityFilter(e.target.value)}
            >
              <option value="ALL">All rarity</option>
              <option value="UR">UR</option>
              <option value="SSR">SSR</option>
              <option value="SR">SR</option>
              <option value="R">R</option>
            </select>

            {/* Search */}
            <input
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name…"
            />

            <button id="closeModal" type="button" className="danger" onClick={onClose}>
              Close
            </button>

          </div>
        </header>

        <div id="gallery">
          {filtered.map((p) => {
            const base = p.name.split(" ")[0];
            const isUsed = usedNames.has(base);
            const r = getRarity(p.name);

            return (
              <div
                key={p.name}
                className={`card ${isUsed ? "disabled-card" : ""}`}
                onClick={() => !isUsed && onSelect(p)}
              >
                {isUsed && <div className="used-tag">Already chosen</div>}

                <img
                  src={`data/${p.img}`}
                  className={isUsed ? "img-disabled" : ""}
                />

                <div className="name">{p.name}</div>
                <div className="meta">
                  {p.school} · {p.role} · {r}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
