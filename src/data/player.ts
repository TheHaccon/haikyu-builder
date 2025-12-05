import type { WikiPlayer } from "../types/WikiPlayer";
export const characters: WikiPlayer[] = [
    {
        id: "hinata",
        name: "Shoyo Hinata",
        school: "Karasuno",
        rarity: "SSR",
        position: "Middle Blocker",
        img:"hinataSSR.png",
        stats: {
            lvl1: {
                Serve: 103,
                Quick_Attack: 121,
                Set: 98,
                Receive: 105,
                Block: 109,
                Save: 110
            },
            max: {
                Serve: "TBD",
                Quick_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Middle Blocker", "Karasuno", "SSR"],
        skills: [
            {
                name: "The Greatest Decoy",
                tags: [
                    "Passive", "Chance to trigger",
                ],
                description: "While Hinata is present, increases Power\/Quick Attack stat of players on your side by 7/10/13%"
            },
            {
                name: "Quick Duo",
                tags: [
                    "Passive", "Quick Spike Boost",
                ],
                description: "Hinata performs a Quick Spike and the setter is a Quick Attack-type player, increases this spike's power by 15/17/19% of that setter\'s Quick Attack stat."
            },
            {
                name: "On The Ball",
                tags: [
                    "Passive", "Chance to trigger",
                ],
                description: "Increases Hinata\'s Awareness by 6/7/7%, When Hinata lands a Critical hit, additionally increases Awareness by 4/4/5%, stacking up to 1 times."
            },
            {
                name: "Soaring Teen",
                tags: [
                    "Ultimate", "Active", "Quick Attack", "Critical Power Up"
                ],
                description: "Hinata performs a Quick Spike with 235/250/265/280/295% of his attack stat as power. If this spike is a Critical hit, increases its power by an additional 20% of his Quick Attack stat."
            },
        ],
    },
    {
        id: "hinata(Practice)",
        name: "Shoyo Hinata (Practice)",
        school: "Karasuno",
        rarity: "SR",
        position: "Middle Blocker",
        img:"hinataSR.png",
        stats: {
            lvl1: {
                Serve: 83,
                Quick_Attack: 98,
                Set: 79,
                Receive: 84,
                Block: 88,
                Save: 89
            },
            max: {
                Serve: "TBD",
                Quick_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Middle Blocker", "Karasuno", "SR"],
        skills: [
            {
                name: "Relentless Runner",
                tags: [
                    "Passive",
                ],
                description: "Increases Hinata (Practice)\'s Quick Attack stat by 10/12/14%"
            },
            {
                name: "Undying Spirit",
                tags: [
                    "Passive", "Enhance Team",
                ],
                description: "When Hinata (Practice) scores, players on your side receive \"Spike Intuition\" (lasts for 8 net crossings), increasing Spike power by 6/7.5/9% of the player\'s Power/Quick Attack stat"
            },
            {
                name: "Above The Block",
                tags: [
                    "Passive", "Counter Block",
                ],
                description: "When  Hinata (Practice) performs a Quick Spike, reduces opponent\'s blocking power by 7/9.5/12% of the blocking player\'s Block stat"
            },
            {
                name: "Soaring Teen",
                tags: [
                    "Ultimate", "Active", "Quick Attack", "Stat Bonus"
                ],
                description: " Hinata (Practice) performs a Quick Spike with 215/230/245/260/275% of Quick Attack stat as power; for this Spike, HINATA (Practice)\'s Strength increases by 10%"
            },
        ],
    },
    {
        id: "kageyama(Practice)",
        name: "Tobio Kageyama (Practice)",
        school: "Karasuno",
        rarity: "SSR",
        position: "Setter",
        img:"kageyamaSSR.png",
        stats: {
            lvl1: {
                Serve: 115,
                Quick_Attack: 109,
                Set: 121,
                Receive: 98,
                Block: 109,
                Save: 92
            },
            max: {
                Serve: "TBD",
                Quick_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Setter", "Karasuno", "SSR"],
        skills: [
            {
                name: "Tricky Serve",
                tags: [
                    "Passive", "Serve",
                ],
                description: "Kageyama performs a Jump Serve with 120/135/150% of Serve stat as power"
            },
            {
                name: "Sharp Observer",
                tags: [
                    "Passive", "Set",
                ],
                description: "Kageyama performs a Set with 115/130/145% of Set stat as power;for this play, your side\'s spikers\' Strenght increases by 10%"
            },
            {
                name: "The King Awakens",
                tags: [
                    "Passive", "Awareness Up",
                ],
                description: "While Kageyama is present, increases your side\'s players' Awareness by 10% and increases Spike power by 6/8/10% of the player\'s Power/Quick Attack stat"
            },
            {
                name: "Surprise Dump",
                tags: [
                    "Ultimate", "Active", "Setter Dump", "Block Break"
                ],
                description: "Kageyama performs an unblockable Setter Dump with 225/240/255/270/285% of Set stat as power"
            },
        ],
    },
    {
        id: "daichi",
        name: "Daichi Sawamura",
        school: "Karasuno",
        rarity: "SSR",
        position: "Opposite Hitter",
        img:"daichiSSR.png",
        stats: {
            lvl1: {
                Serve: 103,
                Power_Attack: 109,
                Set: 98,
                Receive: 121,
                Block: 109,
                Save: 104
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Opposite Hitter", "Karasuno", "SSR"],
        skills: [
            {
                name: "Steady Reception",
                tags: [
                    "Passive", "Restore Teammate's Stamina",
                ],
                description: "When Daichi Sawamura performs a Receive, restores 3/5/7 Stamina to the teammate with the lowest Stamina."
            },
            {
                name: "Sledgehammer Spike",
                tags: [
                    "Active", "Power Attack",
                ],
                description: "Daichi Sawamura performs a Power Spike with 120/135/150% of his Power Attack stat."
            },
            {
                name: "Team Backbone",
                tags: [
                    "Passive", "Receive Power Up",
                ],
                description: "While Daichi Sawamura is present, increases receive power of your side\'s back row players by 10/12/14% of their Receive stat."
            },
            {
                name: "Reliable Defense",
                tags: [
                    "Ultimate", "Passive", "Receive", "Power Attack Boost",
                ],
                description: "Daichi Sawamura performs a Receive with 220/235/250/265/280% of his Receive stat. If your side\’s next Spike is a Power Spike, increases that spike\'s power by 15% of the spiker\’s Power Attack stat."
            },
        ],
    },
    {
        id: "daichi(Practice)",
        name: "Daichi Sawamura (Practice)",
        school: "Karasuno",
        rarity: "SR",
        position: "Opposite Hitter",
        img:"daichiSR.png",
        stats: {
            lvl1: {
                Serve: 84,
                Power_Attack: 89,
                Set: 80,
                Receive: 99,
                Block: 95,
                Save: 85
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Opposite Hitter", "Karasuno", "SR"],
        skills: [
            {
                name: "Solid Defense",
                tags: [
                    "Passive",
                ],
                description: "Increases Daichi Sawamura (Practice)'s Save and Receive stats by 10/12/14%."
            },
            {
                name: "Captain's Strength",
                tags: [
                    "Active", "Power Attack",
                ],
                description: "Daichi Sawamura (Practice) performs a Power Spike with 120/135/150% of Power Attack stat as power."
            },
            {
                name: "Captain's Coverage",
                tags: [
                    "Passive", "Restore Teammate's Stamina",
                ],
                description: "Daichi Sawamura (Practice) consumes 1 additional Stamina whenever he touches the ball. When your side scores, that player recovers 3 Stamina. While Sawamura is on the court, increases Receive power by 8/10/12% of the receiving player's Receive stat."
            },
            {
                name: "Precision Reception",
                tags: [
                    "Ultimate", "Passive", "Receive", "Power Up",
                ],
                description: "Daichi Sawamura (Practice) performs a Receive with 215/230/245/260/275% of Receive stat as power; when your side's player next casts an attack skill, increases the power of this touch by 10% of the player's corresponding stat."
            },
        ],
    },
    {
        id: "koshi",
        name: "Koshi Sugawara",
        school: "Karasuno",
        rarity: "SR",
        position: "Setter",
        img:"sugawaraSR.png",
        stats: {
            lvl1: {
                Serve: 99,
                Power_Attack: 89,
                Set: 94,
                Receive: 79,
                Block: 88,
                Save: 75
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Setter", "Karasuno", "SR"],
        skills: [
            {
                name: "Senpai's Prowess",
                tags: [
                    "Passive", "Serve",
                ],
                description: "Koshi Sugawara performs an Overhand Serve with 120/135/150% of Serve stat as power."
            },
            {
                name: "Offensive Tactics",
                tags: [
                    "Passive", "Set", "Power Attack Boost",
                ],
                description: "Koshi Sugawara performs a Set with 115/130/145% of Set stat as power; while Koshi Sugawara is present, increases the power of Power Spike skills used by your Power-type players by 5% of their Power Attack stat."
            },
            {
                name: "Rallying Spirit",
                tags: [
                    "Passive", "Stamina",
                ],
                description: "While Koshi Sugawara is present, reduces your side's Power Spike skills' Stamina consumption by 20/30/40%."
            },
            {
                name: "Senpai's Worth",
                tags: [
                    "Ultimate", "Passive", "Set", "Enhance Team",
                ],
                description: "Koshi Sugawara performs a Set that increases your side's next spike power by 100/115/130/145/160% of his Power/Quick Attack stat; when performing a Power Spike, additionally increases this spike's power by 10/10/15/15/15% of his Power Attack stat."
            },
        ],
    },
    {
        id: "asahi",
        name: "Asahi Azumane",
        school: "Karasuno",
        rarity: "SSR",
        position: "Wing Spiker",
        img:"asahiSSR.png",
        stats: {
            lvl1: {
                Serve: 116,
                Power_Attack: 121,
                Set: 98,
                Receive: 110,
                Block: 104,
                Save: 98
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Wing Spike", "Karasuno", "SSR"],
        skills: [
            {
                name: "Proficient Defense",
                tags: [
                    "Passive", "Receive",
                ],
                description: "Asahi Azumane performs a Receive with 120/135/150% of Receive stat as power."
            },
            {
                name: "Bullet Serve",
                tags: [
                    "Passive", "Serve",
                ],
                description: "Asahi Azumane performs a Jump Serve with 120/135/150% of Serve stat as power."
            },
            {
                name: "Ace's Aura",
                tags: [
                    "Passive", "Stamina",
                ],
                description: "When Asahi Azumane's Stamina is above 70, increases his Power Spike's power by 15/17.5/20% of Power Attack stat."
            },
            {
                name: "Charged Spike",
                tags: [
                    "Ultimate", "Active", "Power Attack", "Stamina Burst",
                ],
                description: "Asahi Azumane consumes 30 additional Stamina to perform a Power Spike with 235/250/265/280/295% of Power Attack stat as power, receives 1 stack of 'Power Charge'; when casting [Charged Spike] skill, each stack of 'Power Charge' increases Power Spike power by 50% of Power Attack stat."
            },
        ]
    },
    {
        id: "asahi(Practice)",
        name: "Asahi Azumane (Practice)",
        school: "Karasuno",
        rarity: "SR",
        position: "Wing Spiker",
        img:"asahiSR.png",
        stats: {
            lvl1: {
                Serve: 94,
                Power_Attack: 98,
                Set: 79,
                Receive: 89,
                Block: 84,
                Save: 80
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Wing Spiker", "Karasuno", "SR"],
        skills: [
            {
                name: "Cannon Spike",
                tags: [
                    "Passive",
                ],
                description: "Increases Asahi Azumane (Practice)'s Power Attack stat by 10/12/14%."
            },
            {
                name: "Pressure Field",
                tags: [
                    "Passive", "Weaken Opponent",
                ],
                description: "When Asahi Azumane (Practice) scores with Power Spike, reduces opponent's receiving players' Receive stat by 7/9.5/12%, lasting for 4 net crossings."
            },
            {
                name: "Advantage Pressure",
                tags: [
                    "Passive", "Power Attack Boost",
                ],
                description: "When your side is leading in points, increases Asahi Azumane (Practice)'s Power Spike power by 10/12.5/15% of Power Attack stat."
            },
            {
                name: "Exhaust Spike",
                tags: [
                    "Ultimate", "Active", "Power Attack", "Stamina Burst",
                ],
                description: "Asahi Azumane (Practice) consumes 3 additional Stamina to perform a Power Spike with 225/240/255/270/285% of Power Attack stat as power."
            },
        ]
    },
    {
        id: "yu",
        name: "Yu Nishinoya",
        school: "Karasuno",
        rarity: "SSR",
        position: "Libero",
        img:"nishinoyaSSR.png",
        stats: {
            lvl1: {
                Serve: 99,
                Power_Attack: 99,
                Set: 110,
                Receive: 122,
                Block: 96,
                Save: 116
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Libero", "Karasuno", "SSR"],
        skills: [
            {
                name: "Guardian Deity",
                tags: [
                    "Passive", "Power Attack Boost",
                ],
                description: "When Yu Nishinoya's Save result is not BAD, increases the power of the next Power Spike skill used by your Power-type player by 15% of his Power Attack stat."
            },
            {
                name: "Libero Supreme",
                tags: [
                    "Passive", "Save",
                ],
                description: "Yu Nishinoya performs a Save with 120% of Save stat as power."
            },
            {
                name: "Inspire Morale",
                tags: [
                    "Passive", "Team Morale",
                ],
                description: "When Yu Nishinoya enters the court, increases your Team Morale by 18."
            },
            {
                name: "Rolling Thunder",
                tags: [
                    "Ultimate", "Passive", "Receive", "Power Attack Skill Cooldown Reduction",
                ],
                description: "Yu Nishinoya consumes 20 additional Stamina to perform a Receive with 220% of Receive stat power; if the Receive result is not BAD, reduces the cooldown of your side's next Power Spike skill by 6 net crossings."
            },
        ]
    },
    {
        id: "yu(Practice)",
        name: "Yu Nishinoya (Practice)",
        school: "Karasuno",
        rarity: "SR",
        position: "Libero",
        img:"nishinoyaSR.png",
        stats: {
            lvl1: {
                Serve: 81,
                Power_Attack: 81,
                Set: 90,
                Receive: 100,
                Block: 109,
                Save: 95
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Libero", "Karasuno", "SR"],
        skills: [
            {
                name: "Primal Instinct",
                tags: [
                    "Passive", "Enhance Team",
                ],
                description: "When Yu Nishinoya (Practice)'s Save result is not BAD, increases your side's Spike power by 7/9.5/12% of the player's Power/Quick Attack stat."
            },
            {
                name: "Elite Libero",
                tags: [
                    "Passive", "Save",
                ],
                description: "Yu Nishinoya (Practice) performs a Save with 120/135/150% of Save stat as power."
            },
            {
                name: "Team's Lifeblood",
                tags: [
                    "Passive", "Team Morale",
                ],
                description: "Yu Nishinoya (Practice)'s Receive stat increases by 7/9.5/12%; when Yu Nishinoya (Practice)'s Receive result is not BAD, increases your Team Morale by 5."
            },
            {
                name: "Genius Defense",
                tags: [
                    "Ultimate", "Passive", "Receive", "Counter Quick Attack",
                ],
                description: "Yu Nishinoya (Practice) performs a Receive with 215/230/245/260/275% of Receive stat as power; when receiving an opponent's Quick Spike, increases this receive's power by 8% of Receive stat."
            },
        ]
    },
    {
        id: "ryunosuke",
        name: "Ryunosuke Tanaka",
        school: "Karasuno",
        rarity: "SSR",
        position: "Wing Spiker",
        img:"tanakaSSR.png",
        stats: {
            lvl1: {
                Serve: 104,
                Power_Attack: 121,
                Set: 98,
                Receive: 115,
                Block: 109,
                Save: 99
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Wing Spiker", "Karasuno", "SSR"],
        skills: [
            {
                name: "The Ace Arrives",
                tags: [
                    "Passive", "Power Attack Boost",
                ],
                description: "Increases the power of Ryunosuke Tanaka's 1st Power Spike in each match by 25/40/55% of Power Attack stat."
            },
            {
                name: "Tenacious Spirit",
                tags: [
                    "Passive", "Receive",
                ],
                description: "Ryunosuke Tanaka performs a Receive with 115/130/145% of Receive stat as power; for this Receive, Tanaka's Reflex increases by 10%."
            },
            {
                name: "Burning Passion",
                tags: [
                    "Passive", "Reduce Opponent's Stamina",
                ],
                description: "Increases Ryunosuke Tanaka's Power Spike power by 10/12/14% of Power Attack stat; his Power Spike reduces opponent's blocking and receiving players' Stamina by 5."
            },
            {
                name: "Super Inner Cross",
                tags: [
                    "Ultimate", "Active", "Power Attack", "Power Up",
                ],
                description: "Ryunosuke Tanaka consumes 5 extra Stamina to perform a Short Diagonal Spike with 250/260/275/290/305% of Power Attack stat as power; when this is Tanaka's first spike in this set, increases spike power by an additional 30% of Tanaka's Power Attack stat."
            },
        ]
    },
    {
        id: "kei",
        name: "Kei Tsukishima",
        school: "Karasuno",
        rarity: "SSR",
        position: "Middle Blocker",
        img:"tsukishimaSSR.png",
        stats: {
            lvl1: {
                Serve: 106,
                Quick_Attack: 115,
                Set: 101,
                Receive: 103,
                Block: 122,
                Save: 97
            },
            max: {
                Serve: "TBD",
                Quick_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Middle Blocker", "Karasuno", "SSR"],
        skills: [
            {
                name: "Karasuno's Composure",
                tags: [
                    "Passive", "Enhance Team",
                ],
                description: "While Kei Tsukishima is on the court, increases the Strength of your Quick Attack-type players by 10/12.5/15%."
            },
            {
                name: "Tactical Quick Attack",
                tags: [
                    "Active", "Quick Attack", "Enhance Team",
                ],
                description: "Kei Tsukishima performs a Quick Spike with 115/130/145% of his Quick Attack stat. The next time a teammate casts a Spike skill, their Awareness is increased by 5%."
            },
            {
                name: "Moonrise",
                tags: [
                    "Passive", "Block Power Up",
                ],
                description: "While Kei Tsukishima is present, increases Block power of your side's front row players by 8/10/12% of their Block stat."
            },
            {
                name: "Kei's Retort",
                tags: [
                    "Ultimate", "Active", "Block", "Apply Debuff",
                ],
                description: "Kei Tsukishima performs a Block with 195/210/225/240/255% of his Block stat as power. Applies the 'Enrage' debuff to the opposing spiker (reducing their Power/Quick Attack stats by 10%)."
            },
        ]
    },
    {
        id: "kei(Practice)",
        name: "Kei Tsukishima (Practice)",
        school: "Karasuno",
        rarity: "SR",
        position: "Middle Blocker",
        img:"tsukishimaSR.png",
        stats: {
            lvl1: {
                Serve: 86,
                Quick_Attack: 94,
                Set: 82,
                Receive: 83,
                Block: 99,
                Save: 78
            },
            max: {
                Serve: "TBD",
                Quick_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Middle Blocker", "Karasuno", "SR"],
        skills: [
            {
                name: "Elevated Strike",
                tags: [
                    "Active", "Quick Attack",
                ],
                description: "Kei Tsukishima (Practice) performs a Quick Spike with 110/120/140% of Quick Attack stat as power."
            },
            {
                name: "Block Tactician",
                tags: [
                    "Passive",
                ],
                description: "Increases Kei Tsukishima (Practice)'s Block stat by 6/7.5/9%; when he performs a Block, increases his Reflex by 5%."
            },
            {
                name: "Quick Attack Strategy",
                tags: [
                    "Passive",
                ],
                description: "Increases Kei Tsukishima (Practice)'s Quick Attack stat by 6/7.5/9%; when he performs a Quick Spike, increases his Awareness by 5%."
            },
            {
                name: "Delayed Block",
                tags: [
                    "Ultimate", "Active", "Block",
                ],
                description: "Kei Tsukishima (Practice) performs a Block with 180/195/210/225/240% of Block stat as power."
            },
        ]
    },
    {
        id: "tadashi",
        name: "Tadashi Yamaguchi",
        school: "Karasuno",
        rarity: "SR",
        position: "Middle Blocker",
        img:"tadashiSR.png",
        stats: {
            lvl1: {
                Serve: 99,
                Quick_Attack: 88,
                Set: 93,
                Receive: 80,
                Block: 88,
                Save: 75
            },
            max: {
                Serve: "TBD",
                Quick_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Middle Blocker", "Karasuno", "SR"],
        skills: [
            {
                name: "Serve Stability",
                tags: [
                    "Passive", "Manual Serve",
                ],
                description: "When Tadashi Yamaguchi’s Serve results in a PERFECT, increases its power by 20/25/30% of his Serve stat. When it results in a BAD, reduces its power by 20/25/30% of his Serve stat."
            },
            {
                name: "Spotlight Serve",
                tags: [
                    "Passive", "Awareness Up",
                ],
                description: "Increases the power of Tadashi Yamaguchi's 1st Serve in each match by 15/30/45% of his Serve stat. Also increases his Awareness by 15% for that serve."
            },
            {
                name: "Point by Point",
                tags: [
                    "Passive",
                ],
                description: "Increases Tadashi Yamaguchi's Serve stat by 10/12/14%."
            },
            {
                name: "Defiant Float",
                tags: [
                    "Ultimate", "Passive", "Serve",
                ],
                description: "Tadashi Yamaguchi performs a Jump Float Serve with 210/225/240/225/270% of his Serve stat as power. If your side is behind, this serve's power is additionally increased by 25% of his Serve stat."
            },
        ]
    },
    {
        id: "tadashi(Practice)",
        name: "Tadashi Yamaguchi (Practice)",
        school: "Karasuno",
        rarity: "R",
        position: "Middle Blocker",
        img:"tadashiR.png",
        stats: {
            lvl1: {
                Serve: 90,
                Quick_Attack: 81,
                Set: 85,
                Receive: 73,
                Block: 81,
                Save: 69
            },
            max: {
                Serve: "TBD",
                Quick_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Middle Blocker", "Karasuno", "R"],
        skills: [
            {
                name: "Practice Mastery",
                tags: [
                    "Passive",
                ],
                description: "Increases Tadashi Yamaguchi (Practice)'s Serve stat by 7/9%."
            },
            {
                name: "Hard Work",
                tags: [
                    "Passive",
                ],
                description: "Increases Tadashi Yamaguchi (Practice)'s Receive stat by 7/9%."
            },
            {
                name: "Will and Power",
                tags: [
                    "Passive", "Receive",
                ],
                description: "Tadashi Yamaguchi (Practice) performs a Receive with 120/130% of Receive stat as power."
            },
            {
                name: "Signature Serve",
                tags: [
                    "Ultimate", "Passive", "Serve",
                ],
                description: "Tadashi Yamaguchi (Practice) performs a Jump Float Serve with 200/210/220% of Serve stat as power."
            },
        ]
    },
    {
        id: "chikara",
        name: "Chikara Ennoshita",
        school: "Karasuno",
        rarity: "SR",
        position: "Wing Spiker",
        img:"chikaraSR.png",
        stats: {
            lvl1: {
                Serve: 84,
                Power_Attack: 89,
                Set: 79,
                Receive: 98,
                Block: 89,
                Save: 85
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Wing Spiker", "Karasuno", "SR"],
        skills: [
            {
                name: "Forceful Spike",
                tags: [
                    "Active", "Power Attack",
                ],
                description: "Chikara Ennoshita performs a Power Spike with 120/135/150% of his Power Attack stat."
            },
            {
                name: "Carry the Torch",
                tags: [
                    "Passive", "Chance to Trigger",
                ],
                description: "While Chikara Ennoshita is present, at the end of each start of each turn, there is a 30/45/60% chance to remove 1 debuff(s) from players on your side."
            },
            {
                name: "Rising Leader",
                tags: [
                    "Passive", "Enhance Team",
                ],
                description: "While Chikara Ennoshita is on the court, when your side loses a point, the next spike from your side gains additional power equal to 8/10/12% of the spiker’s Power/Quick Attack stat. If the spike is a Power Spike skill, its power increases further by 6% of the spiker’s Power Attack stat."
            },
            {
                name: "Fighting Spirit",
                tags: [
                    "Ultimate", "Passive", "Receive",
                ],
                description: "Chikara Ennoshita performs a Receive with 220/235/250/265/280% of his Receive stat."
            },
        ]
    },
    {
        id: "chikara(Practice)",
        name: "Chikara Ennoshita (Practice)",
        school: "Karasuno",
        rarity: "R",
        position: "Wing spiker",
        img:"chikaraR.png",
        stats: {
            lvl1: {
                Serve: 77,
                Power_Attack: 81,
                Set: 72,
                Receive: 90,
                Block: 81,
                Save: 78
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Wing Spiker", "Karasuno", "R"],
        skills: [
            {
                name: "Face Your Fears",
                tags: [
                    "Passive",
                ],
                description: "Increases Chikara Ennoshita (Practice)'s Power Attack stat by 7/9%."
            },
            {
                name: "Skilled Spike",
                tags: [
                    "Active", "Power Attack",
                ],
                description: "Chikara Ennoshita (Practice) performs a Power Spike with 120/130% of Power Attack stat as power."
            },
            {
                name: "Defender's Duty",
                tags: [
                    "Passive", "Receive",
                ],
                description: "Increases Chikara Ennoshita (Practice)'s Receive stat by 7/9%."
            },
            {
                name: "Tenacious Successor",
                tags: [
                    "Ultimate", "Passive", "Receive",
                ],
                description: "Chikara Ennoshita (Practice) performs a Receive with 200/210/220% of Receive stat as power."
            },
        ]
    },
    {
        id: "hisashi",
        name: "Hisashi Kinoshita",
        school: "Karasuno",
        rarity: "R",
        position: "Wing Spiker",
        img:"hisashiR.png",
        stats: {
            lvl1: {
                Serve: 86,
                Power_Attack: 89,
                Set: 73,
                Receive: 81,
                Block: 77,
                Save: 73
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Wing Spiker", "Karasuno", "R"],
        skills: [
            {
                name: "Sharp Focus",
                tags: [
                    "Passive",
                ],
                description: "Increases Hisashi Kinoshita's Serve stat by 7/9%."
            },
            {
                name: "Resolute Receive",
                tags: [
                    "Passive",
                ],
                description: "Increases Hisashi Kinoshita's Receive stat by 7/9%."
            },
            {
                name: "Clutch Arrival",
                tags: [
                    "Passive", "Team Morale",
                ],
                description: "When Hisashi Kinoshita enters the court for the 1st time in each match, increases your Team Morale by 5/7."
            },
            {
                name: "Tension Serve",
                tags: [
                    "Ultimate", "Passive", "Serve",
                ],
                description: "Hisashi Kinoshita performs a Jump Float Serve with 200/210/220% of his Serve stat."
            },
        ]
    },
    {
        id: "kazuhito",
        name: "Kazuhito Narita",
        school: "Karasuno",
        rarity: "R",
        position: "Middle Blocker",
        img:"kazuhitoR.png",
        stats: {
            lvl1: {
                Serve: 79,
                Quick_Attack: 86,
                Set: 75,
                Receive: 77,
                Block: 90,
                Save: 73
            },
            max: {
                Serve: "TBD",
                Quick_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Middle Blocker", "Karasuno", "R"],
        skills: [
            {
                name: "Basic Serve",
                tags: [
                    "Passive", "Serve",
                ],
                description: "Increases Kazuhito Narita's Serve stat by 7/9%."
            },
            {
                name: "Basic Receive",
                tags: [
                    "Passive", "Receive",
                ],
                description: "Increases Kazuhito Narita's Receive stat by 7/9%."
            },
            {
                name: "Basic Blocking",
                tags: [
                    "Passive", "Block",
                ],
                description: "Increases Kazuhito Narita's Block stat by 7/9%."
            },
            {
                name: "Hearty Spike",
                tags: [
                    "Ultimate", "Active", "Quick Attack",
                ],
                description: "Kazuhito Narita performs a Quick Spike with 200/210/220% of Quick Attack stat as power."
            },
        ]
    },
    {
        id: "toru(Practice)",
        name: "Toru Oikawa (Practice)",
        school: "Aoba Johsai",
        rarity: "SSR",
        position: "Setter",
        img:"oikawaSSR.png",
        stats: {
            lvl1: {
                Serve: 122,
                Power_Attack: 110,
                Set: 116,
                Receive: 98,
                Block: 109,
                Save: 92
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Setter", "Aoba Johsai", "SSR"],
        skills: [
            {
                name: "Court Vision",
                tags: [
                    "Passive", "Received 'Attack Tempo'",
                ],
                description: "Increases Toru Oikawa (Practice)'s Set stat by 10/12/14%. When your players cast a Spike skill, they gain 1 stack(s) of 'Attack Tempo'. Each stack increases your players’ Awareness by 1%, up to 10 stacks."
            },
            {
                name: "Game Changer",
                tags: [
                    "Passive", "Enhance Team",
                ],
                description: "While Toru Oikawa (Practice) is on the court, at the start of each turn, if your side is behind, increases all basic stats of your players by 6/9/12%, lasting for 8 net crossings."
            },
            {
                name: "Control Tower",
                tags: [
                    "Passive", "Awareness Up",
                ],
                description: "While Toru Oikawa (Practice) is on the court, increases your players’ Awareness by 6/9/12%. Each stack of 'Attack Tempo' provides an additional 1% Awareness."
            },
            {
                name: "Double-Edged Serve",
                tags: [
                    "Ultimate", "Passive", "Serve", "Awareness Up",
                ],
                description: "Toru Oikawa (Practice) performs a Power Jump Serve with 240/255/270/285/300% of his Serve stat. For this Serve, his Awareness increases by 15%. This Serve has a 5% chance to fail."
            },
        ]
    },
    {
        id: "iwaizumi",
        name: "Hajime Iwaizumi",
        school: "Aoba Johsai",
        rarity: "SSR",
        position: "Wing Spiker",
        img:"iwaizumiSSR.png",
        stats: {
            lvl1: {
                Serve: 104,
                Power_Attack: 121,
                Set: 98,
                Receive: 115,
                Block: 109,
                Save: 99
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Wing Spiker", "Aoba Johsai", "SSR"],
        skills: [
            {
                name: "Ace's Strength",
                tags: [
                    "Passive",
                ],
                description: "Increases Hajime Iwaizumi's Awareness by 5/5/8% and Strength by 10/15/15%."
            },
            {
                name: "Focused Defense",
                tags: [
                    "Passive", "Receive",
                ],
                description: "Hajime Iwaizumi performs a Receive with 120/135/150% of Receive stat as power."
            },
            {
                name: "Vice-Captain's Rally",
                tags: [
                    "Passive",
                ],
                description: "While Hajime Iwaizumi is present, increases Strength of players on your side by 6/8.5/11%."
            },
            {
                name: "Head-to-Head",
                tags: [
                    "Ultimate", "Active", "Power Attack", "Critical Power Up",
                ],
                description: "Hajime Iwaizumi performs a Power Spike with 240/255/270/285/300% of Power Attack stat as power; when this spike achieves Critical result, increases its power by 15% of Power Attack stat."
            },
        ]
    },
    {
        id: "iwaizumi(Practice)",
        name: "Hajime Iwaizumi (Practice)",
        school: "Aoba Johsai",
        rarity: "SSR",
        position: "Wing Spiker",
        img:"iwaizumiSR.png",
        stats: {
            lvl1: {
                Serve: 85,
                Power_Attack: 99,
                Set: 80,
                Receive: 94,
                Block: 89,
                Save: 81
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Wing Spiker", "Aoba Johsai", "SR"],
        skills: [
            {
                name: "Burning Spike",
                tags: [
                    "Passive", "Power Attack",
                ],
                description: "Increases Hajime Iwaizumi (Practice)'s Power Attack stat by 10/12/14%."
            },
            {
                name: "Calm Receive",
                tags: [
                    "Passive", "Receive",
                ],
                description: "Hajime Iwaizumi (Practice) performs a Receive with 115/130/145% of Receive stat as power; for this Receive, Iwaizumi (Practice)'s Spirit increases by 8%."
            },
            {
                name: "Rising Spirit",
                tags: [
                    "Passive",
                ],
                description: "Increases Hajime Iwaizumi (Practice)'s Awareness and Reflex by 5/7.5/10%."
            },
            {
                name: "Unstoppable Spike",
                tags: [
                    "Ultimate", "Active", "Power Attack",
                ],
                description: "Hajime Iwaizumi (Practice) performs a Power Spike with 220/235/250/265/280% of Power Attack stat as power."
            },
        ]
    },
    {
        id: "matsukawa",
        name: "Issei Matsukawa",
        school: "Aoba Johsai",
        rarity: "SR",
        position: "Middle Blocker",
        img:"matsukawaSR.png",
        stats: {
            lvl1: {
                Serve: 86,
                Quick_Attack: 93,
                Set: 81,
                Receive: 84,
                Block: 98,
                Save: 79
            },
            max: {
                Serve: "TBD",
                Quick_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Middle Blocker", "Aoba Johsai", "SR"],
        skills: [
            {
                name: "Perfect Touch",
                tags: [
                    "Passive", "Counter Quick Attack",
                ],
                description: "When Issei Matsukawa blocks an opponent's Quick Spike, increases blocking power by 11/13/15% of Block stat."
            },
            {
                name: "Overwhelming Spike",
                tags: [
                    "Active", "Quick Attack",
                ],
                description: "Issei Matsukawa performs a Quick Spike with 120/135/150% of Quick Attack stat as power."
            },
            {
                name: "Crushing Block",
                tags: [
                    "Passive", "Enhance Team",
                ],
                description: "Increases Issei Matsukawa's Block stat by 8/10.5/13%; when Matsukawa performs a PERFECT Block, increases your side's next spiker's Awareness by 4%."
            },
            {
                name: "Unbreakable Block",
                tags: [
                    "Ultimate", "Active", "Block",
                ],
                description: "Issei Matsukawa performs a Block with 180/195/210/225/240% of Block stat as power."
            },
        ]
    },
    {
        id: "hanamaki",
        name: "Takahiro Hanamaki",
        school: "Aoba Johsai",
        rarity: "SR",
        position: "Wing Spiker",
        img:"takahiroSR.png",
        stats: {
            lvl1: {
                Serve: 84,
                Power_Attack: 89,
                Set: 80,
                Receive: 98,
                Block: 89,
                Save: 84
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Wing Spiker", "Aoba Johsai", "SR"],
        skills: [
            {
                name: "Reliable Wing Spiker",
                tags: [
                    "Passive", "Counter Quick Attack",
                ],
                description: "Increases Takahiro Hanamaki's Awareness by 8/10/12%; when his Power Spike is Critical, reduces blocking players' Block stat by 5%."
            },
            {
                name: "Precise Spike",
                tags: [
                    "Active", "Power Attack", "Received 'Attack Tempo'",
                ],
                description: "Takahiro Hanamaki performs a Power Spike with 115/130/145% of Power Attack stat as power; receives 1 stack(s) of 'Attack Tempo', each stack increases the Awareness of players on your side by 1%, up to 10 stacks."
            },
            {
                name: "Perfect Defense",
                tags: [
                    "Passive", "Counter Quick Attack",
                ],
                description: "Increases Takahiro Hanamaki's Receive stat by 8/10/12%; when he receives an opponent's Quick Spike, increases receive power by 4% of Receive stat."
            },
            {
                name: "Perfect Read",
                tags: [
                    "Ultimate", "Passive", "Receive",
                ],
                description: "Takahiro Hanamaki performs a Receive with 220/235/250/265/280% of Receive stat as power."
            },
        ]
    },
    {
        id: "yahaba",
        name: "Shigeru Yahaba",
        school: "Aoba Johsai",
        rarity: "SR",
        position: "Setter",
        img:"yahabaSR.png",
        stats: {
            lvl1: {
                Serve: 98,
                Power_Attack: 88,
                Set: 93,
                Receive: 80,
                Block: 88,
                Save: 75
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Setter", "Aoba Johsai", "SR"],
        skills: [
            {
                name: "All-Out Set",
                tags: [
                    "Passive", "Set",
                ],
                description: "Shigeru Yahaba performs a Set with 120/135/150% of Set stat as power."
            },
            {
                name: "Developing Setter",
                tags: [
                    "Passive",
                ],
                description: "Increases Shigeru Yahaba's Serve and Set stats by 8/10/12%."
            },
            {
                name: "Pride Defense",
                tags: [
                    "Passive", "Enhance Team",
                ],
                description: "Increases Shigeru Yahaba's Set stat by 4/6/8%; while Yahaba is present, increases Awareness and Reflex of players on your side by 8%."
            },
            {
                name: "Will to Score",
                tags: [
                    "Ultimate", "Passive", "Serve",
                ],
                description: "Shigeru Yahaba performs a Jump Serve with 220/235/250/265/280% of Serve stat as power."
            },
        ]
    },
    {
        id: "watari",
        name: "Shinji Watari",
        school: "Aoba Johsai",
        rarity: "SR",
        position: "Libero",
        img:"watariSR.png",
        stats: {
            lvl1: {
                Serve: 81,
                Power_Attack: 81,
                Set: 89,
                Receive: 98,
                Block: 79,
                Save: 94
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Libero", "Aoba Johsai", "SR"],
        skills: [
            {
                name: "Complete Defense",
                tags: [
                    "Passive",
                ],
                description: "Increases Shinji Watari's Save and Receive stats by 8/10/12%."
            },
            {
                name: "Skilled Save",
                tags: [
                    "Passive", "Save",
                ],
                description: "Shinji Watari performs a Save with 120/135/150% of Save stat as power."
            },
            {
                name: "Seamless Reception",
                tags: [
                    "Passive", "Counter Quick Attack",
                ],
                description: "When receiving an opponent's Quick Spike, increases Shinji Watari's receive power by 20/35/50% of Receive stat."
            },
            {
                name: "Consistent Reception",
                tags: [
                    "Ultimate", "Passive", "Receive", "Enhance Team",
                ],
                description: "Shinji Watari performs a Receive with 215/230/245/260/275% of Receive stat as power; when this Receive achieves a PERFECT result, increases your side's players' Strength by 10% when performing Power Spikes for 1 turn."
            },
        ]
    },
    {
        id: "kindaichi",
        name: "Yutaro Kindaichi",
        school: "Aoba Johsai",
        rarity: "SR",
        position: "Middle Blocker",
        img:"kindaichiSR.png",
        stats: {
            lvl1: {
                Serve: 84,
                Quick_Attack: 99,
                Set: 79,
                Receive: 84,
                Block: 89,
                Save: 88
            },
            max: {
                Serve: "TBD",
                Quick_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Middle Blocker", "Aoba Johsai", "SR"],
        skills: [
            {
                name: "Overhead Spike",
                tags: [
                    "Passive", "Counter Block",
                ],
                description: "When Yutaro Kindaichi performs a Quick Spike, reduces the opponent blocker's Block by 10/12/14% of their Block stat."
            },
            {
                name: "Elevated Block",
                tags: [
                    "Active", "Block",
                ],
                description: "Yutaro Kindaichi performs a Block with 105/120/135% of his Block stat."
            },
            {
                name: "Decisive Hit",
                tags: [
                    "Passive",
                ],
                description: "Increases Yutaro Kindaichi's Awareness by 8/10/12% and Strength by 8/10/12%."
            },
            {
                name: "Power C-Quick",
                tags: [
                    "Ultimate", "Active", "Quick Attack",
                ],
                description: "Yutaro Kindaichi performs a Quick Spike with 220/235/250/265/280% of Quick Attack stat as power."
            },
        ]
    },
    {
        id: "kunimi",
        name: "Akira Kunimi",
        school: "Aoba Johsai",
        rarity: "SR",
        position: "Opposite Hitter",
        img:"kunimiSR.png",
        stats: {
            lvl1: {
                Serve: 84,
                Power_Attack: 98,
                Set: 80,
                Receive: 94,
                Block: 89,
                Save: 80
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Opposite Hitter", "Aoba Johsai", "SR"],
        skills: [
            {
                name: "Efficient Spike",
                tags: [
                    "Passive", "Power Attack",
                ],
                description: "Increases Akira Kunimi's Power Attack stat by 10/12/14%."
            },
            {
                name: "Effortless Reception",
                tags: [
                    "Passive", "Receive",
                ],
                description: "Akira Kunimi performs a Receive with 120/135/150% of Receive stat as power."
            },
            {
                name: "Power Saving Mode",
                tags: [
                    "Passive", "Stamina",
                ],
                description: "Reduces Akira Kunimi's Stamina consumption by 15/20/25%."
            },
            {
                name: "Focus Mode",
                tags: [
                    "Ultimate", "Active", "Power Attack",
                ],
                description: "Akira Kunimi performs a Power Spike with 220/235/250/265/280% of Power Attack stat as power."
            },
        ]
    },
    {
        id: "kyotani",
        name: "Kentaro Kyotani",
        school: "Aoba Johsai",
        rarity: "SSR",
        position: "Opposite Hitter",
        img:"kentaroSSR.png",
        stats: {
            lvl1: {
                Serve: 116,
                Power_Attack: 121,
                Set: 97,
                Receive: 108,
                Block: 103,
                Save: 97
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Opposite Hitter", "Aoba Johsai", "SSR"],
        skills: [
            {
                name: "Fierce Attack",
                tags: [
                    "Passive", "Awareness", "Power Attack",
                ],
                description: "Increases Kentaro Kyotani's Awareness by 8/10/12% and Power Attack stat by 5/6/7%."
            },
            {
                name: "Mad Dog Serve",
                tags: [
                    "Passive", "Serve", "Awareness Up",
                ],
                description: "Kentaro Kyotani performs a Serve with 130/145/160% of his Serve stat. For this Serve, his Awareness increases by 15%, with a fixed 10% chance to fail."
            },
            {
                name: "Strength Burst",
                tags: [
                    "Passive", "Strength",
                ],
                description: "Increases Kentaro Kyotani's Strength by 18/22/26%."
            },
            {
                name: "Mad Dog's Fang",
                tags: [
                    "Ultimate", "Active", "Power Attack", "Reduce opponent's Stamina",
                ],
                description: "Kentaro Kyotani performs a Power Spike with 210/225/240/255/270% of his Power Attack stat, reducing the Stamina of the opponent’s blocking and receiving players by 10."
            },
        ]
    },
    {
        id: "kyotani(Practice)",
        name: "Kentaro Kyotani (Practice)",
        school: "Aoba Johsai",
        rarity: "SR",
        position: "Opposite Hitter",
        img:"kentaroSR.png",
        stats: {
            lvl1: {
                Serve: 95,
                Power_Attack: 99,
                Set: 79,
                Receive: 88,
                Block: 84,
                Save: 79
            },
            max: {
                Serve: "TBD",
                Power_Attack: "TBD",
                Set: "TBD",
                Receive: "TBD",
                Block: "TBD",
                Save: "TBD"
            },
        },
        tags: ["Opposite Hitter", "Aoba Johsai", "SR"],
        skills: [
            {
                name: "Predator Serve",
                tags: [
                    "Passive", "Serve"
                ],
                description: "Kentaro Kyotani (Practice) performs a Jump Serve with 120/135/150% of Serve stat as power."
            },
            {
                name: "Explosive Strength",
                tags: [
                    "Passive", "Stat Bonus"
                ],
                description: "When Kentaro Kyotani (Practice) performs a Power Spike, increases his Strength by 15/18/21% for this Spike."
            },
            {
                name: "Revving Up",
                tags: [
                    "Passive", "Stat Bonus"
                ],
                description: "Increases Kentaro Kyotani (Practice)'s Power Attack stat by 8/10/12%; when he performs a Power Spike, receives 1 stack of 'Heat Up', each stack increases Power Attack stat by 1%, up to 4 stacks."
            },
            {
                name: "Rampaging Offense",
                tags: [
                    "Ultimate", "Active", "Power Attack"
                ],
                description: "Kentaro Kyotani (Practice) performs a Power Spike with 220/235/250/265/280% of Power Attack stat as power."
            }
        ]
    },

    {
        id: "atsumu_miya_sp",
        name: "Atsumu Miya SP",
        school: "Inarizaki",
        rarity: "SP",
        position: "Setter",
        img:"atsumuSP.png",
            stats: {
                lvl1: {
                    Serve: 164,
                    Quick_Attack: 152,
                    Set: 169,
                    Receive: 129,
                    Block: 143,
                    Save: 121
                },
                max: {
                    Serve: "-",
                    Quick_Attack: "-",
                    Set: "-",
                    Receive: "-",
                    Block: "-",
                    Save: "-"
                },
            },
        tags: ["Setter", "Inarizaki", "SP"],
        skills: [
            {
                name: "Free Play",
                tags: [],
                description: "Miya Atsumu's [Set] and [Serve] are increased by 10%. When Miya is on the court, at the start of each rally, any player with [Awareness] at 30% or below will gain the [Ingenuity] effect. This effect increases the players [Attack Technique] and [Defensive Technique] by 10%, lasting for one rally."
            },
            {
                name: "Overwhelming Serve",
                tags: [],
                description: "Miya Atsumu alternates between a Jump Float Serve and a Spike Serve. Jump Float Serve - Miya Atsumu performs a Jump Float Serve with [Serve] x 140%. Opponents can't use their Spike Ultimates for 2 net crossings. Spike Serve - Miya Atsumu performs a Spike Serve with [Serve] x 160%. Opponents can't use their Receive Ultimates for 2 net crossings."
            },
            {
                name: "Instinctive Set",
                tags: [],
                description: "At the start of the rally, Miya Atsumu's first set is increased by 20%. When Miya Atsumu activates his Ultimate, all allies that have the [ingenuity] effect will have their [Attack Technique] increased by 20%, and [Defensive Technique] by 15%. Lasts for 1 rally. If the [Attack Technique] of a teammate performing a Power/Quick Spike is above 60%, this Spike will always become a Critical Play."
            },
            {
                name: "Stable Setup",
                tags: [],
                description: "Miya Atsumu will perform a set with power equal to 260% of his [Set].  If Miya Atsumu's [Attack Technique] is 40% or higher, his next set is guaranteed to be critical."
            }
        ],
    },

  {
    id: "hinatatest_(festival)",
    name: "HinataTest (festival)",
    school: "Karasuno",
    rarity: "SP",
    position: "Middle Blocker",
    img: "hinataF.png",
    stats: {
        lvl1: {
            Serve: 0,
            Quick_Attack: 0,
            Set: 0,
            Receive: 0,
            Block: 0,
            Save: 0
        },
        max: {
            Serve: "-",
            Quick_Attack: "-",
                Set: "-",
            Receive: "-",
            Block: "-",
            Save: "-"
          },
    },
    tags: ["Middle Blocker", "Karasuno", "SP"],
    skills: [
    {
        name: "",
        tags: [],
        description: ""
      },
    {
        name: "",
        tags: [],
        description: ""
      },
    {
        name: "",
        tags: [],
        description: ""
      },
    {
        name: "",
        tags: [],
        description: ""
      }
    ],
  },
];