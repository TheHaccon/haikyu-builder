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

  const [search, setSearch] = useState("");
  const [school, setSchool] = useState("ALL");
  const [rarityFilter, setRarityFilter] = useState("ALL");
  const [powerFilter, setPowerFilter] = useState("ALL");
  const [roleFilter, setRoleFilter] = useState("ALL");

  const teams = useTeamStore((s) => s.teams);
  const activeId = useTeamStore((s) => s.activeTeamId);

  const activeTeam = teams.find((t) => t.id === activeId) || teams[0];
  const starters = activeTeam.starters;
  const bench = activeTeam.bench;

  const resetFilters = () => {
    setSearch("");
    setSchool("ALL");
    setRarityFilter("ALL");
    setPowerFilter("ALL");
    setRoleFilter("ALL");
  };

  const handleClose = () => {
    resetFilters();
    onClose();
  };

  const handleCardClick = (p: Player) => {
    onSelect(p);
    resetFilters();
  };

  const usedNames = useMemo(() => {
    const set = new Set<string>();
    Object.values(starters).forEach((p) => p && set.add(p.name.split(" ")[0]));
    bench.forEach((p) => p && set.add(p.name.split(" ")[0]));
    return set;
  }, [starters, bench]);
  const getRarity = (n: string): "SP" | "UR" | "SSR" | "SR" | "R" | "NONE" => {
    if (n.includes("SP")) return "SP";
    if (n.includes("UR")) return "UR";
    if (n.includes("SSR")) return "SSR";
    if (n.includes("SR")) return "SR";
    if (n.includes(" R")) return "R";
    return "NONE";
  };

  const rarityOrder = (r: string) =>
    r === "SP" ? 0 : r === "UR" ? 1 : r === "SSR" ? 2 : r === "SR" ? 3 : r === "R" ? 4 : 5;

  const schoolList = useMemo(() => {
    const s = new Set<string>();
    players.forEach((p) => s.add(p.school));
    return ["ALL", ...Array.from(s).sort()];
  }, [players]);

  const powerList = useMemo(() => {
    const s = new Set<string>();
    players.forEach((p) => {
      const raw = (p as any).power;
      if (raw) {
        if (Array.isArray(raw)) raw.forEach((item) => s.add(item));
        else s.add(raw);
      }
    });
    return ["ALL", ...Array.from(s).sort()];
  }, [players]);
  const filtered = useMemo(() => {
    const searchLower = search.toLowerCase();

    return players
      .filter((p) => {
        if (filterRole && p.role !== filterRole) return false;
        if (!filterRole && roleFilter !== "ALL" && p.role !== roleFilter) return false;
        if (school !== "ALL" && p.school !== school) return false;
        const r = getRarity(p.name);
        if (rarityFilter !== "ALL" && r !== rarityFilter) return false;
        if (powerFilter !== "ALL") {
          const rawPower = (p as any).power;
          if (!rawPower) return false;
          const pList = Array.isArray(rawPower) ? rawPower : [rawPower];
          if (!pList.includes(powerFilter)) return false;
        }
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
  }, [players, filterRole, roleFilter, school, rarityFilter, powerFilter, search]);


  if (!open) return null;

  return (
    <div id="modal" aria-hidden="false" onClick={handleClose}>
      <div id="sheet" onClick={(e) => e.stopPropagation()}>
        <header id="modal-header">
          <h3>Players</h3>
          <div id="modal-actions">
            {!filterRole && (
              <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
                <option value="ALL">All Roles</option>
                <option value="S">Setter (S)</option>
                <option value="WS">Wing Spiker (WS)</option>
                <option value="MB">Middle Blocker (MB)</option>
                <option value="OP">Opposite (OP)</option>
                <option value="LI">Libero (LI)</option>
              </select>
            )}
            <select value={school} onChange={(e) => setSchool(e.target.value)}>
              {schoolList.map((s) => (
                <option key={s} value={s}>{s === "ALL" ? "All Schools" : s}</option>
              ))}
            </select>
            <select
              value={powerFilter}
              onChange={(e) => setPowerFilter(e.target.value)}
              style={{ minWidth: '110px' }}
            >
              {powerList.map((p) => (
                <option key={p} value={p}>
                  {p === "ALL" ? "All Powers" : `${p}`}
                </option>
              ))}
            </select>
            <select
              value={rarityFilter}
              onChange={(e) => setRarityFilter(e.target.value)}
            >
              <option value="ALL">All Rarity</option>
              <option value="SP">SP</option>
              <option value="UR">UR</option>
              <option value="SSR">SSR</option>
              <option value="SR">SR</option>
              <option value="R">R</option>
            </select>
            <input
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name…"
            />
            <button id="closeModal" type="button" className="danger" onClick={handleClose}>
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
                onClick={() => !isUsed && handleCardClick(p)}
              >
                {isUsed && <div className="used-tag">Already chosen</div>}
                <img
                  src={`data/${p.img}`}
                  className={isUsed ? "img-disabled" : ""}
                  alt={p.name}
                />
                <div className="name">{p.name}</div>
                <div className="meta">
                  {p.school} · {p.role} · {r}
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div style={{ gridColumn: '1 / -1', padding: '20px', textAlign: 'center', color: '#888' }}>
              No players found matching these filters.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}