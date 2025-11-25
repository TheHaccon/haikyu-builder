export const synergyMeta: {
    [key: string]: {
        category: string;
        activation: {
            scope: string;
            min: number;
        };
    };
} = {
    "Karasuno": { category: "school", activation: { scope: "starters", min: 4 } },
    "Shiratorizawa": { category: "school", activation: { scope: "starters", min: 4 } },
    "Aoba Johsai": { category: "school", activation: { scope: "starters", min: 4 } },
    "Nekoma": { category: "school", activation: { scope: "starters", min: 4 } },
    "Date Kogyo": { category: "school", activation: { scope: "starters", min: 4 } },
    "Fukurodani": { category: "school", activation: { scope: "starters", min: 4 } },
    "Johsenji": { category: "school", activation: { scope: "starters", min: 4 } },
    "Inarizaki": { category: "school", activation: { scope: "starters", min: 4 } },

    "Karasuno\'s Pillar": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Flexible Aces": { category: "stats", activation: { scope: "any", min: 2 } },
    "Worthy Rival": { category: "stats", activation: { scope: "any", min: 2 } },
    "Kiyoko\'s Knights": { category: "deployment", activation: { scope: "any", min: 2 } },
    "karasuno Senior Year": { category: "deployment", activation: { scope: "any", min: 3 } },
    "\"Guardian Deity\" and \"Wing Spiker\"": { category: "deployment", activation: { scope: "any", min: 2 } },
    "\"Shield\" and \"Spear\" (practice)": { category: "deployment", activation: { scope: "any", min: 2 } },
    "TOMODACHI(Friends!)": { category: "stats", activation: { scope: "any", min: 2 } },
    "Cannon \& Iron Wall": { category: "stats", activation: { scope: "any", min: 2 } },
    "Karasuno\'s sophomore": { category: "stats", activation: { scope: "any", min: 3 } },
    "\"Guardian Deity\" and \"Ace\"": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Leaders Cut from the Same Cloth": { category: "stats", activation: { scope: "any", min: 2 } },
    "Surprising Friendship": { category: "stats", activation: { scope: "any", min: 2 } },
    "Karasuno\'s Wing Spiker": { category: "stats", activation: { scope: "any", min: 3 } },
    "Teammates on the Court": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Simulated Junior Training Teamate": { category: "stats", activation: { scope: "any", min: 2 } },
    "Karasuno\'s Pillar(practice)": { category: "stats", activation: { scope: "any", min: 2 } },
    "\"Shield\" and \"Spear\"(practice)": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Formidable Opponent": { category: "stats", activation: { scope: "any", min: 2 } },
    "Bench cheer": { category: "stats", activation: { scope: "any", min: 2 } },
    "The Returning Trio": { category: "stats", activation: { scope: "any", min: 3 } },
    "\"Sun\" and \"Moon\"": { category: "stats", activation: { scope: "any", min: 2 } },
    "Building Team Chemistry": { category: "stats", activation: { scope: "any", min: 2 } },
    "Karasuno\'s Sophomore(practice)": { category: "deployment", activation: { scope: "any", min: 3 } },
    "Rival Friends": { category: "stats", activation: { scope: "any", min: 2 } },
    "Behind the Smile": { category: "stats", activation: { scope: "any", min: 2 } },
    "Master and Apprentice": { category: "stats", activation: { scope: "any", min: 1 } },
    "Team's Guardians": { category: "stats", activation: { scope: "any", min: 2 } },


    "Aoba Johsai's Sophomore": { category: "stats", activation: { scope: "any", min: 3 } },
    "Blunt and Composed": { category: "deployment", activation: { scope: "any", min: 2 } },
    "The Wolf Pack": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Hidden Fire": { category: "stats", activation: { scope: "any", min: 2 } },
    "Seijoh\'s Senior Year Pillars": { category: "deployment", activation: { scope: "any", min: 2 } },
    "The Wolf Pack(Practice)": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Team Chemistry": { category: "deployment", activation: { scope: "any", min: 2 } },
    "To Greater Heights": { category: "stats", activation: { scope: "any", min: 2 } },
    "Breath of Aoba": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Merciless Trust": { category: "stats", activation: { scope: "any", min: 2 } },
    "Fated Rivals": { category: "stats", activation: { scope: "any", min: 2 } },


    "Nekoma\'s Junior": { category: "stats", activation: { scope: "any", min: 3 } },
    "\"Brain\" and \"Control Tower\"": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Nekoma\'s Wing Spiker": { category: "deployment", activation: { scope: "any", min: 3 } },
    "Grit and Competitive": { category: "stats", activation: { scope: "any", min: 2 } },
    "One-on-One Training": { category: "stats", activation: { scope: "any", min: 2 } },
    "The \"Enigmatic\" Teammate": { category: "stats", activation: { scope: "any", min: 2 } },
    "\"Pivot\" and \"Defensive Pivot\"": { category: "stats", activation: { scope: "any", min: 2 } },
    "\"Pivot\" and \"Control Tower\"": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Reliable Seniors": { category: "stats", activation: { scope: "any", min: 3 } },
    "Protective Guidance": { category: "deployment", activation: { scope: "any", min: 2 } },


    "Date Kogyo\'s Captains": { category: "stats", activation: { scope: "any", min: 2 } },
    "The Silent and the Snarky": { category: "deployment", activation: { scope: "any", min: 2 } },
    "New Captain \& Tall Rookie": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Date Kogyo\'s Wing Spiker": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Date Kogyo\'s Setter": { category: "stats", activation: { scope: "any", min: 2 } },
    "Date Kogyo\'s Junior": { category: "stats", activation: { scope: "any", min: 2 } },
    "Date Kogyo\'s Senior": { category: "deployment", activation: { scope: "any", min: 3 } },

    "Lifelong Best Friends": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Promising Senpai": { category: "stats", activation: { scope: "any", min: 2 } },
    "Undisputed Aces": { category: "stats", activation: { scope: "any", min: 2 } },
    "Shiratorizawa\'s Middke Blocker": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Prediction VS System": { category: "stats", activation: { scope: "any", min: 2 } },
    "Ushiwaka and Benkei": { category: "stats", activation: { scope: "any", min: 2 } },
    "The Absolute King and the Steadfast Setter": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Shiratorizawa 2nd Years": { category: "stats", activation: { scope: "any", min: 2 } },
    "Shiratorizawa's WS": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Shiratorizawa's Senior": { category: "stats", activation: { scope: "any", min: 5 } },
    "Undisputed Ace and Shadow Setter": { category: "deployment", activation: { scope: "any", min: 5 } },
    "Contrasting Setters": { category: "stats", activation: { scope: "any", min: 2 } },


    "Top Disciple": { category: "stats", activation: { scope: "any", min: 2 } },
    "The Moment you'll be hooked on volleyball": { category: "stats", activation: { scope: "any", min: 2 } },
    "Fukurodani's Wing Spiker": { category: "stats", activation: { scope: "any", min: 2 } },
    "Fukurodani MBs": { category: "stats", activation: { scope: "any", min: 2 } },
    "Fukurodani 3rd Years": { category: "stats", activation: { scope: "any", min: 2 } },
    "Miracle Ace and Attentive Setter": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Tokyo Camp Training Partners": { category: "stats", activation: { scope: "any", min: 4 } },

    "The Value of the 'Stage'": { category: "stats", activation: { scope: "any", min: 2 } },
    "Two High-Energy Guys": { category: "stats", activation: { scope: "any", min: 2 } },
    "Jouzenji's WS": { category: "stats", activation: { scope: "any", min: 2 } },
    "Head and Core": { category: "deployment", activation: { scope: "any", min: 3 } },
    "Youth Camp Setters": { category: "stats", activation: { scope: "any", min: 2 } },
    "Strongest High School Twins": { category: "deployment", activation: { scope: "any", min: 2 } },
    "Classmates": { category: "stats", activation: { scope: "any", min: 2 } },
    "Friends from Volleyball Class": { category: "stats", activation: { scope: "any", min: 3 } },
    "Inarizaki's Middle Blockers": { category: "stats", activation: { scope: "any", min: 2 } },
    "Third Year from Inarizaki": { category: "stats", activation: { scope: "any", min: 4 } },
    "Inarizaki 2nd Years": { category: "stats", activation: { scope: "any", min: 5 } },
    "Japan Youth Training Camp Teammates": { category: "stats", activation: { scope: "any", min: 5 } },
    "Inarizaki WS Teammates": { category: "stats", activation: { scope: "any", min: 5 } },


    "Little Giants": { category: "stats", activation: { scope: "any", min: 2 } },
    "Friends from Junior High": { category: "deployment", activation: { scope: "any", min: 2 } },

    "Top Spiker and Top-Class Libero": { category: "deployment", activation: { scope: "any", min: 2 } },
};