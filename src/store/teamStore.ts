import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Player } from "../types/Player";
import { v4 as uuidv4 } from "uuid";

// Define the shape of a single Team
export type Team = {
  id: string;
  name: string;
  starters: Record<string, Player | null>; // 0-5 for slots, "LI" for Libero
  bench: Player[];
  positions: string[]; // ["0", "1", "2", "3", "4", "5", "LI"]
};

interface TeamState {
  // --- STATE ---
  teams: Team[];
  activeTeamId: string;

  // --- ACTIONS ---
  setActiveTeam: (id: string) => void;
  addTeam: () => void;
  removeTeam: (id: string) => void;
  
  setStarter: (slotId: string, player: Player | null) => void;
  addBench: (player: Player) => void;
  removeBench: (index: number) => void;
  rotatePositions: () => void;
}

const createEmptyTeam = (name: string): Team => ({
  id: uuidv4(),
  name,
  starters: {
    "0": null, "1": null, "2": null,
    "3": null, "4": null, "5": null,
    "LI": null
  },
  bench: [],
  positions: ["0", "1", "2", "3", "4", "5", "LI"]
});

export const useTeamStore = create<TeamState>()(
  persist(
    (set) => ({
      // INITIAL STATE (Default to 1 empty team)
      teams: [createEmptyTeam("Team 1")],
      activeTeamId: "", // Will be set in hydration or logic below

      setActiveTeam: (id) => set({ activeTeamId: id }),

      addTeam: () => set((state) => {
        const newTeam = createEmptyTeam(`Team ${state.teams.length + 1}`);
        return { 
          teams: [...state.teams, newTeam],
          activeTeamId: newTeam.id 
        };
      }),

      removeTeam: (id) => set((state) => {
        if (state.teams.length <= 1) return state; // Don't delete last team
        const newTeams = state.teams.filter((t) => t.id !== id);
        return { 
          teams: newTeams,
          activeTeamId: newTeams[0].id // Switch to first available
        };
      }),

      setStarter: (slotId, player) => set((state) => {
        const activeId = state.activeTeamId || state.teams[0].id;
        return {
          teams: state.teams.map((t) => 
            t.id === activeId 
              ? { ...t, starters: { ...t.starters, [slotId]: player } }
              : t
          )
        };
      }),

      addBench: (player) => set((state) => {
        const activeId = state.activeTeamId || state.teams[0].id;
        return {
          teams: state.teams.map((t) => {
            if (t.id !== activeId) return t;
            if (t.bench.length >= 7) return t; // Max bench size
            return { ...t, bench: [...t.bench, player] };
          })
        };
      }),

      removeBench: (index) => set((state) => {
        const activeId = state.activeTeamId || state.teams[0].id;
        return {
          teams: state.teams.map((t) => {
            if (t.id !== activeId) return t;
            const newBench = [...t.bench];
            newBench.splice(index, 1);
            return { ...t, bench: newBench };
          })
        };
      }),

      rotatePositions: () => set((state) => {
        const activeId = state.activeTeamId || state.teams[0].id;
        return {
          teams: state.teams.map((t) => {
            if (t.id !== activeId) return t;
            
            // Standard Volleyball Rotation:
            // 1->6, 6->5, 5->4, 4->3, 3->2, 2->1
            // Our Array Indices: [0, 1, 2, 3, 4, 5] correspond to positions [4, 3, 2, 1, 6, 5] visually usually?
            // Actually, let's just rotate the starters values
            const s = t.starters;
            
            // Map based on visual board: 
            // 0(FL), 1(FC), 2(FR)
            // 5(BL), 4(BC), 3(BR)
            // Clockwise rotation: 0->1, 1->2, 2->3, 3->4, 4->5, 5->0
            
            const newStarters = {
              "0": s["5"],
              "1": s["0"],
              "2": s["1"],
              "3": s["2"],
              "4": s["3"],
              "5": s["4"],
              "LI": s["LI"] // Libero stays
            };

            return { ...t, starters: newStarters };
          })
        };
      }),

    }),
    {
      name: "haikyu-team-storage",
    }
  )
);