import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Player } from "../types/Player";

const generateId = () => Math.random().toString(36).substr(2, 9);

export type SlotId = "S" | "MB1" | "WS1" | "LI" | "WS2" | "MB2" | "OP";

export interface Team {
  id: string;
  name: string;
  starters: Record<SlotId, Player | null>;
  bench: (Player | null)[];
  positions: SlotId[];
}

interface TeamGroup {
  teams: Team[];
  activeTeamId: string;
}

interface TeamState {
  positionless: boolean;
  togglePositionless: () => void;

  normal: TeamGroup;
  positionlessData: TeamGroup;

  addTeam: () => void;
  removeTeam: (id: string) => void;
  setActiveTeam: (id: string) => void;
  updateTeamName: (id: string, name: string) => void;

  setStarter: (slot: SlotId, player: Player | null) => void;
  rotatePositions: () => void;
  addBench: (player: Player | null) => void;
  removeBench: (index: number) => void;
}

const INITIAL_POSITIONS: SlotId[] = ["S", "MB1", "WS1", "OP", "MB2", "WS2"];
const EMPTY_STARTERS: Record<SlotId, Player | null> = {
  S: null, MB1: null, WS1: null, LI: null, WS2: null, MB2: null, OP: null,
};

const createNewTeam = (index: number): Team => ({
  id: generateId(),
  name: `Team ${index}`,
  starters: { ...EMPTY_STARTERS },
  bench: [],
  positions: [...INITIAL_POSITIONS],
});

const initialGroup: TeamGroup = {
  teams: [createNewTeam(1)],
  activeTeamId: "",
};

export const useTeamStore = create<TeamState>()(
  persist(
    (set, get) => ({
      positionless: false,
      togglePositionless: () => set((s) => ({ positionless: !s.positionless })),

      normal: { ...initialGroup, teams: [createNewTeam(1)] },
      positionlessData: { ...initialGroup, teams: [createNewTeam(1)] },
      
      setActiveTeam: (id) => set((s) => {
        const target = s.positionless ? "positionlessData" : "normal";
        return { [target]: { ...s[target], activeTeamId: id } };
      }),

      addTeam: () => set((s) => {
        const target = s.positionless ? "positionlessData" : "normal";
        const group = s[target];
        const newTeam = createNewTeam(group.teams.length + 1);
        return { 
          [target]: { 
            teams: [...group.teams, newTeam],
            activeTeamId: newTeam.id 
          }
        };
      }),

      removeTeam: (id) => set((s) => {
        const target = s.positionless ? "positionlessData" : "normal";
        const group = s[target];

        if (group.teams.length <= 1) return s;

        const remaining = group.teams.filter(t => t.id !== id);
        const reindexed = remaining.map((t, idx) => ({ ...t, name: `Team ${idx + 1}` }));
        
        const newActiveId = id === group.activeTeamId ? reindexed[0].id : group.activeTeamId;

        return {
          [target]: {
            teams: reindexed,
            activeTeamId: newActiveId
          }
        };
      }),

      updateTeamName: (id, name) => set((s) => {
        const target = s.positionless ? "positionlessData" : "normal";
        return {
          [target]: {
            ...s[target],
            teams: s[target].teams.map(t => t.id === id ? { ...t, name } : t)
          }
        };
      }),

      setStarter: (slot, player) => set((s) => {
        const target = s.positionless ? "positionlessData" : "normal";
        const group = s[target];
        return {
          [target]: {
            ...group,
            teams: group.teams.map(t => 
              t.id === group.activeTeamId 
                ? { ...t, starters: { ...t.starters, [slot]: player } } 
                : t
            )
          }
        };
      }),

      addBench: (player) => set((s) => {
        const target = s.positionless ? "positionlessData" : "normal";
        const group = s[target];
        return {
          [target]: {
            ...group,
            teams: group.teams.map(t => {
              if (t.id !== group.activeTeamId) return t;
              if (t.bench.length >= 6) return t;
              return { ...t, bench: [...t.bench, player] };
            })
          }
        };
      }),

      removeBench: (index) => set((s) => {
        const target = s.positionless ? "positionlessData" : "normal";
        const group = s[target];
        return {
          [target]: {
            ...group,
            teams: group.teams.map(t => 
              t.id === group.activeTeamId 
                ? { ...t, bench: t.bench.filter((_, i) => i !== index) } 
                : t
            )
          }
        };
      }),

      rotatePositions: () => set((s) => {
        const target = s.positionless ? "positionlessData" : "normal";
        const group = s[target];
        return {
          [target]: {
            ...group,
            teams: group.teams.map(t => {
              if (t.id !== group.activeTeamId) return t;
              const p = [...t.positions];
              const last = p.pop();
              if (last) p.unshift(last);
              return { ...t, positions: p };
            })
          }
        };
      }),

    }),
    {
      name: "volleyball-teams-v3-separated",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          if (state.normal.teams.length > 0 && !state.normal.activeTeamId) {
            state.normal.activeTeamId = state.normal.teams[0].id;
          }
          if (state.positionlessData.teams.length > 0 && !state.positionlessData.activeTeamId) {
            state.positionlessData.activeTeamId = state.positionlessData.teams[0].id;
          }
        }
      }
    }
  )
);