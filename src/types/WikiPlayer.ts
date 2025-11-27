// src/types/WikiPlayer.ts

export interface WikiSkill {
  name: string;
  tags?: string[];
  description: string;
}

// Matches your specific data keys (Capitalized with underscores)
export interface WikiStats {
  Serve?: number | string;
  Quick_Attack?: number | string;
  Power_Attack?: number | string;
  Set?: number | string;
  Receive?: number | string;
  Block?: number | string;
  Save?: number | string;
  [key: string]: number | string | undefined; // Allow flexible access
}

export interface WikiPlayer {
  id: string;
  name: string;
  school: string;
  rarity: string;
  position: string;
  
  stats: {
    lvl1: WikiStats;
    max: WikiStats;
  };

  tags: string[];
  skills: WikiSkill[];
}