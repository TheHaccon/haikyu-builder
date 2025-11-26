import type { Player } from "../../types/Player";

interface Props {
  slotId: string;
  player: Player | null;
  onClick: () => void;
  onRightClick: () => void;
}

export default function Slot({ slotId, player, onClick, onRightClick }: Props) {
  return (
    <div
      className="slot"
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        onRightClick();
      }}
    >
      <div className="hex">
        {player ? (
          <img src={`/data/${player.img}`} />
        ) : (
          <div className="slot-empty">+ {slotId}</div>
        )}
      </div>

      <div className="label">{player ? player.name : slotId}</div>
    </div>
  );
}
