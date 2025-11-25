export interface Character {
  name: string;
  role: string;
  img: string;
  school: string;
  bonds: string[];
}

export interface SynergyMeta {
  category: string;
  activation: {
    scope: "starters" | "any";
    min: number;
  };
}

export interface SynergyDescription {
  [key: string]: string | Record<string, string>;
}

export interface SynergyPairs {
  [key: string]: string[][];
}

declare global {
  interface Window {
    characters: any[];
    synergyDescriptions?: any;
    synergyMeta?: any;
    synergyPairs?: any;
  }
}

export {};
