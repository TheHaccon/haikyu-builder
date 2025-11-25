import { useMemo, useState } from "react";
import { useTeamStore } from "../../store/teamStore";
import type { Player } from "../../types/Player";

import { synergyPairs } from "../../data/synergyPairs";
import { synergyMeta } from "../../data/synergyMeta";
import { synergyDescriptions } from "../../data/synergyDescriptions";
import { characters } from "../../data/characters-global";

interface BondMember {
    name: string;
    player: Player | null;
    present: boolean;
}

interface BondView {
    name: string;
    active: boolean;
    members: BondMember[];
    missing: string[];
    description: string | Record<string, string>;
}

function rarityScore(name: string): number {
    if (name.includes("UR")) return 0;
    if (name.includes("SSR")) return 1;
    if (name.includes("SR")) return 2;
    if (name.includes(" R")) return 3;
    return 4;
}

export default function SynergyPanel() {
    const starters = useTeamStore((s) => s.starters);

    const [tab, setTab] = useState<"deploy" | "buffs">("deploy");
    const [deployFilter, setDeployFilter] = useState<"all" | "active">("all");

    const startersByFullName = useMemo(() => {
        const map = new Map<string, Player>();
        Object.values(starters).forEach((p) => {
            if (p) map.set(p.name, p);
        });
        return map;
    }, [starters]);

    const bestCardByFullName = useMemo(() => {
        const map = new Map<string, Player>();
        characters.forEach((p) => {
            const current = map.get(p.name);
            if (!current || rarityScore(p.name) < rarityScore(current.name)) {
                map.set(p.name, p);
            }
        });
        return map;
    }, []);

    {/*DEPLOYMENT BONDS*/ }
    const deploymentBonds = useMemo<BondView[]>(() => {
        const result: BondView[] = [];

        for (const [bondName, combos] of Object.entries(synergyPairs)) {
            const meta = synergyMeta[bondName];
            if (!meta || meta.category !== "deployment") continue;

            const description = synergyDescriptions[bondName] ?? "";

            for (const combo of combos) {
                const members: BondMember[] = combo.map((fullName) => {
                    const onField = startersByFullName.get(fullName) ?? null;
                    const shownCard =
                        onField ??
                        bestCardByFullName.get(fullName) ??
                        null;

                    return {
                        name: fullName,
                        player: shownCard,
                        present: !!onField,
                    };
                });

                const presentCount = members.filter((m) => m.present).length;
                if (presentCount === 0) continue;

                const active = presentCount === members.length;
                const missing = members
                    .filter((m) => !m.present)
                    .map((m) => m.name);

                result.push({
                    name: bondName,
                    active,
                    members,
                    missing,
                    description,
                });
            }
        }

        result.sort((a, b) => {
            if (a.active !== b.active) return a.active ? -1 : 1;
            return a.name.localeCompare(b.name);
        });

        return result;
    }, [startersByFullName, bestCardByFullName]);

    const visibleDeploymentBonds =
        deployFilter === "active"
            ? deploymentBonds.filter((b) => b.active)
            : deploymentBonds;

    {/*STAT BUFFS*/ }
    const statBuffs = useMemo(() => {
        const list: {
            name: string;
            description: string | Record<string, string>;
            members: BondMember[];
        }[] = [];

        for (const [bondName, combos] of Object.entries(synergyPairs)) {
            const meta = synergyMeta[bondName];
            if (!meta || meta.category !== "stats") continue;

            const desc = synergyDescriptions[bondName] ?? "";

            for (const combo of combos) {
                const members: BondMember[] = combo.map((fullName) => {
                    const onField = startersByFullName.get(fullName) ?? null;

                    const shownCard =
                        onField ??
                        bestCardByFullName.get(fullName) ??
                        null;

                    return {
                        name: fullName,
                        player: shownCard,
                        present: !!onField,
                    };
                });

                const presentCount = members.filter((m) => m.present).length;
                if (presentCount === 0) continue;

                list.push({
                    name: bondName,
                    description: desc,
                    members,
                });
            }
        }

        return list;
    }, [startersByFullName, bestCardByFullName]);

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

            {/* DEPLOYMENT BONDS */}
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

                    <ul id="deploy-list">
                        {visibleDeploymentBonds.length === 0 && (
                            <li>(no bonds yet)</li>
                        )}

                        {visibleDeploymentBonds.map((bond) => (
                            <li
                                key={bond.name}
                                className={`bond-item ${bond.active ? "bond-active" : ""
                                    }`}
                            >
                                <div className="bond-title">{bond.name}</div>

                                {/* DESCRIPTION */}
                                {bond.description && (
                                    <div className="bond-description">
                                        {typeof bond.description === "string" ? (
                                            <p>{bond.description}</p>
                                        ) : (
                                            <ul>
                                                {Object.entries(
                                                    bond.description
                                                ).map(([charName, text]) => (
                                                    <li key={charName}>
                                                        <strong>{charName}</strong>:{" "}
                                                        {text}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}

                                <div className="bond-members">
                                    {bond.members.map((m) => (
                                        <div
                                            key={m.name}
                                            className={`bond-member ${m.present
                                                ? ""
                                                : "bond-member-missing"
                                                }`}
                                        >
                                            {m.player && (
                                                <img
                                                    src={`public/data/${m.player.img}`}
                                                    alt={m.player.name}
                                                />
                                            )}
                                            <strong>{m.name}</strong>
                                            {!m.present && (
                                                <span className="missing-label">
                                                    (missing)
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {bond.missing.length > 0 && (
                                    <div className="bond-missing-line">
                                        Missing: {bond.missing.join(", ")}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* STAT BUFFS */}
            {tab === "buffs" && (
                <div id="tab-buffs">
                    <h2>Stat Buffs</h2>

                    <ul className="bond-list">
                        {statBuffs.length === 0 && (
                            <li className="bond-empty">(no active buffs yet)</li>
                        )}

                        {statBuffs.map((buff) => (
                            <li key={buff.name} className="bond-item">
                                <div className="bond-title">{buff.name}</div>

                                <div className="bond-members">
                                    {buff.members.map((m) => (
                                        <div key={m.name} className="bond-member">
                                            {m.player && (
                                                <img
                                                    src={`public/data/${m.player.img}`}
                                                    alt={m.player.name}
                                                />
                                            )}
                                            <strong>{m.name}</strong>
                                        </div>
                                    ))}
                                </div>

                                <div className="bond-description">
                                    {typeof buff.description === "string" ? (
                                        <p>{buff.description}</p>
                                    ) : (
                                        Object.entries(buff.description).map(
                                            ([playerName, effect]) => (
                                                <p key={playerName}>
                                                    <strong>{playerName}</strong>:
                                                    {effect}
                                                </p>
                                            )
                                        )
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
