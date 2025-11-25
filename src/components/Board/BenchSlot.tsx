import type { Player } from "../../types/Player";
import { useTeamStore } from "../../store/teamStore";

interface Props {
  player: Player | null;
  index: number;
}

export default function BenchSlot({ player, index }: Props) {
  const removeBench = useTeamStore((s) => s.removeBench);

  return (
    <div
      className="bench-slot"
      onContextMenu={(e) => {
        e.preventDefault();
        removeBench(index);
      }}
    >
      {player ? (
        <img src={`public/data/${player.img}`} />
      ) : (
        <div className="empty-bench">+</div>
      )}
    </div>
  );
}
