import { useEffect, useState } from "react";

export interface HaikyuData {
  characters: any[];
  synergyDescriptions: Record<string, any>;
  synergyMeta: Record<string, any>;
  synergyPairs: Record<string, any>;
  loading: boolean;
}

export default function useHaikyuData(): HaikyuData {
  const [characters, setCharacters] = useState<any[]>([]);
  const [synergyDescriptions, setSynergyDescriptions] = useState({});
  const [synergyMeta, setSynergyMeta] = useState({});
  const [synergyPairs, setSynergyPairs] = useState({});
  const [loading, setLoading] = useState(true);

  // Load a script dynamically
  const loadScript = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(`Failed to load ${src}`);
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    async function loadAll() {
      try {
        await loadScript("public/data/characters-global.js");
        await loadScript("/data/synergyDescriptions.js");
        await loadScript("/data/synergyMeta.js");
        await loadScript("/data/synergyPairs.js");

        setCharacters(window.characters || []);
        setSynergyDescriptions(window.synergyDescriptions || {});
        setSynergyMeta(window.synergyMeta || {});
        setSynergyPairs(window.synergyPairs || {});
      } finally {
        setLoading(false);
      }
    }

    loadAll();
  }, []);

  return {
    characters,
    synergyDescriptions,
    synergyMeta,
    synergyPairs,
    loading,
  };
}
