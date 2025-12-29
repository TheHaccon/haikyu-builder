import Slot from "./Slot";
import BenchSlot from "./BenchSlot";
import PlayerModal from "../Modals/PlayerModal";
import { useTeamStore } from "../../store/teamStore";
import { useState } from "react";
import type { Player } from "../../types/Player";
import { characters } from "../../data/characters-global"; 

export default function Board() {
  // DIRECT ACCESS - No more "normal" vs "positionless" check
  const teams = useTeamStore((s) => s.teams);
  const activeId = useTeamStore((s) => s.activeTeamId);

  const activeTeam = teams.find((t) => t.id === activeId) || teams[0];
  const { starters, bench, positions } = activeTeam;

  const setActiveTeam = useTeamStore((s) => s.setActiveTeam);
  const addTeam = useTeamStore((s) => s.addTeam);
  const removeTeam = useTeamStore((s) => s.removeTeam);
  const setStarter = useTeamStore((s) => s.setStarter);
  const addBench = useTeamStore((s) => s.addBench);
  const rotatePositions = useTeamStore((s) => s.rotatePositions);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSlot, setActiveSlot] = useState<string | null>(null);
  const [addToBenchMode, setAddToBenchMode] = useState(false);

  // ... (Keep existing helper functions openSlot, handleSelect, getFilterRole) ...
  
  const openSlot = (slot: string) => {
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
    // Since it's positionless, we usually return null to show ALL players
    // Unless you want to enforce logic like "Only Setters in slot 1"
    return null; 
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
      <div className="board-group">
        {/* Tabs */}
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
          <button className="tab-add" onClick={addTeam} title="Add New Team">+</button>
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
              disabled={bench.length >= 7}
              onClick={() => {
                setAddToBenchMode(true);
                setActiveSlot(null);
                setModalOpen(true);
              }}
            >
              {bench.length >= 7 ? "Full" : "+ Bench"}
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