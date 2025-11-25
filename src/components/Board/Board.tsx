import Slot from "./Slot";
import BenchSlot from "./BenchSlot";
import PlayerModal from "../Modals/PlayerModal";
import { useTeamStore } from "../../store/teamStore";
import { useState } from "react";
import type { Player } from "../../types/Player";
import { characters } from "../../data/characters-global";


export default function Board() {
  const starters = useTeamStore((s) => s.starters);
  const setStarter = useTeamStore((s) => s.setStarter);
  const bench = useTeamStore((s) => s.bench);
  const addBench = useTeamStore((s) => s.addBench);

  const [modalOpen, setModalOpen] = useState(false);
  const [activeSlot, setActiveSlot] =
    useState<keyof typeof starters | null>(null);

  function openSlot(slotId: keyof typeof starters) {
    setActiveSlot(slotId);
    setModalOpen(true);
  }

  function handleSelect(player: Player) {
    try {
      if (!activeSlot) return;
      if (!player || !player.name) {
        console.error("Invalid player received:", player);
        return;
      }

      setStarter(activeSlot, player);
      setModalOpen(false);
    } catch (err) {
      console.error("handleSelect crash:", err);
    }
  }


  const roleMap: Record<string, string> = {
    S: "S", MB1: "MB", MB2: "MB", WS1: "WS", WS2: "WS", OP: "OP", LI: "Li",
  };


  return (
    <>
      <div id="board">

        {/* TOP */}
        <div className="row">
          <Slot
            slotId="S"
            player={starters.S}
            onClick={() => openSlot("S")}
            onRightClick={() => setStarter("S", null)}
          />
          <Slot slotId="MB1" player={starters.MB1}
            onClick={() => openSlot("MB1")}
            onRightClick={() => setStarter("MB1", null)}
          />

          <Slot slotId="WS1" player={starters.WS1}
            onClick={() => openSlot("WS1")}
            onRightClick={() => setStarter("WS1", null)}
          />
        </div>

        {/* MID */}
        <div className="row">
          <Slot slotId="LI" player={starters.LI}
            onClick={() => openSlot("LI")}
            onRightClick={() => setStarter("LI", null)}
          />

          <Slot slotId="WS2" player={starters.WS2}
            onClick={() => openSlot("WS2")}
            onRightClick={() => setStarter("WS2", null)}
          />

          <Slot slotId="MB2" player={starters.MB2}
            onClick={() => openSlot("MB2")}
            onRightClick={() => setStarter("MB2", null)}
          />

          <Slot slotId="OP" player={starters.OP}
            onClick={() => openSlot("OP")}
            onRightClick={() => setStarter("OP", null)}
          />
        </div>

        {/* BENCH */}
        <div id="bench-row">
          {bench.map((p, i) => (
            <BenchSlot key={i} player={p} />
          ))}

          <button id="addBench" type="button" onClick={() => addBench(null)}>
            + Bench
          </button>
        </div>
      </div>

      <PlayerModal
        open={modalOpen}
        players={characters}
        filterRole={activeSlot ? activeSlot.replace(/[0-9]/g, "") : null}
        onClose={() => setModalOpen(false)}
        onSelect={handleSelect}
      />


    </>
  );
}
