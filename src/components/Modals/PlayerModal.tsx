import { useState } from "react";
import type { Player } from "../../types/Player";
import { useTeamStore } from "../../store/teamStore";

interface PlayerModalProps {
  open: boolean;
  players: Player[];
  filterRole?: string | null;
  onClose: () => void;
  onSelect: (player: Player) => void;
}

export default function PlayerModal({
  open,
  players,
  filterRole,
  onClose,
  onSelect,
}: PlayerModalProps) {

  const [search, setSearch] = useState("");

  // ✅ get stable function (NOT its result)
  const getUsedCharacterNames = useTeamStore((s) => s.getUsedCharacterNames);

  if (!open) return null;

  // Now call the function *after*
  const usedNames = getUsedCharacterNames();

  // 🎯 Filter ONLY by search + role, NOT by used
  const filtered = players.filter((p) => {
    if (filterRole && p.role !== filterRole) return false;

    return (
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.school.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div id="modal" aria-hidden={open ? "false" : "true"} onClick={onClose}>
      <div id="sheet" onClick={(e) => e.stopPropagation()}>

        <header id="modal-header">
          <h3 id="modalTitle">Players</h3>

          <div id="modal-actions">
            <input
              id="search"
              type="search"
              placeholder="Search players…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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

            return (
              <div
                key={p.name}
                className={`card ${isUsed ? "disabled-card" : ""}`}
                onClick={() => {
                  if (!isUsed) onSelect(p);
                }}
              >
                <img
                  src={`public/data/${p.img}`}
                  alt={p.name}
                  className={isUsed ? "img-disabled" : ""}
                />

                <div className="name">{p.name}</div>
                <div className="meta">{p.school} · {p.role}</div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
