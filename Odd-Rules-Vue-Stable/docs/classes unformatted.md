
export const playerClasses = [
  {
    name: "The Priest",
    tagline: "The gods are many, and their demands are great.",
    features: [
      {
        level: "A",
        name: "Voice of the Gods",
        description: `Roll for a god from the [Pantheon](#pantheon), name it, choose 3 Miracles. For each of the god's mandates you directly obey when invoking one of its miracles, get +1 die, up to your level. You may add extra dice to a miracle; for each die added this way, roll on the Divine Disfavor table, starting with a d6 and stepping the die up each time.`
      },
      {
        level: "B",
        name: "Orator, Divine Mandate",
        description: `**Orator**: In a settlement, your speeches on the gods draw audiences of **(level)d6** people. You can hire a number of these followers equal to your level as hirelings. There is a *level-in-6 chance* one has class levels. All who listened to your oratory will be kind to you and do small, domain-appropriate favors.\n\n**Divine Mandate**: Pick one **Appeasement** from one of your Domains. When you obey it while invoking a miracle, gain an extra die.`
      },
      {
        level: "C",
        name: "Found a Mystery Cult",
        description: `You start your own mystery cult! Pick **three** of the following **Divergences**. You can pick the same one multiple times.\n\n*   **Broadened Pantheon**: Choose an additional Domain.\n*   **Deeper Mysteries**: Learn a new miracle from one of your Domains.\n*   **Reinterpretation**: Invert one of your Mandates. Your followers adopt this new interpretation.\n*   **Syncretism**: Combine two miracles from different domains into one new miracle. This miracle scales with mandates from both domains.\n*   **Divine Calling**: Pick another Appeasement for your Divine Mandate.\n*   **Blessed Initiation**: When you hire a follower with class levels, they are a Priest of your domains, with miracles of your choice.`
      },
      {
        level: "D",
        name: "High Priest, +3 Divergences",
        description: "Your followers are now true cultists. Your pronouncements, so long as they align with your domains' mandates, will be followed to the best of their ability. Your hirelings become fanatics who will follow your commands to the death."
      },
    ],
    equipment: [
      "Laurel wreath, ceremonial robes, sacrificial dagger",
      "Assorted incense and ritual salts, sanctified melee weapon of choice"
    ],
    disfavorTable: `| Roll | Result |\n|:---:|:---|\n| 1 | A god puts before you a **test of faith**, which you must overcome alone. |\n| 2 | Hubris begets ruin. Suffer **disadvantage** on saves for the rest of the session. |\n| 3 | You **lose your connection** to your patrons for 24 hours. |\n| 4 | Misused divine energy sears your eyes. Go **blind** for a week. |\n| 5 | You must perform a rite of penance: a vow of **poverty, silence, or fasting** for a month. |\n| 6 | The gods take something of personal, **sentimental value**. |\n| 7 | You are wounded by what seems like random chance. Suffer a **grievous injury**. |\n| 8 | You are **marked by the gods**. Gain a strange physical mutation. See the [Mutations Tab](#mutations). |\n| 9 | You are declared an **enemy of an opposed cult**. Their priests will refuse you, and zealots may hunt you. |\n| 10 | You are **cast out**, stripped of your divine powers forever. |`,
    domains: [
      {
        name: "Animal",
        commands: ["Protect your animal and its environment", "Act as your animal does in its place in the ecosystem", "Promote the societal virtues your animal embodies", "Defend your animal's honor"],
        miracles: [
            { name: "Bestow Shape", details: "*Range*: touch/self; *Target*: 1 willing creature; *Duration*: [dice] hours. Target can speak with animals, who will treat target as a strange kind of [chosen animal]. Target also gains +2 to a relevant stat, and gains either a relevant sense, a natural weapon attack that deals d8+(STR or DEX) damage, or a resistance that [chosen animal] has. If [dice] is 2 or greater, the target becomes that animal. If [dice] is 3 or greater, the target can become a size category larger or smaller than the animal usually is, or become a pack/flock of that animal. If [dice] is 4 or greater, you can force an unwilling creature to save vs. becoming that animal." },
            { name: "Summon Animal", details: "*Range*: N/A; *Target*: N/A; *Duration*: [sum]*10 minutes. [sum] [dice]HD [chosen animal] flock to you. They will follow simple instructions that are in line with your Mandates for [sum]*10 minutes." },
            { name: "Survival Instinct", details: "*Range*: touch/self; *Target*: 1 creature; *Duration*: [sum] hours. Target has Advantageous Terrain as a Ranger for your chosen animal's home terrain. When foraging for food, they know what is edible, and can gain sustenance from anything your chosen animal could eat. Target knows the tracks of local predators and prey and can follow them unerringly. Target cannot get lost in this terrain." },
        ],
      },
      {
        name: "Authority",
        commands: ["Punish the lawless", "Convert outsiders", "Spread the rule of law", "Defend the state"],
        miracles: [
          { name: "Smite", details: "*Range*: 100'; *Target*: 1 creature or object; *Duration*: instant. Deal **[sum]** damage to the target. If the target is a creature, and **[dice]** is greater than 1, you may force the target to fall prostrate. They must make a save to stand up." },
          { name: "Summon Minor Spirit of Judgment", details: "*Range*: N/A; *Target*: N/A; *Duration*: **[dice]** hours. Summon a minor spirit of law adjacent to you. It has **[dice]*4 HP**, can fly, and projects a **[dice]*10'** radius field that enforces the law. It follows your commands to the letter, so long as they are consistent with the law." },
          { name: "Empower", details: "*Range*: touch; *Target*: 1 creature or self; *Duration*: **[sum]** saves. Target gets a bonus of **+[dice]** to their next **[sum]** saves. If the target violates the law, this spell ends immediately." },
        ],
      },
      {
        name: "Battle",
        commands: ["Openly confront your enemies", "Crush the opposition", "Fight your own battles", "Seek a glorious death in battle"],
        miracles: [
          { name: "Enrage", details: "*Range*: 50'; *Target*: **[dice]** creatures; *Duration*: **[sum]** minutes. Targets become enraged and must save to restrain themselves from resorting to violence. You may also grant them an **Enhanced** attack on their next turn." },
          { name: "Summon Blessed Armory", details: "*Range*: touch; *Target*: N/A; *Duration*: **[sum]** minutes. Summon **[dice]** blessed weapons of your choice. They are magical, and the wounds they leave cannot be healed except by magical means." },
          { name: "Aegis of the God-King", details: "*Range*: touch; *Target*: **[dice]** creatures; *Duration*: **[sum]** rounds. Anyone attempting to attack a target must make a **WIL save**. If they succeed, they don't need to make those saves against that target anymore." },
        ],
      },
      {
        name: "Blood",
        commands: ["Shed 1+ HP of your own blood.", "Shed 1+ HP of another's blood.", "Sacrifice an animal with at least 4 HP.", "Drink the blood of a worthy foe."],
        miracles: [
          { name: "Blood Servant", details: "*Range*: self or touch; *Target*: 1 creature with blood; *Duration*: **[dice]** hours. Create a fluid servant made out of blood, with 4 HP for each hit point sacrificed. It follows your complex commands, can squeeze through very small gaps, and its attacks force a save vs suffocation." },
          { name: "Exsanguinate", details: "*Range*: 50'; *Target*: 1 creature with blood; *Duration*: instant. Deals **[sum]** damage to the target. You control the exsanguinated blood for **[dice]** turns. It can be manipulated as if by an unseen force." },
          { name: "Hemomancy", details: "*Range*: Touch; *Target*: 1 creature's blood; *Duration*: instant. You learn information about the creature you drink the blood of. **1 die**: name, appearance, mental state, and ailments. **2 dice**: you can track them by scent. **3 dice**: their actions for the past 24 hours and one memory. **4 dice**: past week and three memories." },
        ],
      },
      {
        name: "Creation",
        commands: ["Bring beautiful things into being", "Empower others to create", "Discover natural wonders", "Show others the beauty of the world"],
        miracles: [
          { name: "Mend", details: "*Range*: touch; *Target*: broken object or wounded creature; *Duration*: instant. Repair a broken mundane item or heal a wound of **[sum]** HP or less." },
          { name: "Transmute", details: "*Range*: touch; *Target*: **[sum]** inches^3 of material; *Duration*: instant. Targeted material becomes another material of your choice. Restrictions lessen with more **[dice]** invested." },
          { name: "Duplicate", details: "*Range*: touch; *Target*: item; *Duration*: **[sum]** hours. You create a perfect mundane duplicate of the target. If **[dice]** is 3 or greater, the duplicate also copies one magical property of the target. The duplicate fades away at the end of the duration." },
        ],
      },
      {
        name: "Death",
        commands: ["Let none cheat death", "Help others pass on in peace when their time comes", "Remind others that death will come for them", "Release trapped souls from the world"],
        miracles: [
            { name: "Speak With Dead", details: "*Range*: touch; *Target*: 1 corpse, dead or undead; *Duration*: [sum] minutes. Animate the targeted corpse's skull and ask it [sum] questions. It must answer truthfully, if cryptically. If [dice] is 2 or greater, you can force an undead to stop all other tasks and answer your questions instead. If [dice] is 3 or greater, you can issue commands to an undead in addition to asking it questions. If [dice] is 4 or greater, you can raise the targeted corpse as an undead under your command for the duration of the spell." },
            { name: "Blight", details: "*Range*: touch; *Target*: creature or up to [sum] acres of land; *Duration*: [sum] days. Either inflict or lift a blighting curse, which significantly diminishes crop growth, befouls wells, turns milk sour, weakens animals and children, lowers fertility of both soil and people. Any creature born under a Blight must save or roll a permanent mutation. Blighted creatures treat their Strength, Dexterity, and Constitution modifiers as -[dice], cannot heal wounds, and have disadvantage on saves vs. disease or poison." },
            { name: "Exorcise", details: "*Range*: within a drawn circle; *Target*: circle; *Duration*: [sum] hours. Spirits, undead, and (if you so desire) unbelievers cannot enter the circle. All such within the circle must save (on cast/each hour/each minute/each turn, [dice] = 1/2/3/4) vs. being violently expelled from the circle, taking [sum] damage. If the circle is broken, the effect ends." },
        ],
      },
      {
        name: "Element",
        commands: ["Spend time in areas affiliated with your element", "Wear talismans and garments linked to your element", "Attack opposed elements", "Seek out marvels of your element"],
        miracles: [
            { name: "Control Element", details: "*Range*: dice*50ft; *Target*: n/a; *Duration*: sum minutes. You control an fist/person/wagon/house (1/2/3/4 dice)-size amount of your element within range. You can move it and reshape it as you want. If it's part of something that also can control it (like earth in an earth elemental, or water in blood), you need to have 2 or more dice, and they get a save." },
            { name: "Summon Elemental", details: "*Range*: touch; *Target*: n/a; *Duration*: dice hours. Summon a dice HD minion made of your element that obeys your commands. Its size is based on its HD, and its attacks deal d6/d8/d10/d12 (1/2/3/4 dice) damage of an appropriate elemental type. It has a relevant movement type (e.g. burrowing for earth, or teleportation for lightning). You can only have HD of elementals summoned equal to your cleric level." },
            { name: "Become Element", details: "*Range*: self; *Target*: self; *Duration*: sum minutes. You convert 1 die: a fist or smaller body part, 2 dice: a limb, 3 dice: half your body, 4 dice: your entire body and all your equipment into your element. You also step up the unarmed damage die for attacks with that part of your body, and it deals a relevant type of damage." },
        ],
      },
      {
        name: "Fate",
        commands: ["Ensure that prophecy comes to pass", "Prevent the misuse of magic, for it oft damages the strings of fate", "Be the hand of karmic balance in the world", "Uncover the past, in order to better know the future"],
        miracles: [
            { name: "Second Chance", details: "*Range*: 100ft; *Target* 1 creature; *Duration*: instant. Target rerolls a die that rolled its worst possible value. This works on the GM too." },
            { name: "Foretell", details: "*Range*: N/A; *Target*: something you have a sympathetic link to; *Duration*: instant. You can ask one question about the future of the target within the next [sum] days/months/years/decades ([dice] = 1/2/3/4). When you next sleep, the answer is revealed to you metaphorically in a dream." },
            { name: "Snip Fatestrings", details: "*Range*: 100ft; *Target*: 1 creature; *Duration*: instant. Target loses [sum]*[dice] years off their life. The shock of this forces them to save vs. fear. If this brings their lifespan to less than their current age, they save vs. death. If they pass that save, you can't cast this on them anymore, and their existence is a karmic imbalance that you must personally correct." },
        ],
      },
      {
        name: "Forge",
        commands: ["Create masterworks", "Practice what you preach", "Build to last", "Take no shortcuts"],
        miracles: [
            { name: "Find Materials", details: "*Range*: N/A; *Target*: material; *Duration*: [sum] hours. You learn the direction to the nearest source of a material that you can name or describe. If [dice] is 2 or greater, you also learn how large that source is." },
            { name: "Shape Metal", details: "*Range*: touch; *Target*: N/A; *Duration*: [dice] minutes. Your hands can mold metal as if it was clay, or cut it like knives through butter." },
            { name: "Improve", details: "*Range*: touch; *Target*: constructed item; *Duration*: [sum] minutes. Give the target item [dice] of the following bonuses of your choice:\n- a Blacksmith bonus as Engineer (can choose multiple times)\n- Change the special ability of a mundane weapon\n- Halve the duration that a function of the item takes\n- +1 to one function of the item (can choose multiple times, but not stack)" },
        ],
      },
      {
        name: "Greed",
        commands: ["Acquire wealth", "Flaunt your wealth", "Protect your wealth", "Compel others to acquire wealth"],
        miracles: [
            { name: "Command Coins", details: "*Range*: [dice]*20ft; *Target*: all coins; *Duration*: [sum] turns. You have mental control over all coins within range. You can move them as you wish, so long as they stay within range. If you fling them rapidly as projectiles, they deal d4 damage to those hit by at least 1gp, stepped up once for every 10 coins you're hitting them with. If you use them to manipulate objects, they have Strength 4*[dice] and Dexterity 1. If you form them into a shield or armor, it gives +[dice] AC to whatever they're protecting. You can do [dice] things per turn with the coins." },
            { name: "Assay", details: "*Range*: 200ft; *Target*: one thing; *Duration*: instant. You know how much the target is worth. If [dice] is 2 or more, you know how much you, personally, could sell it for. If [dice] is 3 or more, you know who made it and how. If [dice] is 4 or more, you know how much it will be worth at all points in the future." },
            { name: "Moneychange", details: "*Range*: touch; *Target*: item, or creature with HD [dice] or less; *Duration*: instant. [sum]*5% of the target is rendered into the equivalent % of its value in coinage. If the target is a creature, it gets to save against this effect." },
        ],
      },
      {
        name: "Harvest",
        commands: ["Sow seeds for the future", "Hope for the best, prepare for the worst", "Do honest work", "Tend to others' needs"],
        miracles: [
            { name: "Fortify", details: "*Range*: touch; *Target*: dice*2 food items; *Duration*: dice hours. Pick dice effects to apply to the targets. Effects can be chosen more than once, but once imbued, targets can't be imbued again.\n- Remove diseases/poisons/mold/rot from food/drink\n- Change taste\n- Advantage on HP rolls during rest\n- Heals 1 HP when consumed\n- Make it keep dice+1 times longer than it usually would (this effect doesn't wear off)." },
            { name: "Loaves and Fishes", details: "*Range*: touch; *Target*: 1 food item; *Duration*: dice hours. Divide the target into dice+1 copies of itself. They disintegrate into dust when the duration ends unless consumed first. Each copy only counts for 1 ration." },
            { name: "Domesticate", details: "*Range*: 50'; *Target*: dice animals; *Duration*: sum hours. Target becomes placid and will meekly follow you. Targets with over dice HD get a save." },
        ],
      },
      {
        name: "Knowledge",
        commands: ["Learn worldly secrets", "Distribute knowledge to the masses", "Speak truth to power", "Recover lost artifacts"],
        miracles: [
          { name: "Identify", details: "*Range*: touch; *Target*: item, creature, or effect; *Duration*: instant. You learn **[dice]** magical effects that the target has. **2+ dice**: learn its creator. **3+ dice**: learn its history. **4+ dice**: learn how to replicate its effects." },
          { name: "Mind Meld", details: "*Range*: touch; *Target*: creature; *Duration*: instant. Create a telepathic link with the target. **1 die**: read surface thoughts. **2+ dice**: read recent memories. **3+ dice**: read secrets. **4+ dice**: wipe its mind." },
          { name: "Dowse", details: "*Range*: N/A; *Target*: item or creature; *Duration*: **[sum]** hours. You learn the direction to an item or creature that you can name or describe; your sense of this follows the target as it moves." },
        ],
      },
      {
        name: "Love",
        commands: ["Spread love, not war", "Foster kinship between all living things", "Bring together those who were destined to be together", "Keep true love alive and expose false \"love\" for the lie it is"],
        miracles: [
            { name: "Heart to Heart", details: "*Range*: touch; *Target*: dice+1 creatures; *Duration*: dice hours. The targets gain telepathy, know each other's location, and cannot lie to each other. With 2 dice, targets can voluntarily share memories. With 3 dice, targets can experience each others' senses and move each others' bodies. With 4 dice, continues working even after one target dies." },
            { name: "Locate Soulmate", details: "*Range*: n/a; *Target*: 1 creature; *Duration*: instant. You and the target both learn one piece of information at random of the target's soulmate that you don't already know.\n1 die: one physical feature (eye color, hair color, current clothing, etc.)\n2 die: one mental feature (favorite food, personality trait, current mental state, etc.)\n3 dice: their name\n4 dice: their current location" },
            { name: "Unite", details: "*Range*: touch; *Target*: 1 creature; *Duration*: sum minutes. Target can use dice abilities per round of other creatures voluntarily touching them. This includes but is not limited to class abilities, spells, movement types, languages, etc." },
        ],
      },
      {
        name: "Nobility",
        commands: ["Flaunt your status", "Reinforce hierarchy", "Do your lord's bidding", "Gather power for yourself and your lord"],
        miracles: [
            { name: "Assert Status", details: "*Range*: 50'; *Target*: 1 mortal; *Duration*: sum minutes. One target is perceived by all others as dice ranks more or less important than they usually are (i.e. you could make a soldier perceived as the commander on a battlefield, or your party's scholar as a lowly scribe unworthy of note)." },
            { name: "Summon Servant", details: "*Range*: 10'; *Target*: n/a; *Duration*: sum hours. Summon a servant. They are the platonic ideal of that servant, perfectly obsequious and loyal, with relevant skills in their area of expertise and absolutely none outside of them.\n1 die: a butler (no class levels)\n2 dice: a cook (level 1 butcher)\n3 dice: a bodyguard (level 2 d4: 1-2. fighter, 3. ranger, 4. adept)\n4 dice: a advisor (level 2 d4: 1. scholar, 2. wizard, 3. cleric, 4. engineer)" },
            { name: "Geas", details: "*Range*: touch; *Target*: 1 creature; *Duration*: sum hours/days/months/permanently. Target must obey a prohibition you put on it, or perform a service you demand of it. Whenever it tries to disobey your command, it must save or take dice d6 damage. This command cannot be immediately or drastically self-destructive." },
        ],
      },
      {
        name: "Purity",
        commands: ["Aid the downtrodden", "Preserve the natural order", "Destroy abominations", "Ensure the pure do not become corrupted"],
        miracles: [
          { name: "Cure Disease", details: "*Range*: touch; *Target*: living creature; *Duration*: instant. Target gets to save vs. **[dice]** diseases afflicting them. If they fail, you can't try to cure it again until the disease progresses." },
          { name: "Turn Undead", details: "*Range*: 50'; *Target*: **[sum]** * 4 HP of undead creatures; *Duration*: instant. Targets must save vs. fear or flee. If **[dice]** is 3 or greater, they also take **[sum]** damage even if they pass their save." },
          { name: "Heal", details: "*Range*: touch; *Target*: living creature; *Duration*: instant. Target regains **[sum]** hit points. This expends **[dice]** of their short rests for the day." },
        ],
      },
      {
        name: "Storm",
        commands: ["Follow your instincts", "Embody the raw power of nature", "Humble the mighty", "There's no kill like overkill"],
        miracles: [
            { name: "Control Weather", details: "*Range*: 1 mile; *Target*: the sky; *Duration*: [sum] minutes. Change the weather within the radius. You can call or banish any mundane, common weather. 2 or more dice lets you call or banish magical or regional weather. 3 or more dice makes it last [sum] hours. 4 or more dice lets you call natural disasters." },
            { name: "Lightning Bolt", details: "*Range*: 200ft; *Target*: any; *Duration*: instant. Target takes [sum] damage. If target is a creature, they get a save. If target is conductive, everything it touches also takes [sum] damage." },
            { name: "Command Water", details: "*Range*: [sum]*20ft; *Target*: all water; *Duration*: [sum] rounds. You have mental control over all water within range (no, blood doesn't count as water). You can move it as you wish, so long as it stays within range. If you use it to attack, it deals d4 damage, stepped up once for each gallon you're hitting them with. If you use it to manipulate objects, it has Strength 3*[dice] and Dexterity 6*[dice]. If you use it to make a shield, it steps down the damage of any attack passing through it. You can do [dice] things per turn with the water." },
        ],
      },
      {
        name: "Trickery",
        commands: ["Execute your grand designs", "Lie to the powerful", "Act in secret", "Subvert authority"],
        miracles: [
          { name: "Break Chains", details: "*Range*: self; *Target*: physical restraints; *Duration*: instant. Anything physically restraining you no longer does so. If you are imprisoned, you can teleport **[sum]*10** feet away to a location where you are free." },
          { name: "Chaos", details: "*Range*: **[dice]*50'**; *Target*: **[sum]** items; *Duration*: **[sum]** minutes. In a **[dice]*50'** radius, you can cause small items to fall, flames to flicker and die, doors and windows to open and close, armor to rattle, and other impressive and distracting theatrical effects." },
          { name: "Illusion", details: "*Range*: 50'; *Target*: **[dice]*5'** radius; You create a visual illusion of whatever object or creature you want. It can move as you dictate, but it cannot make any sound or other sensory effect. Illusions can only add, not subtract." },
        ],
      },
      {
        name: "Undeath",
        commands: ["Resurrect great powers", "Oppose those who would keep the dead buried", "Seek out and fulfill the will of the dead", "Slay others so they too can join the ranks of the dead"],
        miracles: [
            { name: "Reanimate", details: "*Range*: touch; *Target*: 1 corpse; *Duration*: sum hours. The target is imbued with false life, and can move as it did in life (though it's restricted by what parts it still has). It has up to dice HD, and you can command up to cleric level*2 HD of undead. Other undead you resurrect act according to their nature, which is usually hungry and hostile to anything alive - including you, probably." },
            { name: "Speak With Dead", details: "*Range*: touch; *Target*: 1 corpse, dead or undead; *Duration*: sum minutes. Animate the targeted corpse's skull and ask it sum/2 (round up) questions. It must answer truthfully, if cryptically. If dice is 2 or greater, you can force an undead to stop all other tasks and answer your questions instead. If dice is 3 or greater, you can issue commands to an undead in addition to asking it questions. If dice is 4 or greater, you can raise the targeted corpse as an undead under your command (as Reanimate) for the duration of the spell." },
            { name: "Steal Soul", details: "*Range*: 50'; *Target*: 1 creature with a soul; *Duration*: instant. Make a ranged attack against the target that deals sum necrotic damage and imprisons a proportional amount of their soul in a vessel on your person. This soul can be interrogated as Speak With Dead." },
        ],
      },
      {
        name: "Vengeance",
        commands: ["Do unto others as they have done unto you", "Keep grudges", "Help others settle their own scores", "Ensure the right person is punished for their crimes"],
        miracles: [
            { name: "Do Unto", details: "*Range*: 100'; *Target*: one creature who has wronged you or someone you know; *Duration*: instant. Make a ranged attack that inflicts a minor petty inconvenience that (among other things) deals d4 damage to the target. For each way in which the inconvenience is ironic, you can upgrade the scale of the inconvenience and the damage die size, up to a maximum of dice times." },
            { name: "Hunt Down", details: "*Range*: n/a; *Target*: one creature who has wronged you or someone you know; *Duration*: instant. You learn one random piece of information about the target that you don't already know.\n1 die: one physical feature (eye color, hair color, current clothing, etc.)\n2 die: one mental feature (favorite food, personality trait, current mental state, etc.)\n3 dice: their name\n4 dice: their current location" },
            { name: "Compel Confession", details: "*Range*: touch; *Target*: one creature; *Duration*: instant. Target confesses to a crime they have committed. For each die, you can ask them one question about it, to get more details. At 2 or more dice, you can specify which crime they confess to, though if they didn't do it they'll just make stuff up and hope it's enough for you." },
        ],
      },
      {
        name: "Wilds",
        commands: ["Oppose the spread of of civilization", "Prey upon the weak", "Destroy unnatural things", "Spread life into dead places"],
        miracles: [
          { name: "Call Fauna", details: "*Range*: N/A; *Targets*: N/A; *Duration*: **[sum]*10** minutes. **[sum]** creatures of **[dice]*4 HP** flock to you. If **[dice]** is greater than 2, they will follow simple instructions that are in line with your Mandates." },
          { name: "Grow Flora", details: "*Range*: **[dice]*50'**; *Targets*: **[sum]** plants; *Duration*: instant. Targeted plant life grows to **[dice]+1** times its size. If **[dice]** is greater than 2, you can roughly control the shape that it grows in, and have it grab items and creatures (they must save)." },
          { name: "Shatter", details: "*Range*: 100'; *Targets*: mortal-made item, construct, or undead; *Duration_: instant. Deal **[sum]** damage to target in an explosion of shrapnel that shreds other nearby unnatural items and creatures, dealing **[sum/2]** damage. This effect chains up to **[dice]** times." },
        ],
      },
    ],
    tables: [],
    structuredTables: [],
  },
  {
    name: "The Sorcerer",
    tagline: "Sorcerers alter the world through sheer force of will. They wear ridiculous outfits and say things like 'Stones! Heed the words of Ziwilgo!'",
    features: [
      {
        level: "",
        name: "",
        description: "_**Prerequisite**: Exposure to a lethal dose of chaos radiation (and survive), or be born with it._"
      },
      {
        level: "A",
        name: "Force of Will",
        description: `To change the world, choose an ability (**Alter**, **Harm** or **Create**) and a number of **Sorcerer Dice (SD)**. SD never deplete. Every time you cast, you will also add **Instability Dice (ID)** to a daily pool which are also rolled. **Doubles, triples and quadruples** will cause you to roll on the Sorcerer Mishap table. ID do not count to the effectiveness of the spell, but can trigger mishaps. ID reset at the beginning of each day.\n\n*   **Alter**: Make a declarative statement about a target creature or object. You cannot cause harm or move them.\n    *   `+'`+1 ID`'+` for each prior use of Force of Will today\n    *   `+'`+1 ID`'+` per additional target\n    *   `+'`+1/2/3 ID`'+` to affect wagon-size/house-size/village-size\n    *   `+'`+1/2/3 ID`'+` to last `+'`Rd [Dice]`'+` Rounds/Minutes/Days\n*   **Harm**: Deal **[Sum]** damage to a Nearby target.\n    *   `+'`+1 ID`'+` for each prior use of Force of Will today\n    *   `+'`+1 ID`'+` per additional target\n*   **Create**: Create something for `+'`Rd [Dice]`'+` Rounds. Creatures created are `+'`LVL2`'+` but are semi-illusory and cannot deal damage. Items cannot directly harm others but can have magical effects (flying carpet, invisible log). Potion effects only last as long as the spell.\n    *   `+'`+1 ID`'+` for each prior use of Force of Will today\n    *   `+'`+1 ID`'+` per additional object\n    *   `+'`+1 ID`'+` for a `+'`4LVL`'+` Creature\n    *   `+'`+1/2/3 ID`'+` to affect wagon-size/house-size/village-size\n    *   `+'`+1/2/3 ID`'+` to last `+'`Rd [Dice]`'+` Rounds/Minutes/Days`
      },
      {
        level: "B",
        name: "Flashy Robes",
        description: "You may invest more money into your flashy outfit. Record how much it costs. At each level, treat it like armour of the corresponding AV, including inventory slots taken."
      },
      {
        level: "C",
        name: "Perceive Reality",
        description: "You can see the *true nature* of others. You can locate invisible creatures, see ghosts and tell if someone is undead. You can tell if someone is a spellcaster. The price is you permanently lose **1d6 WIL** (you are alienated from others)."
      },
      {
        level: "D",
        name: "Sentient Robes",
        description: "Your robes have been infused with magic after being worn by you for so long. They are now animated and respond to your commands. They can manipulate small objects, fly, and serve as a magic carpet for you. If they are put in harm's way, they risk becoming damaged and are exorbitantly expensive to repair."
      }
    ],
    equipment: [
      "Outlandish costume (provides 1 Armor, see table below)"
    ],
    disfavorTable: "",
    domains: [],
    structuredTables: [
      {
        title: "Sorcerer Mishaps",
        tables: [
          {
            title: "Rolled Doubles when Casting (1d6)",
            headers: ["Roll", "Result"],
            rows: [
              ["1", "Bright sparks fly from your ears."],
              ["2", "You make a noise like a thunderclap."],
              ["3", "A strong wind billows, extinguishing torches."],
              ["4", "You start to hiss, and steam rises from you."],
              ["5", "Take **1** damage."],
              ["6", "Take **1d6** damage."]
            ]
          },
          {
            title: "Rolled Triples when Casting (1d6)",
            headers: ["Roll", "Result"],
            rows: [
              ["1", "Effect targets something else instead."],
              ["2", "Teleport somewhere you don't want to be."],
              ["3", "Random mutation. Test **Str** or it is permanent. See the [Mutations Tab](#mutations)."],
              ["4", "Add **+1 ID** to your pool. Take 1 damage."],
              ["5", "Raw magic. Take **Ongoing Damage** for Rd6 rounds."],
              ["6", "**Explode**. Everyone Nearby takes **2d6** damage, including you. *Ignores your armour.*"]
            ]
          },
          {
            title: "Rolled Quadruples when Casting (1d6)",
            headers: ["Roll", "Result"],
            rows: [
              ["1", "Spell effect is reversed to create the opposite effect."],
              ["2", "Permanent random mutation. See the [Mutations Tab](#mutations)."],
              ["3", "Lose **1d6** Permanently from a random stat."],
              ["4", "Roll on the Injury and Death table."],
              ["5", "A **LVL5 Void Creature** emerges to eat your soul."],
              ["6", "**Explode**. Everyone Nearby takes **4d6** damage, including you. *Ignores your armour.*"]
            ]
          }
        ]
      },
      {
        title: "Outlandish Outfits (1d6)",
        tables: [
          {
            title: "",
            headers: ["Roll", "Outfit"],
            rows: [
              ["1", "Cloak with animated images of your face"],
              ["2", "Lady Gaga meat-dress. *The meat is alive*"],
              ["3", "Coat made of animated gold (not actually gold)"],
              ["4", "Hieronymus Bosch painting, but a robe"],
              ["5", "Outfit made entirely of amulets and charms"],
              ["6", "Nude, but with fabulous head-dress"]
            ]
          }
        ]
      },
      {
        title: "Flashy Robes Cost",
        tables: [
          {
            title: "",
            headers: ["Cost", "Armour Value (AV)", "Inventory Slots"],
            rows: [
              ["Base", "AV1", "1"],
              ["50 coins", "AV2", "2"],
              ["200 coins", "AV3", "3"],
              ["500 coins", "AV4", "4"]
            ]
          }
        ]
      }
    ],
    tables: []
  },
  {
    name: "The Thief",
    tagline: "What's yours is mine, and what's mine is also mine.",
    features: [
      {
        level: "A",
        name: "Always Prepared",
        description: "You may spend any amount of money to buy an Unlabelled Package. When the package is unwrapped, you declare what it contains, as long as the contents comprise the appropriate number of Inventory Slots, don’t cost more than you originally paid, and could feasibly be purchased."
      },
      {
        level: "A",
        name: "Wall Crawler",
        description: "You can climb as well without climbing gear as most people can with climbing gear. Simple climbs do not require a test. You can attempt impossible climbs."
      },
      {
        level: "B",
        name: "Lucky",
        description: "Spend Luck to reroll a d20 test. Gain Luck (up to max 1) whenever you do something especially roguish, or during [carousing](#carousing)."
      },
      {
        level: "C",
        name: "Flashback",
        description: "Make a test to see how an action you performed in the past impacts the current situation. Take 0-2 fatigue based on how outlandish & roguish the action is (+1 if its outlandish, -1 if its roguish)."
      },
      {
        level: "D",
        name: "Backstab",
        description: "When striking a vulnerable opponent, your [enhanced attack](#attacks) deals 2d12 instead of its normal dice."
      }
    ],
    equipment: [
      "Light armor (1 Armor)",
      "Dagger (d6 damage)",
      "Thieves' tools",
      "Rope and grappling hook"
    ],
    disfavorTable: "",
    domains: [],
    structuredTables: [],
    tables: []
  },
  {
    name: "The Wizard",
    tagline: "Reckless academics.",
    features: [
      {
        level: "",
        name: "",
        description: "Prerequisite:\n\n* 1d4 years of study at an institute or apprenticed to a master.\n* Take on student loans: 5g per wizard level per adventure."
      },
      {
        level: "A",
        name: "Study",
        description: "Each time you gain a Wizard level, you can spend a week studying a spellbook you have access to: gain its knowledge, and roll to learn another one of its spells. ([Example spellbooks](https://saltygoo.github.io/class/wizard))"
      },
      {
        level: "A",
        name: "Memorization",
        description: "You can cast spells from memory rather than from books. Each memorized spell takes 1 inventory slot. When cast, you retroactively choose what spell it was, then replace it with fatigue. Casting a memorized spell can be done in combat."
      },
      {
        level: "B",
        name: "Ritual",
        description: "You can use the site, trappings and performance of ritual to grant additional *Mana Dice*. See [here](https://caput-caprae.blogspot.com/2020/11/ritual-elements-in-glog-magic.html) for a guide."
      },
      {
        level: "C/D",
        name: "Study",
        description: "As before, but you can choose the spell."
      }
    ],
    equipment: [
      "Pointy hat and robes",
      "Gnarled staff (d6 damage)",
      "A random, mostly-useless spellbook"
    ],
    disfavorTable: "",
    domains: [],
    structuredTables: [],
    tables: []
  }
];