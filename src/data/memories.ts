import type { Memory } from "../types/Memory";

export const MEMORIES: Memory[] = [
    {
        name: "Awareness Boost: WAKATOSHI USHIJIMA",
        position: "OP",
        rarity: "UR",
        image: "memory/ushijimaUR.png",
        description: {
            lvl1: "Memory Tier I – [Opposite Hitter] Exclusive Effects:\nIncreases equipper's Awareness by 10%; When equipper's Awareness exceeds 20%, gains 0.5% Strength for every 1% excess Awareness, up to 50% Strength",
            max: "Memory Tier V – [Opposite Hitter] Exclusive Effects:\nIncreases equipper's Awareness by 20%; When equipper's Awareness exceeds 20%, gains 1% Strength for every 1% excess Awareness, up to 100% Strength",
        },
        stats: {
            block: { lvl1: 57, max: 665 },
            power: { lvl1: 63, max: 729 },
            serve: { lvl1: 49, max: 570 },
            receive: { lvl1: 63, max: 729 },
            save: { lvl1: 46, max: 539 },
            set: { lvl1: 43, max: 507 }
        }
    },
    {
        name: "Defense Boost: TAKANOBU AONE",
        position: "MB",
        rarity: "SSR",
        image: "memory/aoneSSR.png",
        description: {
            lvl1: "Memory Tier I – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Defense Technique by 8%; when equipper's block result is not BAD, reduces opponent spiking player's Stamina by 2 points; if opponent is of Power-type, reduces an additional 1 Stamina point.",
            max: "Memory Tier V – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Defense Technique by 16%; when equipper's block result is not BAD, reduces opponent spiking player's Stamina by 2 points; if opponent is of Power-type, reduces an additional 1 Stamina point."
        },
        stats: {
            block: { lvl1: 57, max: 663 },
            power: { lvl1: 57, max: 663 },
            serve: { lvl1: 52, max: 605 },
            receive: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Quick Attack & Block Boost: TETSURO KUROO",
        position: "MB",
        rarity: "UR",
        image: "memory/kurooUR.png",
        description: {
            lvl1: "Memory Tier I – [Middle Blocker] Exclusive Effects:\nIncreases the equipper's Block stat by 12%. When the equipper gains a Quick Attack stat bonus through a player skill, they gain 1 stack(s) of the [Lockdown] Buff, with each stack increasing Block stat by 1.2%, up to a maximum of 10 stacks. After the equipper uses a Block Ultimate, 10 stack(s) of the [Lockdown] Buff are consumed, and the cooldown of the equipper's Block Ultimate is reduced by 10 net crossings.",
            max: "Memory Tier V – [Middle Blocker] Exclusive Effects:\nIncreases the equipper's Block stat by 24%. When the equipper gains a Quick Attack stat bonus through a player skill, they gain 1 stack(s) of the [Lockdown] Buff, with each stack increasing Block stat by 2.4%, up to a maximum of 10 stacks. After the equipper uses a Block Ultimate, 10 stack(s) of the [Lockdown] Buff are consumed, and the cooldown of the equipper's Block Ultimate is reduced by 10 net crossings."
        },
        stats: {
            block: { lvl1: 63, max: 729 },
            power: { lvl1: 63, max: 729 },
            serve: { lvl1: 57, max: 665 },
            receive: { lvl1: 49, max: 570 },
            save: { lvl1: 46, max: 539 },
            set: { lvl1: 43, max: 507 }
        }
    },
    {
        name: "Serve Boost: TORU OIKAWA",
        position: "S",
        rarity: "UR",
        image: "memory/oikawaUR.png",
        description: {
            lvl1: "Memory Tier I – [Setter] Exclusive Effects:\nIncreases the equipper's Serve stat by 12%. When the equipper performs a Critical Serve, the equipper gains 2 stack(s) of 'Attack Tempo.' Each stack increases the Awareness of players on your side by 1%, up to 10 stacks. If this Serve scores, the equipper gains an additional 4 stack(s) of 'Attack Tempo.' While the equipper is on the court, when your side's 'Attack Tempo' reaches 6 stacks, your players' Strength and Spirit increase by 2%, up to 3 stacks.",
            max: "Memory Tier V – [Setter] Exclusive Effects:\nIncreases the equipper's Serve stat by 24%. When the equipper performs a Critical Serve, the equipper gains 2 stack(s) of 'Attack Tempo.' Each stack increases the Awareness of players on your side by 1%, up to 10 stacks. If this Serve scores, the equipper gains an additional 4 stack(s) of 'Attack Tempo.' While the equipper is on the court, when your side's 'Attack Tempo' reaches 6 stacks, your players' Strength and Spirit increase by 4%, up to 3 stacks."
        },
        stats: {
            set: { lvl1: 63, max: 729 },
            serve: { lvl1: 63, max: 729 },
            block: { lvl1: 57, max: 665 },
            power: { lvl1: 49, max: 570 },
            receive: { lvl1: 46, max: 539 },
            save: { lvl1: 43, max: 507 }
        }
    },
    {
        name: "Awareness Boost: SHOYO HINATA",
        position: "MB",
        rarity: "SSR",
        image: "memory/hinataSSR.png",
        description: {
            lvl1: "Memory Tier I – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Awareness by 8%; when equipper's Awareness is above 40%, additionally increases Awareness by 10% and reduces Block stat by 8%.",
            max: "Memory Tier V – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Awareness by 16%; when equipper's Awareness is above 40%, additionally increases Awareness by 16% and reduces Block stat by 8%."
        },
        stats: {
            block: { lvl1: 57, max: 663 },
            power: { lvl1: 57, max: 663 },
            serve: { lvl1: 52, max: 605 },
            receive: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Attack Boost: TOBIO KAGEYAMA (Practice)",
        position: "S",
        rarity: "SSR",
        image: "memory/kageyamaSSR.png",
        description: {
            lvl1: "Memory Tier I – [Setter] Exclusive Effects:\nIncreases equipper's Serve stat by 10%; when equipper casts a Setter Dump Ultimate, increases their Awareness by 10% plus 15% of their Awareness.",
            max: "Memory Tier V – [Setter] Exclusive Effects:\nIncreases equipper's Serve stat by 20%; when equipper casts a Setter Dump Ultimate, increases their Awareness by 20% plus 15% of their Awareness."
        },
        stats: {
            set: { lvl1: 57, max: 663 },
            serve: { lvl1: 57, max: 663 },
            block: { lvl1: 52, max: 605 },
            power: { lvl1: 44, max: 518 },
            receive: { lvl1: 42, max: 490 },
            save: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Block Boost: KEI TSUKISHIMA",
        position: "MB",
        rarity: "SSR",
        image: "memory/tsukishimaSSR.png",
        description: {
            lvl1: "Memory Tier I – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Block stat by 10%; when equipper casts a Block Ultimate and the opponent spiker has a debuff, increases this block's power by 16% of equipper's Block stat.",
            max: "Memory Tier V – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Block stat by 20%; when equipper casts a Block Ultimate and the opponent spiker has a debuff, increases this block's power by 32% of equipper's Block stat."
        },
        stats: {
            block: { lvl1: 57, max: 663 },
            power: { lvl1: 57, max: 663 },
            serve: { lvl1: 52, max: 605 },
            receive: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Defense Boost: YU NISHINOYA",
        position: "LI",
        rarity: "SSR",
        image: "memory/nishinoyaSSR.png",
        description: {
            lvl1: "Memory Tier I – [Libero] Exclusive Effects:\nWhile equipper is present, increases your side's back row players' Save stat by 4%; when equipper casts a Receive Skill that consumes more than 8 Stamina, increases their Receive stat by 10% and restores 2 Stamina.",
            max: "Memory Tier V – [Libero] Exclusive Effects:\nWhile equipper is present, increases your side's back row players' Save stat by 8%; when equipper casts a Receive Skill that consumes more than 8 Stamina, increases their Receive stat by 20% and restores 2 Stamina."
        },
        stats: {
            receive: { lvl1: 57, max: 663 },
            save: { lvl1: 57, max: 663 },
            set: { lvl1: 52, max: 605 },
            power: { lvl1: 44, max: 518 },
            serve: { lvl1: 42, max: 490 },
            block: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Attack Boost: RYUNOSUKE TANAKA",
        position: "WS",
        rarity: "SSR",
        image: "memory/tanakaSSR.png",
        description: {
            lvl1: "Memory Tier I – [Wing Spiker] Exclusive Effects:\nIncreases equipper's Power Attack stat by 10%; increases power of equipper's first 2 Power Spike Ultimates in each match by 18% of Power Attack stat.",
            max: "Memory Tier V – [Wing Spiker] Exclusive Effects:\nIncreases equipper's Power Attack stat by 20%; increases power of equipper's first 2 Power Spike Ultimates in each match by 36% of Power Attack stat."
        },
        stats: {
            power: { lvl1: 57, max: 663 },
            receive: { lvl1: 57, max: 663 },
            serve: { lvl1: 52, max: 605 },
            block: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Receive/Power Attack Boost: DAICHI SAWAMURA",
        position: "OP",
        rarity: "SSR",
        image: "memory/daichiSSR.png",
        description: {
            lvl1: "Memory Tier I – [Opposite Hitter] Exclusive Effects:\nIncreases equipper's Receive stat by 10%; while equipper is present, your side's Power-type players receive 1 stacks of 'Grit' for every 20 Stamina consumed, each stack increases Power Spike power by 2% of Power Attack stat, up to 10 stacks.",
            max: "Memory Tier V – [Opposite Hitter] Exclusive Effects:\nIncreases equipper's Receive stat by 20%; while equipper is present, your side's Power-type players receive 1 stacks of 'Grit' for every 20 Stamina consumed, each stack increases Power Spike power by 4% of Power Attack stat, up to 10 stacks."
        },
        stats: {
            receive: { lvl1: 57, max: 663 },
            power: { lvl1: 57, max: 663 },
            block: { lvl1: 52, max: 605 },
            serve: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Power Attack Boost: ASAHI AZUMANE",
        position: "WS",
        rarity: "SSR",
        image: "memory/asahiSSR.png",
        description: {
            lvl1: "Memory Tier I – [Wing Spiker] Exclusive Effects:\nWhen equipper's Stamina is above 50, increases Power Attack stat by 18%; when casting a Power Spike skill that consumes more than 20 Stamina, increases that Power Spike's power by 16% of Power Attack stat.",
            max: "Memory Tier V – [Wing Spiker] Exclusive Effects:\nWhen equipper's Stamina is above 50, increases Power Attack stat by 36%; when casting a Power Spike skill that consumes more than 20 Stamina, increases that Power Spike's power by 32% of Power Attack stat."
        },
        stats: {
            power: { lvl1: 57, max: 663 },
            receive: { lvl1: 57, max: 663 },
            serve: { lvl1: 52, max: 605 },
            block: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Set Boost: KENMA KOZUME",
        position: "S",
        rarity: "SSR",
        image: "memory/kenmaSSR.png",
        description: {
            lvl1: "Memory Tier I – [Setter] Exclusive Effects:\nIncreases equipper's Set stat by 4%; while equipper is present, increases your side's back row players' Receive stat by 6%; while equipper is present, when your side's 'Keep It Alive' stacks decrease, receives 1 stack of 'Keep It Alive'; each stack of 'Keep It Alive' increases Receive stat of players on your side by 1%, up to 6 stacks.",
            max: "Memory Tier V – [Setter] Exclusive Effects:\nIncreases equipper's Set stat by 8%; while equipper is present, increases your side's back row players' Receive stat by 12%; while equipper is present, when your side's 'Keep It Alive' stacks decrease, receives 1 stack of 'Keep It Alive'; each stack of 'Keep It Alive' increases Receive stat of players on your side by 1%, up to 6 stacks."
        },
        stats: {
            set: { lvl1: 57, max: 663 },
            serve: { lvl1: 57, max: 663 },
            block: { lvl1: 52, max: 605 },
            power: { lvl1: 44, max: 518 },
            receive: { lvl1: 42, max: 490 },
            save: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Attack Boost: TETSURO KUROO (Practice)",
        position: "MB",
        rarity: "SSR",
        image: "memory/kurooSSR.png",
        description: {
            lvl1: "Memory Tier I – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Awareness by 8%; when blocking, increases equipper's Defense Technique by 12% of their Strength.",
            max: "Memory Tier V – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Awareness by 16%; when blocking, increases equipper's Defense Technique by 24% of their Strength."
        },
        stats: {
            block: { lvl1: 57, max: 663 },
            power: { lvl1: 57, max: 663 },
            serve: { lvl1: 52, max: 605 },
            receive: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Receive/Quick Spike Boost: LEV HAIBA",
        position: "MB",
        rarity: "SSR",
        image: "memory/levSSR.png",
        description: {
            lvl1: "Memory Tier I – [Middle Blocker] Exclusive Effects:\nWhile equipper is present, increases your side's back row players' Receive stat by 6%; while equipper is present, when your side achieves a PERFECT receive, increases power of equipper's next Quick Spike Ultimate by 12% of Quick Attack stat.",
            max: "Memory Tier V – [Middle Blocker] Exclusive Effects:\nWhile equipper is present, increases your side's back row players' Receive stat by 12%; while equipper is present, when your side achieves a PERFECT receive, increases power of equipper's next Quick Spike Ultimate by 24% of Quick Attack stat."
        },
        stats: {
            block: { lvl1: 57, max: 663 },
            power: { lvl1: 57, max: 663 },
            serve: { lvl1: 52, max: 605 },
            receive: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Attack Boost: TORU OIKAWA (Practice)",
        position: "S",
        rarity: "SSR",
        image: "memory/oikawaSSR.png",
        description: {
            lvl1: "Memory Tier I – [Setter] Exclusive Effects:\nIncreases equipper's Set stat by 10%; the first time in each match when your side's 'Attack Tempo' exceeds 10 stacks, additionally increases equipper's Set stat by 10% for 1 Sets; each stack of 'Attack Tempo' increases the Awareness of players on your side by 1%, up to 10 stacks.",
            max: "Memory Tier V – [Setter] Exclusive Effects:\nIncreases equipper's Set stat by 20%; the first time in each match when your side's 'Attack Tempo' exceeds 10 stacks, additionally increases equipper's Set stat by 20% for 1 Sets; each stack of 'Attack Tempo' increases the Awareness of players on your side by 1%, up to 10 stacks."
        },
        stats: {
            set: { lvl1: 57, max: 663 },
            serve: { lvl1: 57, max: 663 },
            block: { lvl1: 52, max: 605 },
            power: { lvl1: 44, max: 518 },
            receive: { lvl1: 42, max: 490 },
            save: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Receive/Power Attack Boost: HAJIME IWAIZUMI",
        position: "WS",
        rarity: "SSR",
        image: "memory/iwaizumiSSR.png",
        description: {
            lvl1: "Memory Tier I – [Wing Spiker] Exclusive Effects:\nIncreases equipper's Receive stat by 10%; when equipper executes a Critical Power Spike Ultimate, increases their Power Attack stat by 8% of their Receive stat for 3 net crossings.",
            max: "Memory Tier V – [Wing Spiker] Exclusive Effects:\nIncreases equipper's Receive stat by 20%; when equipper executes a Critical Power Spike Ultimate, increases their Power Attack stat by 16% of their Receive stat for 3 net crossings."
        },
        stats: {
            power: { lvl1: 57, max: 663 },
            receive: { lvl1: 57, max: 663 },
            serve: { lvl1: 52, max: 605 },
            block: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Attack Boost: KENTARO KYOTANI",
        position: "OP",
        rarity: "SSR",
        image: "memory/kentaroSSR.png",
        description: {
            lvl1: "Memory Tier I – [Opposite Hitter] Exclusive Effects:\nWhile the equipper is present, increases your side's Power-type players' Strength by 6%; while the equipper is present, when an opponent player's Stamina drops below 60 points, reduces their Block stat by 8% for 3 net crossings. Triggers up to 1 times per match.",
            max: "Memory Tier V – [Opposite Hitter] Exclusive Effects:\nWhile the equipper is present, increases your side's Power-type players' Strength by 12%; while the equipper is present, when an opponent player's Stamina drops below 60 points, reduces their Block stat by 16% for 3 net crossings. Triggers up to 1 times per match."
        },
        stats: {
            receive: { lvl1: 57, max: 663 },
            power: { lvl1: 57, max: 663 },
            block: { lvl1: 52, max: 605 },
            serve: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Block Boost: KENJI FUTAKUCHI",
        position: "WS",
        rarity: "SSR",
        image: "memory/kenjiSSR.png",
        description: {
            lvl1: "Memory Tier I – [Wing Spiker] Exclusive Effects:\nIncreases equipper's Block stat by 10%; for each Block-type player on your side (1), increases equipper's Ultimate power by 3.2% of the corresponding Ultimate's stat.",
            max: "Memory Tier V – [Wing Spiker] Exclusive Effects:\nIncreases equipper's Block stat by 20%; for each Block-type player on your side (1), increases equipper's Ultimate power by 6.4% of the corresponding Ultimate's stat."
        },
        stats: {
            power: { lvl1: 57, max: 663 },
            receive: { lvl1: 57, max: 663 },
            serve: { lvl1: 52, max: 605 },
            block: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Set & Block Boost: KANJI KOGANEGAWA",
        position: "S",
        rarity: "SSR",
        image: "memory/kanjiSSR.png",
        description: {
            lvl1: "Memory Tier I – [Setter] Exclusive Effects:\nIncreases equipper's Set stat by 8%; while equipper is present and your side's block result is not BAD, reduces opponent's next Power Spike power by 10% of the spiker's Power Attack stat; while equipper is present and your side's block result is BAD, increases your side's next block power by 16% of the blocker's Block stat.",
            max: "Memory Tier V – [Setter] Exclusive Effects:\nIncreases equipper's Set stat by 16%; while equipper is present and your side's block result is not BAD, reduces opponent's next Power Spike power by 20% of the spiker's Power Attack stat; while equipper is present and your side's block result is BAD, increases your side's next block power by 32% of the blocker's Block stat."
        },
        stats: {
            set: { lvl1: 57, max: 663 },
            serve: { lvl1: 57, max: 663 },
            block: { lvl1: 52, max: 605 },
            power: { lvl1: 44, max: 518 },
            receive: { lvl1: 42, max: 490 },
            save: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Block & Power Attack Boost: TAKEHITO SASAYA",
        position: "OP",
        rarity: "SSR",
        image: "memory/sasayaSSR.png",
        description: {
            lvl1: "Memory Tier I – [Opposite Hitter] Exclusive Effects:\nIncreases equipper's Power Attack and Block stats by 6%; when your side is behind, increases equipper's Power Spike power by 14% of Power Attack stat.",
            max: "Memory Tier V – [Opposite Hitter] Exclusive Effects:\nIncreases equipper's Power Attack and Block stats by 12%; when your side is behind, increases equipper's Power Spike power by 28% of Power Attack stat."
        },
        stats: {
            receive: { lvl1: 57, max: 663 },
            power: { lvl1: 57, max: 663 },
            block: { lvl1: 52, max: 605 },
            serve: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Block Boost: SATORI TENDO",
        position: "MB",
        rarity: "SSR",
        image: "memory/tendoSSR.png",
        description: {
            lvl1: "Memory Tier I – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Block stat by 14%; when equipper performs a Critical, reduces Block Ultimate cooldown by 1 net crossings.",
            max: "Memory Tier V – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Block stat by 28%; when equipper performs a Critical, reduces Block Ultimate cooldown by 3 net crossings."
        },
        stats: {
            block: { lvl1: 57, max: 663 },
            power: { lvl1: 57, max: 663 },
            serve: { lvl1: 52, max: 605 },
            receive: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Spike Boost: TSUTOMU GOSHIKI",
        position: "WS",
        rarity: "SSR",
        image: "memory/goshikiSSR.png",
        description: {
            lvl1: "Memory Tier I – [Wing Spiker] Exclusive Effects:\nIncreases the equipper's Power stat by 10%; while your side is in [Team Moral Awakening], increases the equipper's Power stat by an additional 16%.",
            max: "Memory Tier V – [Wing Spiker] Exclusive Effects:\nIncreases the equipper's Power stat by 20%; while your side is in [Team Moral Awakening], increases the equipper's Power stat by an additional 32%."
        },
        stats: {
            power: { lvl1: 57, max: 663 },
            receive: { lvl1: 57, max: 663 },
            serve: { lvl1: 52, max: 605 },
            block: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Power Attack Boost: WS",
        position: "WS",
        rarity: "SSR",
        image: "memory/wsSSR.png",
        description: {
            lvl1: "Memory Tier I – [Wing Spiker] Exclusive Effects:\nIncreases equipper's Power Attack stat by 6%; when equipper performs a Power Spike, reduces opponent blocking players' Block stat by 3.2% for 1 net crossings; if the block result is BAD, reduces opponent blocking players' Block stat by an additional 3.2% for 2 net crossings.",
            max: "Memory Tier V – [Wing Spiker] Exclusive Effects:\nIncreases equipper's Power Attack stat by 12%; when equipper performs a Power Spike, reduces opponent blocking players' Block stat by 6.4% for 1 net crossings; if the block result is BAD, reduces opponent blocking players' Block stat by an additional 6.4% for 2 net crossings."
        },
        stats: {
            power: { lvl1: 57, max: 663 },
            receive: { lvl1: 57, max: 663 },
            serve: { lvl1: 52, max: 605 },
            block: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Quick Attack Boost: MB",
        position: "MB",
        rarity: "SSR",
        image: "memory/mbSSR.png",
        description: {
            lvl1: "Memory Tier I – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Quick Attack by 6%; for every 1 players with Block trait in the opponent's front row, additionally increases equipper's Quick Attack by 3.2%.",
            max: "Memory Tier V – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Quick Attack by 12%; for every 1 players with Block trait in the opponent's front row, additionally increases equipper's Quick Attack by 6.4%."
        },
        stats: {
            block: { lvl1: 57, max: 663 },
            power: { lvl1: 57, max: 663 },
            serve: { lvl1: 52, max: 605 },
            receive: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Set Boost: S",
        position: "S",
        rarity: "SSR",
        image: "memory/sSSR.png",
        description: {
            lvl1: "Memory Tier I – [Setter] Exclusive Effects:\nWhile equipper is present, increases your side's Set stat by 4%; 1 times per match, when equipper's Stamina falls below 30, restores 12 Stamina to the equipper.",
            max: "Memory Tier V – [Setter] Exclusive Effects:\nWhile equipper is present, increases your side's Set stat by 8%; 1 times per match, when equipper's Stamina falls below 30, restores 24 Stamina to the equipper."
        },
        stats: {
            set: { lvl1: 57, max: 663 },
            serve: { lvl1: 57, max: 663 },
            block: { lvl1: 52, max: 605 },
            power: { lvl1: 44, max: 518 },
            receive: { lvl1: 44, max: 518 },
            save: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Attack Boost: Li",
        position: "LI",
        rarity: "SSR",
        image: "memory/liSSR.png",
        description: {
            lvl1: "Memory Tier I – [Libero] Exclusive Effects:\nIncreases equipper's Basic Stats by 3.2%; when equipper's receive result is not BAD, increases your side's next Power Spike power by 12% of the spiker's Power Attack stat.",
            max: "Memory Tier V – [Libero] Exclusive Effects:\nIncreases equipper's Basic Stats by 6.4%; when equipper's receive result is not BAD, increases your side's next Power Spike power by 24% of the spiker's Power Attack stat."
        },
        stats: {
            receive: { lvl1: 57, max: 663 },
            power: { lvl1: 44, max: 518 },
            save: { lvl1: 57, max: 663 },
            set: { lvl1: 52, max: 605 },
            serve: { lvl1: 44, max: 518 },
            block: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Receive Boost: OP",
        position: "OP",
        rarity: "SSR",
        image: "memory/opSSR.png",
        description: {
            lvl1: "Memory Tier I – [Opposite Hitter] Exclusive Effects:\nWhen equipper enters the court for the first time in each match, increases their Receive stat by 12% for 3 turns.",
            max: "Memory Tier V – [Opposite Hitter] Exclusive Effects:\nWhen equipper enters the court for the first time in each match, increases their Receive stat by 24% for 3 turns."
        },
        stats: {
            receive: { lvl1: 57, max: 663 },
            power: { lvl1: 57, max: 663 },
            block: { lvl1: 52, max: 605 },
            serve: { lvl1: 44, max: 518 },
            save: { lvl1: 42, max: 490 },
            set: { lvl1: 39, max: 461 }
        }
    },
    {
        name: "Reflex Boost: KOSHI SUGAWARA",
        position: "S",
        rarity: "SR",
        image: "memory/sugawaraSR.png",
        description: {
            lvl1: "Memory Tier I – [Setter] Exclusive Effects:\nIncreases equipper's Reflex by 4.8%; when equipper serves, increases your side's back row players' Reflex by 2.4% for 3 net crossings.",
            max: "Memory Tier V – [Setter] Exclusive Effects:\nIncreases equipper's Reflex by 9.6%; when equipper serves, increases your side's back row players' Reflex by 4.8% for 3 net crossings."
        },
        stats: {
            set: { lvl1: 48, max: 561 },
            serve: { lvl1: 48, max: 561 },
            block: { lvl1: 44, max: 513 },
            power: { lvl1: 38, max: 439 },
            receive: { lvl1: 35, max: 415 },
            save: { lvl1: 33, max: 390 }
        }
    },
    {
        name: "Set Boost: KENMA KOZUME (Practice)",
        position: "S",
        rarity: "SR",
        image: "memory/kenmaSR.png",
        description: {
            lvl1: "Memory Tier I – [Setter] Exclusive Effects:\nWhen equipper Sets, increases Set stat by 2.8%,stacking up to 5 times.",
            max: "Memory Tier V – [Setter] Exclusive Effects:\nWhen equipper Sets, increases Set stat by 5.6%,stacking up to 5 times."
        },
        stats: {
            set: { lvl1: 48, max: 561 },
            serve: { lvl1: 48, max: 561 },
            block: { lvl1: 44, max: 513 },
            power: { lvl1: 38, max: 439 },
            receive: { lvl1: 35, max: 415 },
            save: { lvl1: 33, max: 390 }
        }
    },
    {
        name: "Attack Boost: HAJIME IWAIZUMI (Practice)",
        position: "WS",
        rarity: "SR",
        image: "memory/iwaizumiSR.png",
        description: {
            lvl1: "Memory Tier I – [Wing Spiker] Exclusive Effects:\nIncreases equipper's Awareness by 4.8%; when equipper performs a Critical play, increases Strength by 2.8%, up to 3 stacks.",
            max: "Memory Tier V – [Wing Spiker] Exclusive Effects:\nIncreases equipper's Awareness by 9.6%; when equipper performs a Critical play, increases Strength by 5.6%, up to 3 stacks."
        },
        stats: {
            power: { lvl1: 48, max: 561 },
            receive: { lvl1: 48, max: 561 },
            serve: { lvl1: 44, max: 513 },
            block: { lvl1: 38, max: 439 },
            save: { lvl1: 35, max: 415 },
            set: { lvl1: 33, max: 390 }
        }
    },
    {
        name: "Block Boost: ISSEI MATSUKAWA",
        position: "MB",
        rarity: "SR",
        image: "memory/matsukawaSR.png",
        description: {
            lvl1: "Memory Tier I – [Middle Blocker] Exclusive Effects:\nWhen equipper blocks, increases Block stat by 2.8%, stacking up to 5 times.",
            max: "Memory Tier V – [Middle Blocker] Exclusive Effects:\nWhen equipper blocks, increases Block stat by 5.6%, stacking up to 5 times.",
        },
        stats: {
            block: { lvl1: 48, max: 561 },
            power: { lvl1: 48, max: 561 },
            serve: { lvl1: 44, max: 513 },
            receive: { lvl1: 38, max: 439 },
            save: { lvl1: 35, max: 415 },
            set: { lvl1: 33, max: 390 }
        }
    },
    {
        name: "Spike Boost: SHINJI WATARI",
        position: "LI",
        rarity: "SR",
        image: "memory/watariSR.png",
        description: {
            lvl1: "Memory Tier I – [Libero] Exclusive Effects:\nWhen equipper's receive result is not BAD, increases your side's next Power Spike or Quick Spike power by 22% of the spiker's corresponding Power Attack or Quick Attack stat.",
            max: "Memory Tier V – [Libero] Exclusive Effects:\nWhen equipper's receive result is not BAD, increases your side's next Power Spike or Quick Spike power by 44% of the spiker's corresponding Power Attack or Quick Attack stat."
        },
        stats: {
            receive: { lvl1: 48, max: 0 },
            save: { lvl1: 48, max: 0 },
            set: { lvl1: 44, max: 0 },
            power: { lvl1: 38, max: 0 },
            serve: { lvl1: 35, max: 0 },
            block: { lvl1: 33, max: 0 }
        }
    },
    {
        name: "Strength Boost: AKIRA KUNIMI",
        position: "OP",
        rarity: "SR",
        image: "memory/kunimiSR.png",
        description: {
            lvl1: "Memory Tier I – [Opposite Hitter] Exclusive Effects:\nAt the start of each turn, equipper receives 1 stack of \"Strength Boost\", each stack increases equipper's Strength by 5.2%, up to 3 stacks, when \"Strength Boost\" exceeds 3 stacks, increases equipper's Awareness by 6%.",
            max: "Memory Tier V – [Opposite Hitter] Exclusive Effects:\nAt the start of each turn, equipper receives 1 stack of \"Strength Boost\", each stack increases equipper's Strength by 10.4%, up to 3 stacks, when \"Strength Boost\" exceeds 3 stacks, increases equipper's Awareness by 12%."
        },
        stats: {
            receive: { lvl1: 48, max: 561 },
            power: { lvl1: 48, max: 561 },
            block: { lvl1: 44, max: 513 },
            serve: { lvl1: 38, max: 439 },
            save: { lvl1: 35, max: 415 },
            set: { lvl1: 33, max: 390 }
        }
    },
    {
        name: "Serve Boost: TOBIO KAGEYAMA (KITAGAWA DAIICHI)",
        position: "S",
        rarity: "SR",
        image: "memory/kageyamaSR.png",
        description: {
            lvl1: "Memory Tier I – [Setter] Exclusive Effects:\nIncreases equipper's Serve stat by 6%; when equipper has the Quick Attack trait, additionally increases their Serve stat by 10%.",
            max: "Memory Tier V – [Setter] Exclusive Effects:\nIncreases equipper's Serve stat by 12%; when equipper has the Quick Attack trait, additionally increases their Serve stat by 20%."
        },
        stats: {
            set: { lvl1: 48, max: 561 },
            serve: { lvl1: 48, max: 561 },
            block: { lvl1: 44, max: 513 },
            power: { lvl1: 38, max: 439 },
            receive: { lvl1: 35, max: 415 },
            save: { lvl1: 33, max: 390 }
        }
    },
    {
        name: "Serve Boost: TADASHI YAMAGUCHI",
        position: "MB",
        rarity: "SR",
        image: "memory/tadashiSR.png",
        description: {
            lvl1: "Memory Tier I – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Serve stat by 6%; when equipper scores a Service Ace, additionally increases their Serve stat by 10% for their next serve.",
            max: "Memory Tier V – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Serve stat by 12%; when equipper scores a Service Ace, additionally increases their Serve stat by 20% for their next serve."
        },
        stats: {
            block: { lvl1: 48, max: 561 },
            power: { lvl1: 48, max: 561 },
            serve: { lvl1: 44, max: 513 },
            receive: { lvl1: 38, max: 439 },
            save: { lvl1: 35, max: 415 },
            set: { lvl1: 33, max: 390 }
        }
    },
    {
        name: "Defense Boost: YU NISHINOYA (Practice)",
        position: "LI",
        rarity: "SR",
        image: "memory/nishinoyaSR.png",
        description: {
            lvl1: "Memory Tier I – [Libero] Exclusive Effects:\nIncreases equipper's Defense Technique by 3.6%; when equipper's save result is not BAD, increases their Save stat by 4% for their next save.",
            max: "Memory Tier V – [Libero] Exclusive Effects:\nIncreases equipper's Defense Technique by 7.2%; when equipper's save result is not BAD, increases their Save stat by 8% for their next save."
        },
        stats: {
            receive: { lvl1: 48, max: 561 },
            save: { lvl1: 48, max: 561 },
            set: { lvl1: 44, max: 513 },
            serve: { lvl1: 35, max: 415 },
            block: { lvl1: 33, max: 390 },
            power: { lvl1: 38, max: 439 }
        }
    },
    {
        name: "Defense Boost: CHIKARA ENNOSHITA",
        position: "WS",
        rarity: "SR",
        image: "memory/chikaraSR.png",
        description: {
            lvl1: "Memory Tier I – [Wing Spiker] Exclusive Effects:\nIncreases equipper's Defense Technique by 3.2%; when equipper scores with Power Spike, increases your side's back row players' Receive stat by 4% for 2 net crossings.",
            max: "Memory Tier V – [Wing Spiker] Exclusive Effects:\nIncreases equipper's Defense Technique by 6.4%; when equipper scores with Power Spike, increases your side's back row players' Receive stat by 8% for 2 net crossings."
        },
        stats: {
            power: { lvl1: 48, max: 561 },
            receive: { lvl1: 48, max: 561 },
            serve: { lvl1: 44, max: 513 },
            block: { lvl1: 38, max: 439 },
            save: { lvl1: 35, max: 415 },
            set: { lvl1: 33, max: 390 }
        }
    },
    {
        name: "Spike Boost: DAICHI SAWAMURA (Practice)",
        position: "OP",
        rarity: "SR",
        image: "memory/daichiSR.png",
        description: {
            lvl1: "Memory Tier I – [Opposite Hitter] Exclusive Effects:\nWhen equipper receives, increases your side's next spike power by 18% of the spiker's Power Attack or Quick Attack stat.",
            max: "Memory Tier V – [Opposite Hitter] Exclusive Effects:\nWhen equipper receives, increases your side's next spike power by 36% of the spiker's Power Attack or Quick Attack stat."
        },
        stats: {
            receive: { lvl1: 48, max: 561 },
            power: { lvl1: 48, max: 561 },
            block: { lvl1: 44, max: 513 },
            serve: { lvl1: 38, max: 439 },
            save: { lvl1: 35, max: 415 },
            set: { lvl1: 33, max: 390 }
        }
    },
    {
        name: "Awareness Boost: ASAHI AZUMANE (Practice)",
        position: "WS",
        rarity: "SR",
        image: "memory/asahiSR.png",
        description: {
            lvl1: "Memory Tier I – [Wing Spiker] Exclusive Effects:\nIncreases equipper's Awareness by 4% when serving; when equipper scores a Service Ace, recovers 5 Stamina and increases next serve's power by 8% of Serve stat.",
            max: "Memory Tier V – [Wing Spiker] Exclusive Effects:\nIncreases equipper's Awareness by 8% when serving; when equipper scores a Service Ace, recovers 5 Stamina and increases next serve's power by 16% of Serve stat."
        },
        stats: {
            power: { lvl1: 48, max: 561 },
            receive: { lvl1: 48, max: 561 },
            serve: { lvl1: 44, max: 513 },
            block: { lvl1: 38, max: 439 },
            save: { lvl1: 35, max: 415 },
            set: { lvl1: 33, max: 390 }
        }
    },
    {
        name: "Receive Boost: MORISUKE YAKU (Practice)",
        position: "LI",
        rarity: "SR",
        image: "memory/yakuSR.png",
        description: {
            lvl1: "Memory Tier I – [Libero] Exclusive Effects:\nIncreases equipper's Receive stat by 6%; when equipper uses a Receive Ultimate against a Quick Spike, increases their Receive stat by 10% for this receive.",
            max: "Memory Tier V – [Libero] Exclusive Effects:\nIncreases equipper's Receive stat by 12%; when equipper uses a Receive Ultimate against a Quick Spike, increases their Receive stat by 20% for this receive."
        },
        stats: {
            receive: { lvl1: 48, max: 561 },
            power: { lvl1: 38, max: 439 },
            block: { lvl1: 33, max: 390 },
            serve: { lvl1: 35, max: 415 },
            save: { lvl1: 48, max: 561 },
            set: { lvl1: 44, max: 513 }
        }
    },
    {
        name: "Awareness/Block Boost: YUTARO KINDAICHI (Practice)",
        position: "MB",
        rarity: "SR",
        image: "memory/kindaichiSR.png",
        description: {
            lvl1: "Memory Tier I – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Awareness by 40% when casting their first Quick Spike Ultimate in each match; when casting an Ultimate, increases Block stat by 2.8%, up to 3 stacks.",
            max: "Memory Tier V – [Middle Blocker] Exclusive Effects:\nIncreases equipper's Awareness by 60% when casting their first Quick Spike Ultimate in each match; when casting an Ultimate, increases Block stat by 5.6%, up to 3 stacks."
        },
        stats: {
            block: { lvl1: 48, max: 561 },
            power: { lvl1: 48, max: 561 },
            serve: { lvl1: 44, max: 513 },
            receive: { lvl1: 38, max: 439 },
            save: { lvl1: 35, max: 415 },
            set: { lvl1: 33, max: 390 }
        }
    },
    {
        name: "Serve Boost: KENTARO KYOTANI (Practice)",
        position: "OP",
        rarity: "SR",
        image: "memory/kentaroSR.png",
        description: {
            lvl1: "Memory Tier I – [Opposite Hitter] Exclusive Effects:\nIncreases equipper's Serve stat by 6%; when equipper executes a Critical serve, increases this serve's power by 10% of Serve stat.",
            max: "Memory Tier V – [Opposite Hitter] Exclusive Effects:\nIncreases equipper's Serve stat by 12%; when equipper executes a Critical serve, increases this serve's power by 20% of Serve stat."
        },
        stats: {
            receive: { lvl1: 48, max: 561 },
            power: { lvl1: 48, max: 561 },
            block: { lvl1: 44, max: 513 },
            serve: { lvl1: 38, max: 439 },
            save: { lvl1: 35, max: 415 },
            set: { lvl1: 33, max: 390 }
        }
    },

  {
    name: "Attack & Defense Boost: KORAI HOSHIUMI",
    position: "WS",
    rarity: "UR",
    image: "memory/hoshiumiUR.png",
    description: {
        lvl1: "Memory Tier I - [Wing Spiker] Exclusive Effects: Increases the equipper's Attack Technique and Defense Technique by 3.2%. When casting a skill or Ultimate. Increases Basic Stats by 1%, stacking up to 10 times. If the contact result in a Critical, grants an additional stack.",
        max: "Memory Tier V - [Wing Spiker] Exclusive Effects: Increases the equipper's Attack Technique and Defense Technique by 6.4%. When casting a skill or Ultimate. Increases Basic Stats by 2%, stacking up to 10 times. If the contact result in a Critical, grants an additional stack." },
    stats: {
        block: { lvl1: 49, max: 570 },
        power: { lvl1: 63, max: 729 },
        serve: { lvl1: 57, max: 665 },
        receive: { lvl1: 63, max: 729 },
        save: { lvl1: 46, max: 539 },
        set: { lvl1: 43, max: 507 }
    }
  },

  {
    name: "Block Boost: SACHIRO HIRUGAMI",
    position: "MB",
    rarity: "UR",
    image: "memory/hirugamiUR.png",
    description: {
        lvl1: "Memory Tier I - [Middle Blocker] Exclusive Effects: Increases the equipper's Block stat by 10%. When your side scores, the equipper gains 2.4% Block stat. Stacking up to 3 times. If your side has the \"Immovable Block\", players gain 1.2% Defense Technique when blocking, and the equipper gains an additional 1.2%, lasting for 4 net crossings, stacking up to 3 times.",
        max: "Memory Tier V - [Middle Blocker] Exclusive Effects: Increases the equipper's Block stat by 20%. When your side scores, the equipper gains 2.4% Block stat. Stacking up to 3 times. If your side has the \"Immovable Block\", players gain 2.4% Defense Technique when blocking, and the equipper gains an additional 2.4%, lasting for 4 net crossings, stacking up to 3 times." },
    stats: {
        block: { lvl1: 63, max: 729 },
        power: { lvl1: 57, max: 665 },
        serve: { lvl1: 63, max: 729 },
        receive: { lvl1: 49, max: 570 },
        save: { lvl1: 46, max: 539 },
        set: { lvl1: 43, max: 507 }
    }
  },
];