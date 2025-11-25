declare global {
  interface Window {
    characters: any[];                  // Liste complète des personnages
    synergyDescriptions: Record<string, any>;  // Descriptions des synergies
    synergyMeta: Record<string, any>;          // Conditions d’activation
    synergyPairs: Record<string, any>;         // Paires et groupes nécessaires
  }
}