import { SynergyDefinition } from "../types";

export const synergies: SynergyDefinition[] = [
    /*schools*/
    {
        name: "Karasuno",
        category: "school",
        school: "Karasuno",
        description: "Increases Spike and Quick stats of all players present by 10%",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Aoba Johsai",
        category: "school",
        school: "Aoba Johsai",
        description: "Increases Spike stats of all players present by 15%",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Nekoma",
        category: "school",
        school: "Nekoma",
        description: "Increases Receive stat of all players present by 15%",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Date Kogyo",
        category: "school",
        school: "Date Kogyo",
        description: "Increases Block stat of all players present by 15%",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Shiratorizawa",
        category: "school",
        school: "Shiratorizawa",
        description: "Increases Awareness and Strength of all players present by 10%",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Fukurodani",
        category: "school",
        school: "Fukurodani",
        description: "Your Team Morale increases by 20 at the start of the match",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Johsenji",
        category: "school",
        school: "Johsenji",
        description: "All players on your side gain 2 stacks of \"Play Hard\"",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Inarizaki",
        category: "school",
        school: "Inarizaki",
        description: "Increases Attack Technique and Defense Technique of all players on the court by 5%",
        activation: { type: "count", min: 4 }
    },

    /*KARASUNO*/
    {
        name: "KARASUNO Senior Year",
        category: "deployment",
        members: ["Daichi SSR", "Sugawara SR", "Asahi SSR"],
        description: "Reduces Stamina consumption of Spike skills by 10%; when performing Power Spikes, increases this player's Attack Technique by 6/7/8/9/10%",
        activation: { type: "count", min: 3 }
    },
    {
        name: "Worthy Rival",
        category: "stats",
        members: ["Hinata SSR", "Inuoka SR"],
        description: { "Hinata SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Inuoka SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Rival Friends",
        category: "stats",
        members: ["Hinata SSR", "Kenma SSR"],
        description: { "Hinata SSR": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%", "Kenma SSR": "Set +5/7/9/12/15, Set +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "KARASUNO's Pillar",
        category: "deployment",
        members: ["Daichi SSR", "Chikara SR"],
        description: "When achieving a PERFECT receive, increases Team Morale by 3/3/4/4/5",
        activation: { type: "count", min: 2 }
    },
    {
        name: "Flexible Aces",
        category: "stats",
        members: ["Lev SSR", "Hinata SSR"],
        description: { "Lev SSR": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%", "Hinata SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "\"Shield\" and \"Spear\"",
        category: "deployment",
        members: ["Tsukishima SSR", "Tadashi SR"],
        description: "Increases Tsukishima's Block stat by 6/7/8/9/10% and Tadashi's Serve stat by 6/7/8/9/10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "Kiyoko's Knights",
        category: "deployment",
        members: ["Nishinoya SSR", "Tanaka SSR"],
        description: "When scoring, increases Team morale by 6/7/8/9/10",
        activation: { type: "count", min: 2 }
    },
    {
        name: "Behind the Smile",
        category: "stats",
        members: ["Daichi SSR", "Kuroo UR"],
        description: { "Daichi SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Kuroo UR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Master and Apprentice",
        category: "stats",
        members: ["Kuroo UR", "Tsukishima SSR"],
        description: { "Kuroo UR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Tsukishima SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "TOMODACHI(Friends!)",
        category: "stats",
        members: ["Yamamoto SR", "Tanaka SSR"],
        description: { "Yamamoto SR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Tanaka SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Cannon & Iron Wall",
        category: "stats",
        members: ["Asahi SSR", "Aone SSR"],
        description: { "Asahi SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Aone SSR": "No buff" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "\"Guardian Deity\" and \"Wing Spiker\"",
        category: "deployment",
        members: ["Nishinoya SSR", "Asahi SSR"],
        description: "When Nishinoya or Asahi casts a skill, increases their Attack Technique and Defense Technique by 6/7/8/9/10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "KARASUNO's Sophomore",
        category: "stats",
        members: ["Chikara SR", "Nishinoya SSR", "Tanaka SSR"],
        description: { "Chikara SR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Nishinoya SSR": "Set +5/7/9/12/15, Set +1/2/3/4/5%", "Tanaka SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%" },
        activation: { type: "count", min: 3 }
    },
    {
        name: "Leaders Cut from the Same Cloth",
        category: "stats",
        members: ["Daichi SR", "Kuroo SSR"],
        description: { "Daichi SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Kuroo SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "The Guardian Deity",
        category: "stats",
        members: ["Nishinoya SSR", "Yaku SSR"],
        description: { "Nishinoya SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Yaku SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "\"Shield\" and \"Spear\"",
        category: "deployment",
        members: ["Tsukishima SR", "Tadashi R"],
        description: "Increases Tsukishima's Block stat by 6/7/8/9/10% and Tadashi's Serve stat by 6/7/8/9/10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "\"Guardian Deity\" and \"Ace\"",
        category: "deployment",
        members: ["Nishinoya SR", "Asahi SR"],
        description: "When Nishinoya or Asahi casts a skill, increases their Attack Technique by 6/7/8/9/10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "Teammates on the Court",
        category: "deployment",
        members: ["Hinata SR", "Kageyama SSR"],
        description: "When casting Quick Spike skills, increases this player's Awareness by 6/7/8/9/10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "KARASUNO's Pillar",
        category: "stats",
        members: ["Chikara R", "Daichi SR"],
        description: { "Chikara R": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Daichi SR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "KARASUNO's Wing Spiker",
        category: "stats",
        members: ["Asahi SR", "Tanaka SR", "Chikara R"],
        description: { "Asahi SR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Tanaka SR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Chikara R": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%" },
        activation: { type: "count", min: 3 }
    },
    {
        name: "\"Sun\" and \"Moon\"",
        category: "stats",
        members: ["Tsukishima SR", "Hinata SR"],
        description: { "Tsukishima SR": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%", "Hinata SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Formidable Opponent",
        category: "stats",
        members: ["Nishinoya SR", "Yaku SR"],
        description: { "Nishinoya SR": " Save +5/7/9/12/15, Save +1/2/3/4/5%", "Yaku SR": " Set +5/7/9/12/15, Set +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Bench Cheer",
        category: "stats",
        members: ["Hisashi R", "Kazuhito R"],
        description: { "Hisashi R": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Kazuhito R": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "KARASUNO's Sophomore",
        category: "deployment",
        members: ["Chikara R", "Nishinoya SR", "Tanaka SR"],
        description: "Increases Receive stat of back row players 6/7/8/9/10%",
        activation: { type: "count", min: 3 }
    },
    {
        name: "Building Team Chemistry",
        category: "stats",
        members: ["Tanaka SR", "Kageyama SSR"],
        description: { "Tanaka SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Kageyama SSR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "The Returning Trio",
        category: "stats",
        members: ["Hisashi R", "Chikara SR", "Kazuhito R"],
        description: { "Hisashi R": "Set +5/7/9/12/15, Set +1/2/3/4/5%", "Chikara SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Kazuhito R": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%" },
        activation: { type: "count", min: 3 }
    },

    /*AOBA JOHSAI*/
    {
        name: "The Wolf Pack",
        category: "deployment",
        members: ["Iwaizumi SSR", "Kentaro SSR"],
        description: "Increases Iwaizumi and Kentaro's Spike stat by 6/7/8/9/10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "Power of Trust",
        category: "stats",
        members: ["Kentaro SSR", "Oikawa UR"],
        description: { "Kentaro SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Oikawa UR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Perfect Chemistry",
        category: "deployment",
        members: ["Oikawa UR", "Iwaizumi SSR"],
        description: "When Oikawa performs a toss, Iwaizumi performs a Spike with 255% Attack power. Gains 2 stacks of [Attack Rhythm]. For each stack of [Attack Rhythm], all allies' Awareness increases by 1%. Max 10 stacks.",
        activation: { type: "count", min: 2 }
    },
    {
        name: "Blunt and Composed",
        category: "deployment",
        members: ["Kindaichi SR", "Kunimi SR"],
        description: "Increases Kindaichi's Quick stat by 6/7/8/9/10% and  Kunimi's Spike stat by 6/7/8/9/10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "A Bit Higher!",
        category: "stats",
        members: ["Oikawa UR", "Kindaichi SR"],
        description: { "Oikawa UR": "Set +5/7/9/12/15, Set +1/2/3/4/5%", "Kindaichi SR": "No buff" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Team Chemistry",
        category: "deployment",
        members: ["Oikawa SSR", "Iwaizumi SR"],
        description: "Increases Oikawa and Iwaizumi's Awareness by 6/7/8/9/10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "AOBA JOHSAI's Sophomore",
        category: "stats",
        members: ["Watari SR", "Yahaba SR", "Kentaro SSR"],
        description: { "Watari SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Yahaba SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Kentaro SSR": "No buff" },
        activation: { type: "count", min: 3 }
    },
    {
        name: "SEIJOH's Senior Year Pillars",
        category: "deployment",
        members: ["Matsukawa SR", "Hanamaki SR"],
        description: "Increases Matsukawa's Block stat by 6/67/8/9/10% and Hanamaki's Receive stat by 6/7/8/9/10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "The Wolf Pack",
        category: "deployment",
        members: ["Iwaizumi SR", "Kentaro SSR"],
        description: "Increases Iwaisumi and Kentaro's Awareness by 6/7/8/9/10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "Hidden Fire",
        category: "stats",
        members: ["Kentaro SSR", "Yahaba SR"],
        description: { "Kentaro SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Yahaba SR": "No buff" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Long-standing Rivals",
        category: "stats",
        members: ["Oikawa UR", "Ushijima UR"],
        description: { "Oikawa UR": "Set +5/7/9/12/15, Set +1/2/3/4/5%", "Ushijima UR": "No buff" },
        activation: { type: "count", min: 2 }
    },
    /*NEKOMA*/
    {
        name: "Reliable Senpai",
        category: "stats",
        members: ["Yaku SSR", "Kuroo UR", "Kai SR"],
        description: { "Yaku SSR": "No buff", "Kuroo UR": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%", "Kai SR": "No buff" },
        activation: { type: "count", min: 3 }
    },
    {
        name: "Reception Mentors",
        category: "deployment",
        members: ["Yaku SSR", "Lev SSR"],
        description: "increases Yaku Receive by 6/7/8/9/10% and Lev Quick by 6/7/8/9/10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "\"Brain\" and \"Control Tower\"",
        category: "deployment",
        members: ["Kenma SSR", "Kuroo UR"],
        description: "Kenma sets the ball, Kuroo performs a Quick Spike with 265/280/295/310/325% of Quick stat as power",
        activation: { type: "count", min: 2 }
    },
    {
        name: "The \"Enigmatic\" Teammate",
        category: "stats",
        members: ["Kenma SSR", "Lev SSR"],
        description: { "Kenma SSR": "No buff", "Lev SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "NEKOMA's Junior",
        category: "stats",
        members: ["Teshiro SR", "Inuoka SR", "Lev SSR"],
        description: { "Teshiro SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Inuoka SR": "No buff", "Lev SSR": "No Buff" },
        activation: { type: "count", min: 3 }
    },
    {
        name: "Grit and Competitive",
        category: "stats",
        members: ["Kenma SSR", "Yamamoto SR"],
        description: { "Kenma SSR": "Set +5/7/9/12/15, Set +1/2/3/4/5%", "Yamamoto SR": "No buff" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "NEKOMA's Wing Spiker",
        category: "deployment",
        members: ["Fukunaga SR", "Kai SR", "Yamamoto SR"],
        description: "Increases Receive and Spike stats of players present by 4/5/6/7/8%",
        activation: { type: "count", min: 3 }
    },
    {
        name: "One-on-One Training",
        category: "stats",
        members: ["Lev SSR", "Yaku SSR"],
        description: { "Lev SR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Yaku SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "\"Pivot\" and \"Control Tower\"",
        category: "deployment",
        members: ["Kenma SR", "Kuroo SSR"],
        description: "Increases Kenma's Set stat by 6/7/8/9/10% and Kuroo's Block Stat by 6/7/8/9/10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "\"Pivot\" and \"Defensive Pivot\"",
        category: "stats",
        members: ["Kenma SSR", "Yaku SR"],
        description: { "Kenma SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Yaku SSR": "Save +5/7/9/12/15, Save +1/2/3/4/5%", },
        activation: { type: "count", min: 2 }
    },
    //DATE KOGYO
    {
        name: "New Captain & Tall Rookie",
        category: "deployment",
        members: ["Kenji SSR", "Kanji SSR"],
        description: "Increases Block stat of front row players by 2/2.5/3/3.5/4%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "Surprising Friendship",
        category: "stats",
        members: ["Aone SSR", "Hinata SSR"],
        description: { "Aone SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Hinata SSR": "No buff" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "The Silent and the Snarky",
        category: "deployment",
        members: ["Aone SSR", "Kenji SSR"],
        description: "Aone and Kenji perform a Double block with 180/195/210/225/240% of Aone's Block stat as power;applies \"Enrage\" Debuff to opponent spiker (reduces Power/Quick stats by 10%)",
        activation: { type: "count", min: 2 }
    },
    {
        name: "DATE KOGYO's Setter",
        category: "stats",
        members: ["Kanji SSR", "Kaname SR"],
        description: { "Kanji SSR": "Set +5/7/9/12/15, Set +1/2/3/4/5%", "Kaname SR": "No buff" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "DATE KOGYO's Captains",
        category: "stats",
        members: ["Kenji SSR", "Kaname SR"],
        description: { "Kenji SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Kaname SR": "No buff" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "DATE KOGYO's Junior",
        category: "stats",
        members: ["Jingo R", "Sakunami R"],
        description: { "Jingo R": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%", "Sakunami R": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "DATE KOGYO's Senior",
        category: "deployment",
        members: ["Sasaya SSR", "Kaname SR", "Kamasaki SR"],
        description: "When casting Block skills, increases Team morale by 3/3/4/4/5",
        activation: { type: "count", min: 3 }
    },
    {
        name: "DATE KOGYO's Wing Spiker",
        category: "deployment",
        members: ["Yutaka SR", "Sasaya SSR"],
        description: "Increases Yutaka's Block stat by 2/2.5/3/3.5/4% and Takehito's Spike stat by 2/2.5/3/3.5/4%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "Simulated Junior Training Teammate",
        category: "stats",
        members: ["Tsukishima SR", "Kanji SR"],
        description: { "Tsukishima SR": "No buff", "Kanji SR": "Set +5/7/9/12/15, Set +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    //SHIRATORIZAWA
    {
        name: "Promising Senpai",
        category: "stats",
        members: ["Tendo SSR", "Goshiki SSR"],
        description: { "Tendo SSR": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%", "Goshiki SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Undisputed Aces",
        category: "stats",
        members: ["Ushijima UR", "Goshiki SSR"],
        description: { "Ushijima UR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Goshiki SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Undisputed Ace and Shadow Setter",
        category: "deployment",
        members: ["Ushijima UR", "Shirabu SSR"],
        description: " SHIRABU sets the ball, and USHIJIMA performs a Power Spike with 260/275/290/305/320% of Spike stat as power; for this Spike, USHIJIMA's Strength increases by 10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "Prediction VS System",
        category: "stats",
        members: ["Tendo SSR", "Tsukishima SSR"],
        description: { "Tendo SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Tsukishima SSR": "No buff" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Ushiwaka and Benkei",
        category: "stats",
        members: ["Ushijima UR", "Ohira SSR"],
        description: { "Ushijima UR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Ohira SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "SHIRATORIZAWA's Senior",
        category: "stats",
        members: ["Ohira SSR", "Tendo SSR", "Ushijima UR", "Semi SSR", "Yamagata SSR"],
        description: { "Ohira SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Tendo SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Ushijima UR": "No buff", "Semi SSR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Yamagata SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "count", min: 5 }
    },
    {
        name: "Contrasting Setters",
        category: "stats",
        members: ["Shirabu SSR", "Semi SSR"],
        description: { "Shirabu SSR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Semi SSR": "Set +5/7/9/12/15, Set +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Lifelong Best Friends",
        category: "deployment",
        members: ["Ushijima UR", "Tendo SSR"],
        description: "Increases Ushijima's Attack Technique by 3/3.5/4/4.5/5% and Tendo's Defense Technique by 3/3.5/4/4.5/5%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "SHIRATORIZAWA's Wing Spiker",
        category: "deployment",
        members: ["Goshoiki SSR", "Ohira SSR"],
        description: "Increases Spike stat of players on your side by 4/4.5/5/5.5/6%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "SHIRATORIZAWA's Sophomore",
        category: "stats",
        members: ["Shirabu SSR", "Taichi SR"],
        description: { "Shirabu SSR": "Set +5/7/9/12/15, Set +1/2/3/4/5%", "Taichi SR": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "SHIRATORIZAWA's Middke Blocker",
        category: "deployment",
        members: ["Tendo SSR", "Taichi SR"],
        description: "Increases Block stat of your side's front row players by 5/5.5/6/6.5/7%",
        activation: { type: "count", min: 2 }
    },
    //FUKURODANI
    {
        name: "The Moment you'll be hooked on volleyball",
        category: "stats",
        members: ["Bokuto UR", "Tsukishima SSR"],
        description: { "Bokuto UR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Tsukishima SSR": "No buff" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Tokyo Camp Training Partners",
        category: "stats",
        members: ["Tsukishima SSR", "Kuroo UR", "Bokuto UR", "Akaashi SSR"],
        description: { "Tsukishima SSR": "No buff", "Kuroo UR": "No buff", "Bokuto UR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Akaashi SSR": "Set +5/7/9/12/15, Set +1/2/3/4/5%" },
        activation: { type: "count", min: 4 }
    },
    {
        name: "Top Disciple",
        category: "stats",
        members: ["Bokuto UR", "Hinata SSR"],
        description: { "Bokuto UR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Hinata SSR": "No buff" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Fukurodani's Wing Spiker",
        category: "stats",
        members: ["Bokuto UR", "Sarukui SR"],
        description: { "Bokuto UR": "No buff", "Sarukui SR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Miracle Ace and Attentive Setter",
        category: "deployment",
        members: ["Bokuto UR", "Akaashi SSR"],
        description: "KOTARO BOKUTO exits the [Down Mode] state. KEIJI AKAASHI sets the ball, and BOKUTO performs a Power Spike with 265/280/295/310/325% of his Power Attack stat. For this Spike, BOKUTO’s Power Attack stat increases by 20%, and your Team Morale increases by 15.",
        activation: { type: "count", min: 2 }
    },
    {
        name: "FUKURODANI's Middle Blocker",
        category: "stats",
        members: ["Washio SSR", "Onaga R"],
        description: { "Washio SSR": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%", "Onaga R": "No buff" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Fukurodani 3rd Years",
        category: "stats",
        members: ["Komi SSR", "Konoha SSR", "Bokuto UR", "Sarukui SR", "Washio SSR"],
        description: { "Komi SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Konoha SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Bokuto UR": "No buff", "Sarukui SR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Washio SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "count", min: 5 }
    },
    //JOHZENJI
    {
        name: "The Value of the Foundation",
        category: "stats",
        members: ["Daichi SSR", "Terushima SSR"],
        description: { "Daichi SSR": "No buff", "Terushima SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "The High-Energy Duo",
        category: "stats",
        members: ["Terushima SSR", "Bobata R"],
        description: { "Terushima SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Bobata R": "No buff" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "JOHZENJI's Wing Spike",
        category: "stats",
        members: ["Terushima SSR", "Higashiyama SR"],
        description: { "Terushima SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Higashiyama SR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    //INARIZAKI
    {
        name: "Classmates",
        category: "stats",
        members: ["Osamu UR", "Suna SSR"],
        description: { "Osamu UR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Suna SSR": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Friends from Voleyball School",
        category: "stats",
        members: ["Osamu UR", "Atsumu UR", "Ojiro SSR"],
        description: { "Osamu UR": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%", "Atsumu UR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Ojiro SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%" },
        activation: { type: "count", min: 3 }
    },
    {
        name: "Strongest High School Twins",
        category: "deployment",
        members: ["Osamu UR", "Atsumu UR"],
        description: "Atsumu sets the ball, and Osamu performs a Twin Quick Spike - Reverse Rythm with 265/280/295/310/325% of his Quick stat(This spike CANNOT be blocked), Their Attack Technique increases by 15% lasting until either Atsumu or Osamu leaves the court.",
        activation: { type: "count", min: 2 }
    },
    {
        name: "INARIZAKI's Sophomore",
        category: "stats",
        members: ["Ginjima SSR", "Osamu UR", "Atsumu UR", "Suna SSR", "Kosaku R"],
        description: { "Ginjima SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Osamu UR": "Quick +5/7/9/12/15, Quick Spike +1/2/3/4/5%", "Atsumu UR": "No buff", "Suna SSR": "Quick +5/7/9/12/15, Quick Spike +1/2/3/4/5%", "Kosaku R": "No buff" },
        activation: { type: "count", min: 5 }
    },
    {
        name: "Captain and Cornerstone",
        category: "deployment",
        members: ["Osamu UR", "Atsumu UR", "Kita SSR"],
        description: "Increases Osamu Attack by 3/3.5/4/4.5/5% and kita base stats by 3/3.5/4/4.5/5%. At match start Atsumu gains 3 stack of 'Precision' each stack increases set stat by 2% up to 10 stacks. Kita gain 1 stack of 'Reliable Action' and each stack increases his Receive stat by 2% up to 3 stacks. Osamu first Spike in each match gives additionnal 12/15/18/21/24% of his Quick stat as bonus power.",
        activation: { type: "count", min: 3 }
    },
    {
        name: "INARIZAKI's Wing Spiker",
        category: "stats",
        members: ["Riseki R", "Ginjima SSR", "Kita SSR", "Ojira SSR", "Kosaku R"],
        description: { "Riseki R": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Ginjima SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Kita SSR": "Save +5/7/9/12/15, Save +1/2/3/4/5%", "Ojiro SSR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Kosaku R": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%" },
        activation: { type: "count", min: 5 }
    },
    {
        name: "INARIZAKI's Senior",
        category: "stats",
        members: ["Omimi SR", "Kita SSR", "Ojiro SSR", "Akagi SSR"],
        description: { "Omimi SR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Kita SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Ojiro SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Akagi SSR": "Save +5/7/9/12/15, Save +1/2/3/4/5%" },
        activation: { type: "count", min: 4 }
    },
    {
        name: "INARIZAKI's Middle Blocker",
        category: "stats",
        members: ["Omimi SR", "Suna SSR"],
        description: { "Omimi SR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Suna SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    //KAMOMEDAI
        {
        name: "Junior High Friends",
        category: "deployment",
        members: ["Hoshiumi UR", "Hirugami UR"],
        description: "Increases Hoshiumi Base Stats by 6/7/8/9/10% and the Block stat of your front row players by 6/7/8/9/10%. At the start if the match Hoshiumi gains 1 stack of 'All-Rounder', and Hirugami gains 1 stacks of 'Immovable Block'.",
        activation: { type: "count", min: 2 }
    },
        {
        name: "Little Giants",
        category: "stats",
        members: ["Hinata SSR", "Hoshiumi UR"],
        description: { "Hinata SSR": "No buff", "Hoshiumi UR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
];