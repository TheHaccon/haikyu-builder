import { create } from "zustand";
import type { Player } from "../types/Player";

export type SlotId = "S" | "MB1" | "WS1" | "LI" | "WS2" | "MB2" | "OP";

interface TeamState {
  starters: Record<SlotId, Player | null>;
  bench: (Player | null)[];

  setStarter: (slot: SlotId, player: Player | null) => void;
  removeStarter: (slot: SlotId) => void;

  addBench: (player: Player | null) => void;
  removeBench: (index: number) => void;

  getUsedNames: () => Set<string>;
}

const EMPTY_STARTERS: Record<SlotId, Player | null> = {
  S: null,
  MB1: null,
  WS1: null,
  LI: null,
  WS2: null,
  MB2: null,
  OP: null,
};

export const useTeamStore = create<TeamState>((set, get) => ({
  starters: EMPTY_STARTERS,
  bench: [],

  setStarter: (slot, player) =>
    set((s) => ({ starters: { ...s.starters, [slot]: player } })),

  removeStarter: (slot) =>
    set((s) => ({ starters: { ...s.starters, [slot]: null } })),

  addBench: (player) =>
    set((state) => {
    if (state.bench.length >= 6) {
      console.warn("Bench is full (max 6)");
      return state;
    }

    return {
      bench: [...state.bench, player],
    };
  }),

  removeBench: (i) =>
    set((s) => ({ bench: s.bench.filter((_, idx) => idx !== i) })),

  getUsedNames: () => {
    const { starters, bench } = get();
    const used = new Set<string>();

    Object.values(starters).forEach(
      (p) => p && used.add(p.name.split(" ")[0])
    );
    bench.forEach((p) => p && used.add(p.name.split(" ")[0]));

    return used;
  },
}));
