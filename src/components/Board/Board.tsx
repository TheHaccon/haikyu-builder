import Slot from "./Slot";
import BenchSlot from "./BenchSlot";
import PlayerModal from "../Modals/PlayerModal";
import { useTeamStore } from "../../store/teamStore";
import { useState } from "react";
import type { Player } from "../../types/Player";
import { characters } from "../../data/characters-global";
import SynergyPanel from "./SynergyPanel";

export default function Board() {
  const starters = useTeamStore((s) => s.starters);
  const setStarter = useTeamStore((s) => s.setStarter);
  const bench = useTeamStore((s) => s.bench);
  const addBench = useTeamStore((s) => s.addBench);

  const [modalOpen, setModalOpen] = useState(false);
  const [activeSlot, setActiveSlot] = useState<keyof typeof starters | null>(null);
  const [addToBenchMode, setAddToBenchMode] = useState(false);

  const openSlot = (slot: keyof typeof starters) => {
    setActiveSlot(slot);
    setAddToBenchMode(false);
    setModalOpen(true);
  };

  const handleSelect = (p: Player) => {
    if (addToBenchMode) {
      addBench(p);
      setAddToBenchMode(false);
      setModalOpen(false);
      return;
    }

    if (activeSlot) {
      setStarter(activeSlot, p);
    }

    setModalOpen(false);
  };

  return (
    <>
      <div id="board">
        <div className="row">
          <Slot slotId="S" player={starters.S} onClick={() => openSlot("S")} onRightClick={() => setStarter("S", null)} />
          <Slot slotId="MB1" player={starters.MB1} onClick={() => openSlot("MB1")} onRightClick={() => setStarter("MB1", null)} />
          <Slot slotId="WS1" player={starters.WS1} onClick={() => openSlot("WS1")} onRightClick={() => setStarter("WS1", null)} />
        </div>
        <div className="row">
          <Slot slotId="LI" player={starters.LI} onClick={() => openSlot("LI")} onRightClick={() => setStarter("LI", null)} />
          <Slot slotId="WS2" player={starters.WS2} onClick={() => openSlot("WS2")} onRightClick={() => setStarter("WS2", null)} />
          <Slot slotId="MB2" player={starters.MB2} onClick={() => openSlot("MB2")} onRightClick={() => setStarter("MB2", null)} />
          <Slot slotId="OP" player={starters.OP} onClick={() => openSlot("OP")} onRightClick={() => setStarter("OP", null)} />
        </div>

        <div id="bench-row">
          {bench.map((p, i) => (
            <BenchSlot key={i} player={p} index={i} />
          ))}

          <button
            id="addBench"
            disabled={bench.length >= 6}
            className={bench.length >= 6 ? "bench-disabled" : ""}
            onClick={() => {
              setAddToBenchMode(true);
              setActiveSlot(null);
              setModalOpen(true);
            }}
          >
            {bench.length >= 6 ? "bench full" : "+ bench"}
          </button>
        </div>
      </div>
      <SynergyPanel />
      <PlayerModal
        open={modalOpen}
        players={characters}
        filterRole={addToBenchMode ? null : activeSlot ? activeSlot.replace(/[0-9]/g, "") : null}
        onClose={() => {
          setAddToBenchMode(false);
          setModalOpen(false);
        }}
        onSelect={handleSelect}
      />
    </>
  );
}
