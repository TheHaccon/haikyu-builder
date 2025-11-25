// src/components/Board/BenchSlot.tsx
interface BenchSlotProps {
  player?: { img: string; name: string } | null;
  onClick?: () => void;
}

export default function BenchSlot({ player, onClick }: BenchSlotProps) {
  return (
    <div className="bench-slot" onClick={onClick}>
      {player ? <img src={player.img} alt={player.name} /> : null}
    </div>
  );
}
