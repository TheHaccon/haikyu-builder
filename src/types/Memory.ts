export type Rarity = "N" | "R" | "SR" | "SSR" | "UR" | "SP";
export type Position = "S" | "MB" | "WS" | "LI" | "OP";

export interface StatValue {
  lvl1: number;
  max: number;
}

export interface MemoryStats {
  block?: StatValue;
  power?: StatValue; // "Attack" in UI, "power" in data
  serve?: StatValue;
  receive?: StatValue;
  save?: StatValue;
  set?: StatValue;
}

export interface MemoryDescription {
  lvl1: string;
  max: string;
}

export interface Memory {
  name: string;
  position: Position;
  rarity: Rarity;
  image: string;
  description: MemoryDescription | string; // Handle both just in case
  stats: MemoryStats;
}