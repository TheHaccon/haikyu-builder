import { SynergyDefinition } from "../types";

export const synergies: SynergyDefinition[] = [
    // --- KARASUNO ---
    {
        name: "Karasuno",
        category: "school",
        school: "Karasuno",
        description: "At the start of a rally, all Karasuno players gain +3/4/5/6/7% to their Main Parameter.",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Karasuno's Pillar",
        category: "deployment",
        members: ["Chikara SR", "Daichi SR"],
        description: "When achieving a PERFECT receive, increases Team Morale by 3/3/4/4/5",
        activation: { type: "all" }
    },
    {
        name: "Flexible Aces",
        category: "stats",
        members: ["Hinata SSR", "Lev SSR"],
        description: { "Hinata SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Lev SSR": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Worthy Rival",
        category: "stats",
        members: ["Hinata SSR", "Inuoka SR"],
        description: { "Hinata SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Inuoka SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Kiyoko's Knights",
        category: "deployment",
        members: ["Tanaka SSR", "Nishinoya SSR"],
        description: "When scoring, increases Team morale by 6/7/8/9/10",
        activation: { type: "all" }
    },
    {
        name: "karasuno Senior Year",
        category: "deployment",
        members: ["Sugawara SR", "Daichi SR", "Asahi SR"],
        description: "Reduces Stamina consumption of Spike skills by 10%; when performing Power Spikes, increases this player's Attack Technique by 6/7/8/9/10%",
        activation: { type: "all" }
    },
    {
        name: "\"Guardian Deity\" and \"Wing Spiker\"",
        category: "deployment",
        members: ["Nishinoya SSR", "Asahi SR"],
        description: "When Nishinoya or Asahi casts a skill, increases their Attack Technique and Defense Technique by 6/7/8/9/10%",
        activation: { type: "all" }
    },
    {
        name: "\"Shield\" and \"Spear\"",
        category: "stats",
        members: ["Tsukishima SSR", "Tadashi SR"],
        description: "Increases Tsukishima's Block stat by 6/7/8/9/10% and Tadashi's Serve stat by 6/7/8/9/10%",
        activation: { type: "all" }
    },
    {
        name: "TOMODACHI(Friends!)",
        category: "stats",
        members: ["Yamamoto SR", "Tanaka SSR"],
        description: { "Yamamoto SR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%", "Tanaka SSR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Cannon & Iron Wall",
        category: "stats",
        members: ["Asahi SSR", "Aone SSR"],
        description: { "Asahi SSR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%", "Aone SSR": "No buff" },
        activation: { type: "all" }
    },
    {
        name: "Karasuno's sophomore",
        category: "stats",
        members: ["Chikara SR", "Nishinoya SSR", "Tanaka SSR"],
        description: { "Chikara SR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%", "Nishinoya SSR": "Set +5/7/9/12/15, Set +1/2/3/4/5%", "Tanaka SSR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "\"Guardian Deity\" and \"Ace\"",
        category: "deployment",
        members: ["Nishinoya SSR", "Asahi SR"],
        description: "When Nishinoya or Asahi casts a skill, increases their Attack Technique by 6/7/8/9/10%",
        activation: { type: "all" }
    },
    {
        name: "Leaders Cut from the Same Cloth",
        category: "stats",
        members: ["Daichi SR", "Kuroo SSR"],
        description: { "Daichi SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Kuroo SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Surprising Friendship",
        category: "stats",
        members: ["Aone SSR", "Hinata SSR"],
        description: { "Aone SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Hinata SSR": "No buff" },
        activation: { type: "all" }
    },
    {
        name: "Karasuno's Wing Spiker",
        category: "stats",
        members: ["Tanaka SR", "Asahi SR", "Chikara SR"],
        description: { "Tanaka SR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%", "Asahi SR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Chikara SR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Teammates on the Court",
        category: "deployment",
        members: ["Hinata SSR", "Kageyama SSR"],
        description: "When casting Quick Spike skills, increases this player's Awareness by 6/7/8/9/10%",
        activation: { type: "all" }
    },
    {
        name: "Simulated Junior Training Teamate",
        category: "stats",
        members: ["Kanji SR", "Tsukishima SR"],
        description: { "Kanji SR": "Set +5/7/9/12/15, Set +1/2/3/4/5%", "Tsukishima SR": "No buff" },
        activation: { type: "all" }
    },
    {
        name: "Karasuno's Pillar(practice)",
        category: "stats",
        members: ["Chikara R", "Daichi SR"],
        description: { "Chikara R": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Daichi SR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "\"Shield\" and \"Spear\"(practice)",
        category: "deployment",
        members: ["Tsukishima SR", "Tadashi R"],
        description: "Increases Tsukishima's Block stat by 6/7/8/9/10% and Tadashi's Serve stat by 6/7/8/9/10%",
        activation: { type: "all" }
    },
    {
        name: "Formidable Opponent",
        category: "stats",
        members: ["Nishinoya SR", "Yaku SR"],
        description: { "Nishinoya SR": "Save +5/7/9/12/15, Save +1/2/3/4/5%", "Yaku SR": "Set +5/7/9/12/15, Set +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Bench cheer",
        category: "stats",
        members: ["Hisashi R", "Kazuhito R"],
        description: { "Hisashi R": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Kazuhito R": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "The Returning Trio",
        category: "stats",
        members: ["Hisashi R", "Kazuhito R", "Chikara SR"],
        description: { "Hisashi R": "Set +5/7/9/12/15, Set +1/2/3/4/5%", "Kazuhito R": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%", "Chikara SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "\"Sun\" and \"Moon\"",
        category: "stats",
        members: ["Tsukishima SR", "Hinata SR"],
        description: { "Tsukishima SR": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%", "Hinata SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Building Team Chemistry",
        category: "stats",
        members: ["Kageyama SSR", "Tanaka SR"],
        description: { "Kageyama SSR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Tanaka SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Karasuno's Sophomore(practice)",
        category: "deployment",
        members: ["Tanaka SR", "Nishinoya SR", "Chikara R"],
        description: "Increases Receive stat of back row players 6/7/8/9/10%",
        activation: { type: "all" }
    },
    {
        name: "Rival Friends",
        category: "stats",
        members: ["Hinata SSR", "Kenma SSR"],
        description: { "Hinata SSR": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%", "Kenma SSR": "Set +5/7/9/12/15, Set +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Behind the Smile",
        category: "stats",
        members: ["Daichi SSR", "Kuroo UR"],
        description: { "Daichi SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Kuroo UR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Master and Apprentice",
        category: "stats",
        members: ["Tsukishima SSR", "Kuroo UR"],
        description: { "Tsukishima SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Kuroo UR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Weird Duo",
        category: "deployment",
        members: ["Hinata SSR", "Kageyama SSR"],
        description: "Hinata performs a Quick Attack with 280/295/310/325/340% Speed. Awareness +30%, Power +(Awareness ×30/35/40/45/50%, max 60/70/80/90/100%). Cannot be blocked. Resets cooldown on scoring.",
        activation: { type: "all" }
    },
    {
        name: "The King and The Great King",
        category: "stats",
        members: ["Kageyama UR", "Oikawa UR"],
        description: { "Kageyama UR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Oikawa UR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Karasuno's Setters",
        category: "stats",
        members: ["Sugawara SR", "Kageyama SSR"],
        description: { "Sugawara SR": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%", "Kageyama SSR": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Karasuno's Failing Grades Group",
        category: "stats",
        members: ["Hinata SSR", "Kageyama UR", "Nishinoya SSR", "Tanaka SSR"],
        description: { "Hinata SSR": "", "Kageyama UR": "", "Nishinoya SSR": "", "Tanaka SSR": "Strong Attack +5/7/9/12/15, Strong Attack +1/2/3/4/5%" },
        activation: { type: "count", min: 4 }
    },
    {
        name: "Team's Guardians",
        category: "stats",
        members: ["Nishinoya SSR", "Yaku SSR"],
        description: { "Nishinoya SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Yaku SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Similar Builds",
        category: "stats",
        members: ["Hinata SP", "Hoshiumi UR"],
        description: { "Hinata SP": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%", "Hoshiumi UR": "Strong Attack +5/7/9/12/15, Strong Attack +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Weird Duo (Hanami)",
        category: "deployment",
        members: ["Hinata SP", "Kageyama UR"],
        description: "When an ally uses a Receive skill, consumes 1 [Never Give Up] stack to increase their Reaction by 6%. If Hinata (Hanami) uses Receive, his Reaction increases by an additional 9% and Kageyama gains 1 stack of [Never Give Up]. Hinata (Hanami)'s Special also grants Kageyama 1 stack of [Never Give Up].",
        activation: { type: "all" }
    },
    {
        name: "Hanami",
        category: "deployment",
        members: ["Hinata SP", "Kenma SP"],
        description: "At match start, Kenma (Hanami) gains 3 [Gapless Defense] stacks and increases the cap to 13; each stack increases his Awareness by 0.8%. When Hinata (Hanami) makes a Nice Play, his Quick Attack increases by 1%.",
        activation: { type: "all" }
    },
    {
        name: "Strange Friendship",
        category: "stats",
        members: ["Hinata SP", "Aone SP"],
        description: { "Hinata SP": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%", "Aone SP": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Number One Disciple SP",
        category: "stats",
        members: ["Hinata SP", "Bokuto SP"],
        description: { "Hinata SP": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%", "Bokuto SP": "Strong Attack +5/7/9/12/15, Strong Attack +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Karasuno's Red Mark Squad (Hanami ver.)",
        category: "stats",
        members: ["Hinata SP", "Nishinoya SP", "Tanaka SSR", "Kageyama UR"],
        description: { "Hinata SP": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Nishinoya SP": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%", "Tanaka SSR": "", "Kageyama UR": "" },
        activation: { type: "count", min: 4 }
    },
    {
        name: "Protectors of Kiyoko",
        category: "stats",
        members: ["Nishinoya SP", "Tanaka SSR"],
        description: { "Nishinoya SP": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Tanaka SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "After School",
        category: "deployment",
        members: ["Nishinoya SP", "Sugawara SP"],
        description: "Increases Nishinoya (After School)'s Reaction by 5%; if Sugawara (After School) is on the court and Nishinoya (After School)'s Stamina is below 80, his Reaction increases by an additional 5%",
        activation: { type: "all" }
    },
    {
        name: "Karasuno Geniuses",
        category: "deployment",
        members: ["Nishinoya SP", "Kageyama UR"],
        description: "Increases Nishinoya (After School)'s Receive by 5% and Reaction by 5%. When Nishinoya (After School) uses his Ultimate, Kageyama gains 1 stack of [Hates to Lose]. If this Ultimate is a Nice Play, then after the play, the first ally Spike (Power/Quick) increases its power by 20% for the spiker.",
        activation: { type: "all" }
    },
    {
        name: "Team's Guardians (After School)",
        category: "stats",
        members: ["Nishinoya SP", "Yaku SSR"],
        description: { "Nishinoya SP": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Yaku SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Sun vs Moon",
        category: "deployment",
        members: ["Hinata SP", "Tsukishima SP"],
        description: "When allies perform a Toss, increases their Awareness by 10% until the ball crosses the net twice. If Hinata (Hanami)'s Quick Attack results in a Nice Play, the cooldown of [High Jump] is reduced by 2 net crossings. Tsukishima (Fireworks) gains Awareness equal to 50% of Hinata (Hanami)'s Awareness, up to 50%. Effect lasts until the ball crosses the net 4 times.",
        activation: { type: "all" }
    },
    {
        name: "Karasuno 3rd Years",
        category: "stats",
        members: ["Asahi SSR", "Daichi SSR", "Sugawara SP"],
        description: { "Asahi SSR": "Power +5/7/9/12/15, Power +1/2/3/4/5%", "Daichi SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Sugawara SP": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Karasuno's Setters (SP)",
        category: "stats",
        members: ["Sugawara SP", "Kageyama UR"],
        description: { "Sugawara SP": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%", "Kageyama UR": "" },
        activation: { type: "all" }
    },
    {
        name: "The Moment They Fell for Volleyball",
        category: "stats",
        members: ["Bokuto SP", "Tsukishima SP"],
        description: { "Bokuto SP": "Spikes +5/7/9/12/15, Spikes +1/2/3/4/5%", "Tsukishima SP": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Fireworks Tournament",
        category: "deployment",
        members: ["Kuroo SP", "Tsukishima SP"],
        description: "Allies' main stats +6%. After each rally, inflicts [Anger] on enemy front row (-10% Power/Speed) for 8 net passes. If already [Anger]ed, applies [Tantrum] instead (-20% Power/Speed, cannot be cleansed).",
        activation: { type: "all" }
    },

    // --- AOBA JOHSAI ---
    {
        name: "Aoba Johsai",
        category: "school",
        school: "Aoba Johsai",
        description: "At the start of a rally, all Aoba Johsai players gain +3/4/5/6/7% to their Main Parameter.",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Aoba Johsai's Sophomore",
        category: "stats",
        members: ["Watari SR", "Yahaba SR", "Kentaro SSR"],
        description: { "Watari SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Yahaba SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Kentaro SSR": "No buff" },
        activation: { type: "all" }
    },
    {
        name: "Blunt and Composed",
        category: "deployment",
        members: ["Kindaichi SR", "Kunimi SR"],
        description: "Increases Kindaichi's Quick Attack stat by 6/7/8/9/10% and Kunimi's Power Attack stat by 6/7/8/9/10%",
        activation: { type: "all" }
    },
    {
        name: "The Wolf Pack",
        category: "deployment",
        members: ["Iwaizumi SR", "Kentaro SSR"],
        description: "Increases Iwaizumi and Kentaro's Power Attack stat by 6/7/8/9/10%",
        activation: { type: "all" }
    },
    {
        name: "Hidden Fire",
        category: "stats",
        members: ["Kentaro SSR", "Yahaba SR"],
        description: { "Kentaro SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Yahaba SR": "No buff" },
        activation: { type: "all" }
    },
    {
        name: "Seijoh's Senior Year Pillars",
        category: "deployment",
        members: ["Matsukawa SR", "Hanamaki SR"],
        description: "Increases Matsukawa's Block stat by 6/67/8/9/10% and Hanamaki's Receive stat by 6/7/8/9/10%",
        activation: { type: "all" }
    },
    {
        name: "The Wolf Pack(Practice)",
        category: "deployment",
        members: ["Iwaizumi SR", "Kentaro SR"],
        description: "Increases Iwaizumi and Kentaro's Awareness by 6/7/8/9/10%",
        activation: { type: "all" }
    },
    {
        name: "Team Chemistry",
        category: "deployment",
        members: ["Oikawa SSR", "Iwaizumi SR"],
        description: "Increases Oikawa and Iwaizumi's Awareness by 6/7/8/9/10%",
        activation: { type: "all" }
    },
    {
        name: "To Greater Heights",
        category: "stats",
        members: ["Kindaichi SR", "Oikawa UR"],
        description: { "Kindaichi SR": "", "Oikawa UR": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Breath of Aoba",
        category: "deployment",
        members: ["Oikawa UR", "Iwaizumi SSR"],
        description: "When Oikawa performs a toss, Iwaizumi performs a Spike with 255% Attack power. Gains 2 stacks of [Attack Rhythm]. For each stack of [Attack Rhythm], all allies' Awareness increases by 1%. Max 10 stacks.",
        activation: { type: "all" }
    },
    {
        name: "Merciless Trust",
        category: "stats",
        members: ["Oikawa UR", "Kentaro SSR"],
        description: { "Oikawa UR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Kentaro SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Merciless Trust(SP)",
        category: "stats",
        members: ["Oikawa SP", "Kentaro SSR"],
        description: { "Oikawa SP": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Kentaro SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Fated Rivals",
        category: "stats",
        members: ["Oikawa UR", "Ushijima UR"],
        description: { "Oikawa UR": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%", "Ushijima UR": "" },
        activation: { type: "all" }
    },
    {
        name: "Calm and honest",
        category: "stats",
        members: ["Kunimi SP", "Kindaichi SR"],
        description: { "Kunimi SP": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Kindaichi SR": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Toward Greater Heights",
        category: "stats",
        members: ["Oikawa SP", "Kindaichi SR"],
        description: { "Oikawa SP": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Kindaichi SR": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "\"King\" and \"Great King\"",
        category: "deployment",
        members: ["Oikawa SP", "Kageyama UR"],
        description: "When Kageyama and Oikawa (Cultural Festival) compete for serve control, the one who activates their serve skill first wins the duel. If Oikawa (Cultural Festival) wins, Kageyama gains the [Motivated] effect. This effect lasts for 1 set. If Kageyama wins, then each time Oikawa (Cultural Festival) touches the ball, Kageyama gains 1 stack of the [Hates to Lose] effect. Additionally, when Oikawa (Cultural Festival) activates his skill, Kageyama gains 1 more stack of the [Hates to Lose] effect.",
        activation: { type: "all" }
    },
    {
        name: "Rivals by Fate",
        category: "deployment",
        members: ["Oikawa SP", "Ushijima SP"],
        description: "When Ushijima Wakatoshi (Culture Festival) has the [Unleashed] effect, Oikawa Tōru (Culture Festival)’s [Toss] and [Serve] increase by 6/7/8/9/10%. When Oikawa (Culture Festival) performs a toss and Ushijima (Culture Festival) performs a spike, they gain 1 stack of [Attack Rhythm]. Each stack of [Attack Rhythm] increases all allies’ [Awareness] on the same court by 1%. Up to 10 stacks.",
        activation: { type: "all" }
    },
    {
        name: "Culture Festival",
        category: "deployment",
        members: ["Oikawa SP", "Ushijima SP", "Iwaizumi SP"],
        description: "When a member with the [Unleashed] effect touches the ball, Oikawa Tōru (Culture Festival) and all members with [Unleashed] recover 2 stamina. At the start of a rally, for each [Culture Festival] member on your court, all allies gain +2/2.5/3/3.5/4% [Power] and [Mental]. Maximum bonus: +12/15/18/21/24%.",
        activation: { type: "all" }
    },
    {
        name: "In Perfect Sync",
        category: "deployment",
        members: ["Oikawa SP", "Iwaizumi SP"],
        description: "When Oikawa Tōru (Culture Festival) performs a toss and Iwaizumi Hajime (Culture Festival) spikes, the spike deals damage with 280/300/320/340/360% power. Iwaizumi (Culture Festival) gains the [Unleashed] effect. This effect lasts for one set.",
        activation: { type: "all" }
    },
    {
        name: "Wolf Society",
        category: "stats",
        members: ["Iwaizumi SP", "Kentaro SSR"],
        description: { "Iwaizumi SP": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Kentaro SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Aoba Johsai Third Years",
        category: "stats",
        members: ["Iwaizumi SP", "Oikawa SP", "Matsukawa SR", "Hanamaki SR"],
        description: { "Oikawa SP": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%", "Iwaizumi SP": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Matsukawa SR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Hanamaki SR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Aoba Johsai Wing Spikers",
        category: "stats",
        members: ["Iwaizumi SP", "Hanamaki SR", "Kunimi SP", "Kentaro SSR"],
        description: { "Iwaizumi SP": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Hanamaki SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Kunimi SP": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Kentaro SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "all" }
    },

    // --- NEKOMA ---
    {
        name: "Nekoma",
        category: "school",
        school: "Nekoma",
        description: "At the start of a rally, all Nekoma players gain +3/4/5/6/7% to their Main Parameter.",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Nekoma's Junior",
        category: "stats",
        members: ["Teshiro SR", "Inuoka SR", "Lev SSR"],
        description: { "Teshiro SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Inuoka SR": "No buff", "Lev SSR": "No Buff" },
        activation: { type: "all" }
    },
    {
        name: "\"Brain\" and \"Control Tower\"",
        category: "deployment",
        members: ["Kenma SSR", "Kuroo SSR"],
        description: "Kenma sets the ball, Kuroo performs a Quick Spike with 265/280/295/310/325% of Quick Attack stat as power",
        activation: { type: "all" }
    },
    {
        name: "Nekoma's Wing Spiker",
        category: "deployment",
        members: ["Fukunaga SR", "Kai SR", "Yamamoto SR"],
        description: "Increases Receive and Power Attack stats of players present by 4/5/6/7/8%",
        activation: { type: "all" }
    },
    {
        name: "Grit and Competitive",
        category: "stats",
        members: ["Yamamoto SR", "Kenma SSR"],
        description: { "Yamamoto SR": "No buff", "Kenma SSR": "Set +5/7/9/12/15, Set +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "One-on-One Training",
        category: "stats",
        members: ["Lev SR", "Yaku SR"],
        description: { "Lev SR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Yaku SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "The \"Enigmatic\" Teammate",
        category: "stats",
        members: ["Lev SSR", "Kenma SSR"],
        description: { "Lev SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Kenma SSR": "No buff" },
        activation: { type: "all" }
    },
    {
        name: "\"Pivot\" and \"Defensive Pivot\"",
        category: "stats",
        members: ["Yaku SR", "Kenma SSR"],
        description: { "Yaku SR": "Save +5/7/9/12/15, Save +1/2/3/4/5%", "Kenma SSR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "\"Pivot\" and \"Control Tower\"",
        category: "deployment",
        members: ["Kenma SSR", "Kuroo SSR"],
        description: "Increases Kenma's Set stat by 6/7/8/9/10% and Kuroo's Block Stat by 6/7/8/9/10%",
        activation: { type: "all" }
    },
    {
        name: "Reliable Seniors",
        category: "stats",
        members: ["Kuroo UR", "Yaku SSR", "Kai SR"],
        description: { "Kuroo UR": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%", "Yaku SSR": "", "Kai SR": "" },
        activation: { type: "all" }
    },
    {
        name: "Protective Guidance",
        category: "deployment",
        members: ["Yaku SSR", "Lev SSR"],
        description: "increases Yaku receive by 6% and Lev Quick Attack by 6%",
        activation: { type: "all" }
    },
    {
        name: "Perseverance and Tenacity",
        category: "stats",
        members: ["Kenma SP", "Yamamoto SR"],
        description: { "Kenma SP": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%", "Yamamoto SR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "all" }
    },

    // --- DATE KOGYO ---
    {
        name: "Date Kogyo",
        category: "school",
        school: "Date Kogyo",
        description: "At the start of a rally, all Date Kogyo players gain +3/4/5/6/7% to their Main Parameter.",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Date Kogyo's Captains",
        category: "stats",
        members: ["Kaname SR", "Kenji SSR"],
        description: { "Kaname SR": "No buff", "Kenji SSR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "The Silent and the Snarky",
        category: "deployment",
        members: ["Aone SSR", "Kenji SSR"],
        description: "Aone and Kenji perform a Double block with 180/195/210/225/240% of Aone's Block stat as power; applies \"Enrage\" Debuff to opponent spiker (reduces Power/Quick Attack stats by 10%)",
        activation: { type: "all" }
    },
    {
        name: "New Captain & Tall Rookie",
        category: "deployment",
        members: ["Kenji SSR", "Kanji SR"],
        description: "Increases Block stat of front row players by 2/2.5/3/3.5/4%",
        activation: { type: "all" }
    },
    {
        name: "Date Kogyo's Wing Spiker",
        category: "deployment",
        members: ["Yutaka Obara R", "Sasaya SR"],
        description: "Increases Yutaka's Block stat by 2/2.5/3/3.5/4% and Takehito's Power Attack stat by 2/2.5/3/3.5/4%",
        activation: { type: "all" }
    },
    {
        name: "Date Kogyo's Setter",
        category: "stats",
        members: ["Kaname SR", "Kanji SSR"],
        description: { "Kaname SR": "No buff", "Kanji SSR": "Set +5/7/9/12/15, Set +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Date Kogyo's Junior",
        category: "stats",
        members: ["Jingo R", "Sakunami R"],
        description: { "Jingo R": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Sakunami R": "Quick Attack +5/7/9/12/15, Quick Attack stat by 6/7/8/9/10%" },
        activation: { type: "all" }
    },
    {
        name: "Date Kogyo's Senior",
        category: "deployment",
        members: ["Sasaya SR", "Kaname SR", "Kamasaki R"],
        description: "When casting Block skills, increases Team morale by 3/3/4/4/5",
        activation: { type: "all" }
    },
    {
        name: "Silence and Sarcasm",
        category: "stats",
        members: ["Aone SP", "Kenji SSR"],
        description: { "Aone SP": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Kenji SSR": "" },
        activation: { type: "all" }
    },
    {
        name: "Beach",
        category: "deployment",
        members: ["Aone SP", "Kenji SSR", "Kanji SSR"],
        description: "While allies are in Team Spirit Awakening, during a 2/3-man block, participating members' [Reaction] +6%. Effect lasts until the ball crosses the net 2 times. At rally start, allies' Team Spirit +20.",
        activation: { type: "all" }
    },
    {
        name: "Cannon and Iron Wall",
        category: "stats",
        members: ["Aone SP", "Asahi SSR"],
        description: { "Aone SP": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Asahi SSR": "" },
        activation: { type: "all" }
    },
    {
        name: "Sports Festival",
        category: "deployment",
        members: ["Kanji SP", "Kunimi SP"],
        description: "When an ally member touches the ball, consume 1 Stamina and increase that member’s main stats by 3%/3.5%/4%/4.5%/5% for 2 net crossings. If that ball touch is a block, that member’s Block increases by an additional 5% for 2 net crossings.",
        activation: { type: "all" }
    },
    {
        name: "Date Tech’s Setter",
        category: "stats",
        members: ["Kanji SP", "Kaname SR"],
        description: { "Kanji SP": "Set +5/7/9/12/15, Set +1/2/3/4/5%", "Kaname SR": "Set +5/7/9/12/15, Set +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Training Camp Teammates - Youth Selection",
        category: "deployment",
        members: ["Kanji SP", "Tsukishima SP"],
        description: "Ally members on the court with a block skill gain +6%/+7%/+8%/+9%/+10% Block. The cooldown of <Block System> is reduced by 2 net crossings. When an ally member activates a serve skill, inflict Enrage debuff on the opponent’s back row (Power Attack / Quick Attack –10%) for 8 net crossings.",
        activation: { type: "all" }
    },
    {
        name: "The Big Rookie and the New Captain",
        category: "stats",
        members: ["Kanji SP", "Kenji SSR"],
        description: { "Kanji SP": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Kenji SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "The New “Iron Wall”",
        category: "deployment",
        members: ["Kanji SP", "Kenji SSR", "Aone SP"],
        description: "When Kanji is on the court, if at least 2 members included in the Bond Skill are present, the Bond Skill becomes active. When allies perform a 2- or 3-man block, front-row allies’ Defense Technique increases by 3%/4%/5%/6%/7% for 1 rally. When an ally activates a serve skill, the serve will not fail. During rallies where an ally activates a serve skill, if allies perform a 2- or 3-man block, gain 1 stack of [Create Iron Wall].",
        activation: { type: "all" }
    },

    // --- SHIRATORIZAWA ---
    {
        name: "Shiratorizawa",
        category: "school",
        school: "Shiratorizawa",
        description: "At the start of a rally, all Shiratorizawa players gain +3/4/5/6/7% to their Main Parameter.",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Lifelong Best Friends",
        category: "deployment",
        members: ["Ushijima UR", "Tendo SSR"],
        description: "Increases Ushijima's Attack Technique by 3/3.5/4/4.5/5% and Tendo's Defense Technique by 3/3.5/4/4.5/5%",
        activation: { type: "all" }
    },
    {
        name: "Promising Senpai",
        category: "stats",
        members: ["Tendo SSR", "Goshiki SSR"],
        description: { "Tendo SSR": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%", "Goshiki SSR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Undisputed Aces",
        category: "stats",
        members: ["Goshiki SSR", "Ushijima UR"],
        description: { "Goshiki SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Ushijima UR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Shiratorizawa's Middke Blocker",
        category: "deployment",
        members: ["Taichi SR", "Tendo SSR"],
        description: "Increases Block stat of your side's front row players by 5/5.5/6/6.5/7%",
        activation: { type: "all" }
    },
    {
        name: "Prediction VS System",
        category: "stats",
        members: ["Tsukishima SSR", "Tendo SSR"],
        description: { "Tsukishima SSR": "No buff", "Tendo SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Ushiwaka and Benkei",
        category: "stats",
        members: ["Ushijima UR", "Ohira SSR"],
        description: { "Ushijima UR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Ohira SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "The Absolute King and the Steadfast Setter",
        category: "deployment",
        members: ["Shirabu SSR", "Ushijima UR"],
        description: "When Shirabu sets, Ushijima performs a [Spike] with 260% of [Spike] power. Ushijima’s [Power] increases by 10% for this spike.",
        activation: { type: "all" }
    },
    {
        name: "The Absolute King VS the Freak Duo",
        category: "stats",
        members: ["Ushijima UR", "Hinata SSR", "Kageyama UR"],
        description: { "Ushijima UR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Hinata SSR": "", "Kageyama UR": "" },
        activation: { type: "all" }
    },
    {
        name: "Shiratorizawa 2nd Years",
        category: "stats",
        members: ["Shirabu SSR", "Taichi SR"],
        description: { "Shirabu SSR": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%", "Taichi SR": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Shiratorizawa 3rd Years",
        category: "stats",
        members: ["Ushijima UR", "Yamagata SSR", "Ohira SSR", "Semi SSR", "Tendo SSR"],
        description: { "Ushijima UR": "", "Yamagata SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Ohira SSR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Semi SSR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Tendo SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Setters of Different Types",
        category: "stats",
        members: ["Shirabu SSR", "Semi SSR"],
        description: { "Shirabu SSR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Semi SSR": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Shiratorizawa's WS",
        category: "deployment",
        members: ["Ohira SSR", "Goshiki SSR"],
        description: "Allies’ [Spike] increases by 4%",
        activation: { type: "all" }
    },
    {
        name: "From the Great Ace to the Next Ace",
        category: "stats",
        members: ["Ushijima SP", "Goshiki SSR"],
        description: { "Ushijima SP": "Power +5/7/9/12/15, Power +1/2/3/4/5%", "Goshiki SSR": "Power +5/7/9/12/15, Power +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Ushiwaka and Benkei SP",
        category: "stats",
        members: ["Ushijima SP", "Ohira SSR"],
        description: { "Ushijima SP": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Ohira SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "The Absolute King and the Steadfast Setter SP",
        category: "stats",
        members: ["Ushijima SP", "Shirabu SSR"],
        description: { "Ushijima SP": "Power +5/7/9/12/15, Power +1/2/3/4/5%", "Shirabu SSR": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "The Absolute King VS the Freak Duo SP",
        category: "stats",
        members: ["Ushijima SP", "Hinata SP", "Kageyama UR"],
        description: { "Ushijima SP": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Hinata SP": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%", "Kageyama UR": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Guess vs System",
        category: "stats",
        members: ["Tsukishima SP", "Tendo SP"],
        description: { "Tsukishima SP": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%", "Tendo SP": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Lifelong Best Friends SP",
        category: "deployment",
        members: ["Tendo SP", "Ushijima SP"],
        description: "When Ushijima receives a debuff, Tendo gains Block +4% and Speed ATK +4%. (Maximum boost: 12%) If Tendo successfully performs a Nice Play with his Block, then Ushijima’s Spike Power increases by [Power] 6/7/8/9/10%. This effect lasts for 1 rally.",
        activation: { type: "all" }
    },
    {
        name: "Expectations of a senior",
        category: "stats",
        members: ["Tendo SP", "Goshiki SSR"],
        description: { "Tendo SP": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%", "Goshiki SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Shiratorizawa's Middle Blocker SP",
        category: "stats",
        members: ["Tendo SP", "Taichi SR"],
        description: { "Tendo SP": "Quick +5/7/9/12/15, Quick +1/2/3/4/5%", "Taichi SR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Shiratorizawa 3rd Years SP",
        category: "stats",
        members: ["Ushijima SP", "Semi SSR", "Tendo SP", "Ohira SSR", "Yamagata SSR"],
        description: { "Ushijima SP": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Semi SSR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Tendo SP": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Ohira SSR": "Power +5/7/9/12/15, Power +1/2/3/4/5%", "Yamagata SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "all" }
    },

    // --- FUKURODANI ---
    {
        name: "Fukurodani",
        category: "school",
        school: "Fukurodani",
        description: "At the start of a rally, all Fukurodani players gain +3/4/5/6/7% to their Main Parameter.",
        activation: { type: "count", min: 4 }
    },
    {
        name: "The Moment They Fell in Love with Volleyball",
        category: "stats",
        members: ["Bokuto UR", "Tsukishima SSR"],
        description: { "Bokuto UR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Tsukishima SSR": "" },
        activation: { type: "all" }
    },
    {
        name: "Tokyo Training Camp Self-Practice Buddies",
        category: "stats",
        members: ["Bokuto UR", "Akaashi SSR", "Kuroo UR", "Tsukishima SSR"],
        description: { "Bokuto UR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Akaashi SSR": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%", "Kuroo UR": "", "Tsukishima SSR": "" },
        activation: { type: "all" }
    },
    {
        name: "Miracle Ace and the Stubborn Setter",
        category: "deployment",
        members: ["Bokuto UR", "Akaashi SSR"],
        description: "Bokuto loses [Slump Mode]. Akaashi sets, and Bokuto performs a [Spike] with 265% [Spike] power. For this spike, Bokuto’s [Spike] increases by 20%, and all allies’ [Morale] increases by 15.",
        activation: { type: "all" }
    },
    {
        name: "Number One Disciple",
        category: "stats",
        members: ["Bokuto UR", "Hinata SSR"],
        description: { "Bokuto UR": "Spike +5/7/9/12/15, Spike +1/2/3/4/5%", "Hinata SSR": "" },
        activation: { type: "all" }
    },
    {
        name: "Fukurodani WS",
        category: "stats",
        members: ["Bokuto UR", "Sarukui SR"],
        description: { "Bokuto UR": "", "Sarukui SR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Fukurodani MBs",
        category: "stats",
        members: ["Washio SSR", "Onaga R"],
        description: { "Washio SSR": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%", "Onaga R": "" },
        activation: { type: "all" }
    },
    {
        name: "Fukurodani 3rd Years",
        category: "stats",
        members: ["Bokuto UR", "Komi SSR", "Konoha SSR", "Sarukui SR", "Washio SSR"],
        description: { "Bokuto UR": "", "Komi SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Konoha SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Sarukui SR": "Power +5/7/9/12/15, Power +1/2/3/4/5%", "Washio SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Kizuna Skills",
        category: "deployment",
        members: ["Bokuto SP", "Akaashi SP"],
        description: "Akaashi (Beach)'s [Toss] +6%. While an ally has Team Spirit activated, Bokuto (Beach)'s [Power] +18% and Akaashi (Beach)'s [Toss] gains an additional +5%.",
        activation: { type: "all" }
    },
    {
        name: "Miracle Ace & Considerate Setter",
        category: "deployment",
        members: ["Bokuto SP", "Akaashi SP"],
        description: "Akaashi (Beach) Toss +6%. While teammates are in Team Spirit mode, Bokuto (Beach) gets +18% Power. Akaashi (Beach) Toss +5% more during this time.",
        activation: { type: "all" }
    },
    {
        name: "Tokyo Training Camp Buddies",
        category: "stats",
        members: ["Bokuto SP", "Akaashi SP", "Tsukishima SP", "Kuroo SP"],
        description: { "Bokuto SP": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Akaashi SP": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%", "Tsukishima SP": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Kuroo SP": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },

    // --- JOZENJI ---
    {
        name: "Jozenji",
        category: "school",
        school: "Jozenji",
        description: "At the start of a rally, all Jozenji players gain +3/4/5/6/7% to their Main Parameter.",
        activation: { type: "count", min: 4 }
    },
    {
        name: "The Value of the 'Stage'",
        category: "stats",
        members: ["Terushima SSR", "Daichi SSR"],
        description: { "Terushima SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Daichi SSR": "" },
        activation: { type: "all" }
    },
    {
        name: "Two High-Energy Guys",
        category: "stats",
        members: ["Bobata R", "Terushima SSR"],
        description: { "Bobata R": "", "Terushima SSR": "Attack +5/7/9/12/15, Attack +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Jouzenji's WS",
        category: "stats",
        members: ["Higashiyama SR", "Terushima SSR"],
        description: { "Higashiyama SR": "Attack +5/7/9/12/15, Attack +1/2/3/4/5%", "Terushima SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%" },
        activation: { type: "all" }
    },

    // --- INARIZAKI ---
    {
        name: "Inarizaki",
        category: "school",
        school: "Inarizaki",
        description: "At the start of a rally, all Inarizaki players gain +3/4/5/6/7% to their Main Parameter.",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Head and Core",
        category: "deployment",
        members: ["Kita SSR", "Atsumu UR", "Osamu UR"],
        description: "Atsumu: Attack Technique +3%, gains 3 stacks of [Donpishari] (Toss +2% per stack, max 10). Kita: Main Parameter +3%, gains 1 stack of [Reliable Action] (Receive +2% per stack, max 3).",
        activation: { type: "all" }
    },
    {
        name: "Youth Camp Setters",
        category: "stats",
        members: ["Kageyama UR", "Atsumu UR"],
        description: { "Kageyama UR": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%", "Atsumu UR": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Strongest High School Twins",
        category: "deployment",
        members: ["Atsumu UR", "Osamu UR"],
        description: "Atsumu tosses to Osamu who performs a minus tempo Twin Quick with [Quick] ×265% power, and Osamu’s Attack Technique increases by 15% while either twin is on court; cannot be blocked",
        activation: { type: "all" }
    },
    {
        name: "Classmates",
        category: "stats",
        members: ["Suna SSR", "Osamu UR"],
        description: { "Suna SSR": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%", "Osamu UR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Friends from Volleyball Class",
        category: "stats",
        members: ["Atsumu UR", "Osamu UR", "Ojiro SSR"],
        description: { "Atsumu UR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Osamu UR": "Quick Attack +5/7/9/12/15, Quick Attack +1/2/3/4/5%", "Ojiro SSR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Inarizaki's Middle Blockers",
        category: "stats",
        members: ["Suna SSR", "Omimi SR"],
        description: { "Suna SSR": "Block +5/7/9/12/15, Block +1/2/3/4/5%", "Omimi SR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Third Year from Inarizaki",
        category: "stats",
        members: ["Kita SSR", "Ojiro SSR", "Akagi SSR", "Omimi SR"],
        description: { "Kita SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Ojiro SSR": "Power Attack +5/7/9/12/15, Power Attack +1/2/3/4/5%", "Akagi SSR": "Cover +5/7/9/12/15, Cover +1/2/3/4/5%", "Omimi SR": "Block +5/7/9/12/15, Block +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Inarizaki 2nd Years",
        category: "stats",
        members: ["Suna SSR", "Ginjima SSR", "Osamu UR", "Atsumu UR", "Kosaku R"],
        description: { "Suna SSR": "Quick Spike +5/7/9/12/15, Quick Spike +1/2/3/4/5%", "Ginjima SSR": "Power Spike +5/7/9/12/15, Power Spike +1/2/3/4/5%", "Osamu UR": "Quick Spike +5/7/9/12/15, Quick Spike +1/2/3/4/5%", "Atsumu UR": "", "Kosaku R": "" },
        activation: { type: "all" }
    },
    {
        name: "Japan Youth Training Camp Teammates",
        category: "stats",
        members: ["Kageyama UR", "Atsumu UR", "Sakusa UR", "Komori UR", "Hoshiumi UR"],
        description: { "Kageyama UR": "", "Atsumu UR": "Toss +5/7/9/12/15, Toss +1/2/3/4/5%", "Sakusa UR": "Strong Spike +5/7/9/12/15, Strong Spike +1/2/3/4/5%", "Komori UR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Hoshiumi UR": "Strong Spike +5/7/9/12/15, Strong Spike +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Inarizaki WS Teammates",
        category: "stats",
        members: ["Kita SSR", "Ojiro SSR", "Ginjima SSR", "Kosaku R", "Riseki R"],
        description: { "Kita SSR": "Cover +5/7/9/12/15, Cover +1/2/3/4/5%", "Ojiro SSR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Ginjima SSR": "Receive +5/7/9/12/15, Receive +1/2/3/4/5%", "Kosaku R": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Riseki R": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%" },
        activation: { type: "all" }
    },

    // --- KAMOMEDAI ---
    {
        name: "Kamomedai",
        category: "school",
        school: "Kamomedai",
        description: "At the start of a rally, all Kamomedai players gain +3/4/5/6/7% to their Main Parameter.",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Youth Training Camp",
        category: "stats",
        members: ["Hoshiumi UR", "Kageyama UR"],
        description: { "Hoshiumi UR": "Serve +5/7/9/12/15, Serve +1/2/3/4/5%", "Kageyama UR": "" },
        activation: { type: "all" }
    },
    {
        name: "Similar Physique Teammates",
        category: "stats",
        members: ["Hinata SSR", "Hoshiumi UR"],
        description: { "Hinata SSR": "", "Hoshiumi UR": "Power Strike +5/7/9/12/15, Power Strike +1/2/3/4/5%" },
        activation: { type: "all" }
    },
    {
        name: "Friends from Junior High",
        category: "deployment",
        members: ["Hirugami UR", "Hoshiumi UR"],
        description: "Hoshiumi's main parameter increases by 6%. Front row allies' [Block] increases by 6%. At the start of the match, Hoshiumi gains 1 stack of [All-Rounder] and Hirugami gains 1 stack of [Solid Block].",
        activation: { type: "all" }
    },
    
    // --- ITACHIYAMA ---
    {
        name: "Itachiyama",
        category: "school",
        school: "Itachiyama",
        description: "At the start of a rally, all Itachiyama players gain +3/4/5/6/7% to their Main Parameter.",
        activation: { type: "count", min: 4 }
    },
    {
        name: "Top Spiker and Top-Class Libero",
        category: "deployment",
        members: ["Sakusa UR", "Komori UR"],
        description: "Sakusa’s [Spike] increases by 10%, and Komori’s [Receive] increases by 10%. All allies’ [Receive] power increases by 20% of their [Receive] stat.",
        activation: { type: "all" }
    },
];