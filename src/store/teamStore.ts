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

export const useTeamStore = create<TeamState>((set) => ({
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
}));
