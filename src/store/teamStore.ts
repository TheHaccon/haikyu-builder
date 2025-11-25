import { create } from "zustand";
import type { Player } from "../types/Player";

export type SlotId = "S" | "MB1" | "WS1" | "LI" | "WS2" | "MB2" | "OP";

interface TeamState {
  starters: Record<SlotId, Player | null>;
  bench: (Player | null)[];
  setStarter: (slot: SlotId, player: Player | null) => void;
  addBench: (player: Player | null) => void;
  removeBench: (index: number) => void;
  resetTeam: () => void;

  /** Characters already used (Hinata SSR → "Hinata") */
  getUsedCharacterNames: () => Set<string>;
}

const defaultStarters: Record<SlotId, Player | null> = {
  S: null,
  MB1: null,
  WS1: null,
  LI: null,
  WS2: null,
  MB2: null,
  OP: null,
};

export const useTeamStore = create<TeamState>((set, get) => ({

  starters: defaultStarters,
  bench: [],

  setStarter: (slot, player) =>
    set((state) => ({
      starters: {
        ...state.starters,
        [slot]: player,
      },
    })),

  addBench: (player) =>
    set((state) => ({
      bench: [...state.bench, player],
    })),

  removeBench: (index) =>
    set((state) => ({
      bench: state.bench.filter((_, i) => i !== index),
    })),

  resetTeam: () => ({
    starters: defaultStarters,
    bench: [],
  }),

  /** NEW: detect used characters */
  getUsedCharacterNames: () => {
    const state = get();
    const used = new Set<string>();

    Object.values(state.starters).forEach((p) => {
      if (p) used.add(p.name.split(" ")[0]);
    });

    state.bench.forEach((p) => {
      if (p) used.add(p.name.split(" ")[0]);
    });

    return used;
  },
}));
