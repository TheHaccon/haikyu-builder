import { useState } from "react";
import type { Player } from "../../types/Player";

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
  
  // Always at the top — safe hooks
  const [search, setSearch] = useState("");

  if (!open) return null; // Modal closed → don't render

  // Filter players like before
  const filtered = players.filter((p) => {
    if (filterRole && p.role !== filterRole) return false;

    if (!search) return true;

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

            <button id="closeModal" type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </header>

        <div id="gallery">
          {filtered.map((p) => (
            <div
              key={p.name}
              className="card"
              onClick={() => onSelect(p)}
            >
              <img 
                src={`public/data/${p.img}`} 
                alt={p.name} 
              />

              <div className="name">{p.name}</div>
              <div className="meta">
                {p.school} · {p.role}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
