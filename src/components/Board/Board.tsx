import Slot from "./Slot";
import BenchSlot from "./BenchSlot";
import PlayerModal from "../Modals/PlayerModal";
import { useTeamStore } from "../../store/teamStore";
import { useState } from "react";
import type { Player } from "../../types/Player";
import { characters } from "../../data/characters-global";
import SynergyPanel from "./SynergyPanel";
import PowerSynergyPanel from "./PowerSynergyPanel";

export default function Board() {
  const positionless = useTeamStore((s) => s.positionless);

  const currentData = useTeamStore((s) => s.positionless ? s.positionlessData : s.normal);

  const teams = currentData.teams;
  const activeId = currentData.activeTeamId;
  const activeTeam = teams.find((t) => t.id === activeId) || teams[0];
  const { starters, bench, positions } = activeTeam

  const setActiveTeam = useTeamStore((s) => s.setActiveTeam);
  const addTeam = useTeamStore((s) => s.addTeam);
  const removeTeam = useTeamStore((s) => s.removeTeam);
  const setStarter = useTeamStore((s) => s.setStarter);
  const addBench = useTeamStore((s) => s.addBench);
  const rotatePositions = useTeamStore((s) => s.rotatePositions);


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

  const getFilterRole = () => {
    if (addToBenchMode) return null;
    if (positionless) return null;
    return activeSlot ? activeSlot.replace(/[0-9]/g, "") : null;
  };

  const renderRotatableSlot = (index: number) => {
    const slotId = positions[index];
    const player = starters[slotId];
    return (
      <Slot
        key={slotId}
        slotId={slotId}
        player={player}
        onClick={() => openSlot(slotId)}
        onRightClick={() => setStarter(slotId, null)}
      />
    );
  };

  return (
    <>
      {/* --- TEAM TABS --- */}
      <div className="board-group">
        <div className="tabs-container">
          {teams.map((team) => (
            <div
              key={team.id}
              className={`tab ${team.id === activeId ? 'active' : ''}`}
              onClick={() => setActiveTeam(team.id)}
            >
              <span>{team.name}</span>
              {teams.length > 1 && (
                <button
                  className="tab-close"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTeam(team.id);
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button className="tab-add" onClick={addTeam} title="Add New Team">
            +
          </button>
        </div>
        <div id="board" style={{ borderTopLeftRadius: '0' }}>
          <div className="row">
            {renderRotatableSlot(0)}
            {renderRotatableSlot(1)}
            {renderRotatableSlot(2)}
          </div>
          <div className="row">
            <Slot slotId="LI" player={starters.LI} onClick={() => openSlot("LI")} onRightClick={() => setStarter("LI", null)} />
            {renderRotatableSlot(5)}
            {renderRotatableSlot(4)}
            {renderRotatableSlot(3)}
          </div>
          <div id="bench-row">
            {bench.map((p, i) => (
              <BenchSlot key={i} player={p} index={i} />
            ))}
            <button
              className="action-btn"
              onClick={rotatePositions}
              title="Rotate Positions"
            >
              <span style={{ fontSize: '18px', marginBottom: '2px' }}>↻</span>
              <span>Rotate</span>
            </button>
            <button
              id="addBench"
              className="action-btn"
              disabled={bench.length >= 6}
              onClick={() => {
                setAddToBenchMode(true);
                setActiveSlot(null);
                setModalOpen(true);
              }}
            >
              {bench.length >= 6 ? "Full" : "+ Bench"}
            </button>
          </div>
        </div>
      </div>
      <PlayerModal
        open={modalOpen}
        players={characters}
        filterRole={getFilterRole()}
        onClose={() => {
          setAddToBenchMode(false);
          setModalOpen(false);
        }}
        onSelect={handleSelect}
      />
    </>
  );
}