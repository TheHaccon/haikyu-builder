export interface Player {
  name: string;
  role: string;
  img: string;
  school: string;
}

export interface SynergyDefinition {
  name: string;
  category: "deployment" | "school" | "stats";
  members?: string[];
  school?:string;
  description: string | Record<string, string>;
  activation: {
    type: "all" | "count" | "presence";
    min?: number;
  };
}
