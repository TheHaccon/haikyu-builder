export {};

declare global {
  interface Window {
    characters?: any[];
    synergyDescriptions?: Record<string, any>;
    synergyMeta?: Record<string, any>;
    synergyPairs?: Record<string, any>;
  }
}
