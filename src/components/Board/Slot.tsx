import type { Player } from "../../types/Player";

interface SlotProps {
  slotId: string;
  player: Player | null;
  onClick: () => void;
  onRightClick: () => void;
}

export default function Slot({ slotId, player, onClick, onRightClick }: SlotProps) {
  return (
    <div
      className="slot"
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();   // disable browser menu
        onRightClick();
      }}
    >
      <div className="hex">
        {player ? (
          <img src={`public/data/${player.img}`} alt={player.name} />
        ) : (
          <div className="slot-empty">+ {slotId}</div>
        )}
      </div>

      <div className="label">{player ? player.name : slotId}</div>
    </div>
  );
}

