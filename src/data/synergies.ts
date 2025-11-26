import { SynergyDefinition } from "../types";

export const synergies: SynergyDefinition[] = [
    /*schools*/
    {
        name: "Karasuno",
        category: "school",
        school: "Karasuno",
        description: "Increases Power Attack and Quick Attack stats of all players present by 10%",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Aoba Johsai",
        category: "school",
        school: "Aoba Johsai",
        description: "Increases Power Attack stats of all players present by 15%",
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
        description: { "Hinata SSR": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%", "Kenma SSR": "Set +5/7/9/12/15, Set +1/2/3/4/5%" },
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
        description: { "Lev SSR": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%", "Hinata SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
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
        description: { "Yamamoto SR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%", "Tanaka SSR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%" },
        activation: { type: "count", min: 2 }
    },
    {
        name: "Cannon & Iron Wall",
        category: "stats",
        members: ["Asahi SSR", "Aone SSR"],
        description: { "Asahi SSR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%", "Aone SSR": "No buff" },
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
        description: { "Chikara SR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%", "Nishinoya SSR": "Set +5/7/9/12/15, Set +1/2/3/4/5%", "Tanaka SSR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%" },
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
        description: "Increases Tsukishima\'s Block stat by 6/7/8/9/10% and Tadashi's Serve stat by 6/7/8/9/10%",
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
        description: { "Asahi SR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Tanaka SR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%", "Chikara R": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%" },
        activation: { type: "count", min: 3 }
    },
    {
        name: "\"Sun\" and \"Moon\"",
        category: "stats",
        members: ["Tsukishima SR", "Hinata SR"],
        description: { "Tsukishima SR": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%", "Hinata SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
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
        description: { "Hisashi R": "Set +5/7/9/12/15, Set +1/2/3/4/5%", "Chikara SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Kazuhito R": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%" },
        activation: { type: "count", min: 3 }
    },

    /*AOBA JOHSAI*/
    {
        name: "The Wolf Pack",
        category: "deployment",
        members: ["Iwaizumi SSR", "Kentaro SSR"],
        description: "Increases  Iwaizumi and Kentaro's Power Attack stat by 6/7/8/9/10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "Power of Trust",
        category: "stats",
        members: ["Kentaro SSR", "Oikawa UR"],
        description: { "Kentaro SSR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%", "Oikawa UR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
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
        description: "Increases Kindaichi's Quick Attack stat by 6/7/8/9/10% and  Kunimi's Power Attack stat by 6/7/8/9/10%",
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
        description: { "Oikawa UR": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%", "Ushijima UR": "No buff" },
        activation: { type: "count", min: 2 }
    },
    /*NEKOMA*/
    {
        name: "Reliable Senpai",
        category: "stats",
        members: ["Yaku SSR", "Kuroo UR", "Kai SR"],
        description: { "Yaku SSR": "No buff", "Kuroo UR": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%", "Kai SR": "No buff" },
        activation: { type: "count", min: 3 }
    },
    {
        name: "Reception Mentors",
        category: "deployment",
        members: ["Yaku SSR", "Lev SSR"],
        description: "increases Yaku Receive by 6/7/8/9/10% and Lev Quick Attack by 6/7/8/9/10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "\"Brain\" and \"Control Tower\"",
        category: "deployment",
        members: ["Kenma SSR", "Kuroo UR"],
        description: "Kenma sets the ball, Kuroo performs a Quick Spike with 265/280/295/310/325% of Quick Attack stat as power",
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
        members: ["fukunaga SR", "Kai SR", "Yamamoto SR"],
        description: "Increases Receive and Power Attack stats of players present by 4/5/6/7/8%",
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
        description: "Increases Kenma\'s Set stat by 6/7/8/9/10% and Kuroo's Block Stat by 6/7/8/9/10%",
        activation: { type: "count", min: 2 }
    },
    {
        name: "\"Pivot\" and \"Defensive Pivot\"",
        category: "stats",
        members: ["Kenma SSR", "Yaku SR"],
        description: { "Kenma SSR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%","Yaku SSR": "Save +5/7/9/12/15, Save +1/2/3/4/5%", },
        activation: { type: "count", min: 2 }
    },
];