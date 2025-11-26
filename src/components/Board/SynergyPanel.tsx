import { useMemo, useState } from "react";
import { useTeamStore } from "../../store/teamStore";
import type { Player } from "../../types/Player";
import { characters } from "../../data/characters-global";
import { synergies } from "../../data/synergies";
import { SynergyDefinition } from "../../types";

interface BondMember {
  name: string;
  player: Player | null;
  present: boolean;
}

interface BondView {
  name: string;
  active: boolean;
  members: BondMember[];
  description: string | Record<string, string>;
  missing?: number;
}

function getPlayer(fullName: string): Player | null {
  return characters.find((c) => c.name === fullName) ?? null;
}

export default function SynergyPanel() {
  const starters = useTeamStore((s) => s.starters);

  const [tab, setTab] = useState<"deploy" | "buffs">("deploy");
  const [deployFilter, setDeployFilter] = useState<"all" | "active">("all");

  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const startersSet = useMemo(() => {
    const set = new Set<string>();
    Object.values(starters).forEach((p) => {
      if (p) set.add(p.name);
    });
    return set;
  }, [starters]);

  function toggleBond(name: string) {
    setCollapsed((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }

  function isActive(s: SynergyDefinition, presentCount: number) {
    const type = s.activation?.type ?? "all";

    const total = s.members?.length ?? 0;

    if (type === "all") return presentCount === total;
    if (type === "count") {
      if (s.activation?.min == null) return false;
      return presentCount >= s.activation.min;
    }
    if (type === "presence") return presentCount >= 1;
    return false;
  }

  function compute(category: string): BondView[] {
    return synergies
      .filter((s) => s.category === category)
      .map((s) => {
        const names = s.members ?? [];
        const members: BondMember[] = names.map((fullName) => ({
          name: fullName,
          player: getPlayer(fullName),
          present: startersSet.has(fullName),
        }));

        const presentCount = members.filter((m) => m.present).length;
        const active = isActive(s, presentCount);

        return {
          name: s.name,
          active,
          members,
          description: s.description,
          missing: members.filter(m => !m.present).length
        };
      })
      .filter((b) => b.members.some((m) => m.present));
  }

  const deploymentBonds = compute("deployment");
  const statBuffs = compute("stats");

  const filteredDeploymentBonds =
  deployFilter === "active"
    ? deploymentBonds.filter((b) => b.active)
    : deploymentBonds;

  return (
    <section id="tabs">

      <nav id="tabbar">
        <button
          className={`tabbtn ${tab === "deploy" ? "active" : ""}`}
          onClick={() => setTab("deploy")}
        >
          Deployment Bonds
        </button>

        <button
          className={`tabbtn ${tab === "buffs" ? "active" : ""}`}
          onClick={() => setTab("buffs")}
        >
          Stat Buffs
        </button>
      </nav>

      {/*DEPLOYMENT TAB*/}
      {tab === "deploy" && (
        <div id="tab-deploy">
          <div id="deploy-filter" className="bond-filter">
            <span>Show bond</span>

            <label>
              <input
                type="radio"
                name="deployFilter"
                value="all"
                checked={deployFilter === "all"}
                onChange={() => setDeployFilter("all")}
              />
              All
            </label>

            <label>
              <input
                type="radio"
                name="deployFilter"
                value="active"
                checked={deployFilter === "active"}
                onChange={() => setDeployFilter("active")}
              />
              Active only
            </label>
          </div>

          <h2>Deployment Bonds</h2>

          <ul className="bond-list">
            {deploymentBonds.length === 0 && <li>(no bonds yet)</li>}

            {filteredDeploymentBonds.map((bond) => (
              <li key={bond.name} className={`bond-item ${bond.active ? "bond-active" : ""} ${collapsed[bond.name] ? "bond-collapsed" : ""}`}>
                <div className="bond-title" onClick={() => toggleBond(bond.name)}>
                  <span>{bond.name}</span>

                  <span className={`bond-chevron ${collapsed[bond.name] ? "" : "open"}`}>
                    {collapsed[bond.name] ? "▸" : "▾"}
                  </span>

                  {!bond.active && (
                    <span className="missing-count">
                      — {bond.missing} missing
                    </span>
                  )}
                </div>

                {!collapsed[bond.name] && (
                  <div className="bond-content">
                    <div className="bond-members">
                      {bond.members.map(m => (
                        <div
                          key={m.name}
                          className={`bond-member ${m.present ? "" : "bond-member-missing"}`}
                        >
                          {m.player && (
                            <img
                              className={m.present ? "" : "img-disabled"}
                              src={`data/${m.player.img}`}
                              alt={m.player.name}
                            />
                          )}
                          <strong>{m.name}</strong>
                          {!m.present && <span className="missing-label">(missing)</span>}
                        </div>
                      ))}
                    </div>

                    <div className="bond-description">
                      {typeof bond.description === "string" ? (
                        <p>{bond.description}</p>
                      ) : (
                        Object.entries(bond.description).map(([who, text]) => (
                          <p key={who}><strong>{who}:</strong> {text}</p>
                        ))
                      )}
                    </div>
                  </div>
                )}

              </li>
            ))}
          </ul>
        </div>
      )}

      {/*STAT BUFF TAB*/}
      {tab === "buffs" && (
        <div id="tab-buffs">

          <h2>Stat Buffs</h2>

          <ul className="bond-list">
            {statBuffs.length === 0 && <li>(no active stat buffs)</li>}

            {statBuffs.map((bond) => (
              <li key={bond.name} className="bond-item">
                <div className="bond-title">{bond.name}</div>

                <div className="bond-members">
                  {bond.members.map((m) => (
                    <div key={m.name} className="bond-member">
                      {m.player && <img src={`data/${m.player.img}`} />}
                      <strong>{m.name}</strong>
                    </div>
                  ))}
                </div>

                <div className="bond-description">
                  {typeof bond.description === "string" ? (
                    <p>{bond.description}</p>
                  ) : (
                    Object.entries(bond.description).map(([who, text]) => (
                      <p key={who}>
                        <strong>{who}</strong>: {text}
                      </p>
                    ))
                  )}
                </div>
              </li>
            ))}
          </ul>

        </div>
      )}
    </section>
  );
}
