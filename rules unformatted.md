


## These are my house rules, format them for Vuepress

export const coreRules = [
  {
    category: "Character Basics",
    rules: [
      {
        id: 'attributes',
        title: 'Attributes',
        content: 'Characters have three main attributes: **Strength (STR)**, **Dexterity (DEX)**, and **Willpower (WIL)**. To make a test, roll a d20. If the result is *less than or equal to* the relevant attribute, it\'s a success.',
      },
      {
        id: 'healing',
        title: 'Healing & Recovery',
        content: 'A moment to catch your breath restores all lost **Hit Protection (HP)**. Recovering lost attribute points requires a full week of uninterrupted rest in a safe place.',
      },
      {
        id: 'armor',
        title: 'Armor',
        content: 'Subtract your **Armor** value from any incoming damage. The maximum base Armor value is 3. Shields provide +1 Armor but require a free hand.',
      },
    ],
  },
  {
    category: "Actions",
    rules: [
        {
            id: 'when-making-a-test',
            title: 'When making a test...',
            content: ''
        },
        {
            id: 'leverage-time-gear-skill',
            title: 'Leverage Time, Gear and Skill',
            content: 'Describe how you use the available time, gear and/or a relevant skill. This sets the test\'s [difficulty](#difficulty). For example if you have a crowbar (gear), but are short on time and skill, a test to pry open a door may be hard. However if you have ample time, gear and skill the test may be trivial (no roll).'
        },
        {
            id: 'raise-the-stakes',
            title: 'Raise the Stakes (aka Devils Bargain)',
            content: 'Describe how you adjust your approach to increase the reward, or gain advantage, at the expense of greater risk.'
        },
        {
          id: 'gambit',
          title: 'Gambit',
          content: 'Instead of an attack you may attempt repel, stop, [impair](#attacks), trip or other similar effect to a foe. Make a test to avoid a repercussion.'
        },
    ]
  },
  {
    category: "Core Mechanics",
    rules: [
      {
        id: 'difficulty',
        title: 'Difficulty',
        content: 'A test can become easier or harder in two ways:\n\n*   **Risk and Reward**: What you stand to gain and lose from a test. As a task becomes easier the reward increases and the risk decreases. A PC can choose to raise the stakes, in which case increase both the risk and reward.\n*   **Advantage/Disadvantage**: Roll twice and take the best/worst result.',
      },
      {
        id: 'magic',
        title: 'Magic',
        content: '- To cast magic, invest a number of _Mana Dice_ (d6) of your choice, up to the number you have access to. Spells will refer number of [dice] and the [sum]. \n- The way most adventurers cast magic is from using **spell books** they loot.\n- **Spell books** take one inventory slot, normally contain one spell and each casting adds fatigue to your inventory. It takes one dungeon turn to cast from one (cannot be done in combat).\n- Spells come with one *Mana Dice*, more can be attained from items, ritual or other sources. Rolling doubles causes a [mishap](#mishaps).',
      },
    ],
  },
  {
    category: "Combat & Danger",
    rules: [
        {
            id: 'attacks',
            title: 'Attacks',
            content: 'Attacks always hit. Roll your weapon’s die and do that much damage to an opponent, minus their armour.\n\nWhen an attack is **impaired**, such is firing into cover, or fighting while grappled, roll d4 for damage regardless of weapon. When an attack is **enhanced** by a gambit or vulnerable opponent, roll d12. A **Blast** or **Cleave** attack affects all targets in a specific area.\n\nInstead of an attack you can perform a risky gambit (like tripping or disarming an opponent).'
        },
        {
            id: 'hp-and-damage',
            title: 'Hit Protection and damage',
            content: 'Damage is dealt first to a creature’s Hit Protection (HP). This represents the creature’s ability to avoid or shrug off real damage. If they hit exactly 0 hp they take a [Scar](#scars). Once HP is depleted, damage is dealt to STR.\n\nAfter taking STR damage, the creature must make a STR save. If they succeed, they are still able to fight. If they fail, they take critical damage.\n\nWhen a creature takes critical damage, they take an Injured Condition, and are incapacitated until tended to by an ally and take a short rest.\n\nIf an incapacitated creature is left untended for 1 hour, they die.'
        },
        {
          id: 'scars',
          title: 'Scars',
          content: 'Take the die that caused the Scar and roll it on the table below for the resultant Scar. \n\n### Scars Table\n\n| **HP Lost** | **Result** |\n|:---:|:---|\n| 1 | Lasting Scar: Roll 1d6. 1: Neck, 2: Hands, 3: Eye, 4: Chest, 5: Legs, 6: Ear. Roll 1d6. If the total is higher than your max HP, take the new result. |\n| 2 | Rattling Blow: You’re disoriented and shaken. Describe how you refocus. Roll 1d6. If the total is higher than your max HP, take the new result. |\n| 3 | Walloped: You’re sent flying and land flat on your face, winded. You are deprived until you rest for a few hours. Then, roll 1d6. Add that amount to your max HP. |\n| 4 | Broken Limb: Roll 1d6. 1-2: Leg, 3-4: Arm, 5: Rib, 6: Skull. Once mended, roll 2d6. If the total is higher than your max HP, take the new result. |\n| 5 | Diseased: You’re afflicted with a gross, uncomfortable infection. When you get over it, roll 2d6. If the total is higher than your max HP, take the new result. |\n| 6 | Reorienting Head Wound: Roll 1d6. 1-2: STR, 3-4: DEX, 5-6: WIL. Roll 3d6. If the total is higher than your current attribute, take the new result. |\n| 7 | Hamstrung: You can barely move until you get serious help and rest. After recovery, roll 3d6. If the total is higher than your max DEX, take the new result. |\n| 8 | Deafened: You cannot hear anything until you find extraordinary aid. Regardless, make a WIL save. If you pass, increase your max WIL by 1d4. |\n| 9 | Re-brained: Some hidden part of your psyche is knocked loose. Roll 3d6. If the total is higher than your max WIL, take the new result. |\n| 10 | Sundered: An appendage is torn off, crippled, or useless. (The Warden will tell you which.) Then make a WIL save. If you pass, increase your max WIL by 1d6. |\n| 11 | Mortal Wound: You are deprived and out of action. You die in one hour unless healed. Upon recovery, roll 2d6. Take the new result as your max HP. |\n| 12 | Doomed: Death seemed ever so close, but somehow you survived. If your next save against critical damage is a fail, you die horribly. If you pass, roll 3d6. If the total is higher than your max HP, take the new result. |'
        },
        {
            id: 'attribute-loss',
            title: 'Attribute score loss and death',
            content: 'If a creature has their **STR** reduced to zero, they are **dead**. If **DEX** is reduced to zero, they are **unable to move**. If **WIL** is reduced to zero, they are reduced to **insensibility**.\n\nWhen your character **dies**, roll up a new one. The GM should introduce them as soon as possible. Getting back into the game quickly is more important than realism.'
        },
        {
            id: 'conditions',
            title: 'Conditions',
            content: 'Conditions are negative effects. Each **Condition** must be placed in an inventory slot. \n\n Some Conditions have additional effects, which apply as long as the Condition remains in your inventory.\n\nConditions can only be removed by meeting their clear requirement—usually a short, long or full rest.',
        },
        {
            id: 'fatigue',
            title: 'Deprivation & Fatigue',
            content: 'Lacking essentials like food or rest makes a character **Deprived**. A Deprived character cannot recover HP or attribute points. For each day they remain Deprived, they gain the **Fatigued** condition.',
        },
        {
            id: 'reactions',
            title: 'Reactions',
            content: 'When encountering a non-player character (NPC), the Referee rolls **2d6** to determine their initial disposition. A roll of **2** means they are immediately *hostile*, while a **12** indicates they are actively *helpful*.',
        },
        {
            id: 'morale',
            title: 'Morale',
            content: 'NPCs and hirelings must make a **WIL save** to avoid fleeing. This check is triggered after they suffer their first casualty or when their group is reduced to half its original numbers. This rule does not apply to Player Characters.',
        },
    ],
  },
  {
    category: "Growth & Advancement",
    rules: [
      {
        id: 'hirelings',
        title: 'Hirelings',
        content: 'Hirelings are NPCs recruited to join the party. They can be created by rolling their attributes or by choosing a pre-made background that defines their skills and stats.',
      },
      {
        id: 'earning-xp',
        title: 'Earning XP',
        content: 'Characters gain XP from the valuable treasures and boons they earn during an adventure. XP awards don\'t need to reflect monetary value; boons or fabled items have intangible worth. Each PC gets the full XP value of each treasure.\n\n| Quality | XP | Examples |\n|---|---|---|\n| Poor | 0 | Bag of silver, used dagger, knucklebone dice |\n| Normal | 1 | Bag of gold, gem, fine armor, magic scroll |\n| Fabulous | 3 | Magic sword, giant diamond, mithral chainmail |\n| Legendary | 10 | The Staff of Ord, a djinni\'s wish, a dragon hoard |'
      },
      {
        id: 'advancement',
        title: 'Advancement',
        content: 'To gain a level of a class, spend your current level x 10 XP or unlock an [achievement](#achievements).'
      }
    ]
  }
];