import type { Player } from "../../types/Player";

export default function BenchSlot({ player }: { player: Player | null }) {
  return (
    <div className="bench-slot">
      {player && <img src={`public/data/${player.img}`} />}
    </div>
  );
}
