# House Rules

## Character Basics

### Attributes

Characters have three attributes: **Strength (STR)**, **Dexterity (DEX)**, and **Willpower (WIL)**. These are used to make [saves](#saves). 

### Saves

When attempting something risky, you might be asked to make a **save** against the threat of a consequence. Roll a d20 to represent the threat. If your attribute beats the threat (or matches it), you successfully avoid the consequence. (Put another way, if the threat rolls equal to or under your attribute, you successfully avoid the threat)


## Actions

When making a save you can...

### Leverage Time, Gear and Skill

Describe how you use the available time, gear and/or a relevant skill. This sets the save's [difficulty](#difficulty). If you have all three it's trivial (no roll needed), only two or one it's normal / hard. If you don't have any it's impossible. A skill is something from your character sheet / backstory.

For example if you have a crowbar (gear), but are short on time and skill, a save to avoid a threat while prying open a door may be hard *(limited reward, severe consequences)*. However if you have ample time, gear and skill the save may be trivial *(no roll*).

### Raise the Stakes (aka Devils Bargain)

Describe how you adjust your approach to increase the reward, or gain advantage, at the expense of greater risk.

### Manuever

Instead of an attack you may attempt repel, stop, [impair](#attacks), trip or other similar effect to a foe. Make a save to avoid a repercussion.

## Core Mechanics

### Difficulty

A save can become easier or harder in two ways:

*   **Risk and Reward**: What you stand to gain and lose from a save. As a task becomes easier the reward increases and the risk decreases. A PC can choose to raise the stakes, in which case increase both the risk and reward.
*   **Advantage/Disadvantage**: Roll twice and take the best/worst result.

### Time
Time is relative. It flies when you're having fun, and stops during a moment of mortal terror. As such, the tracking of time is suitably abstracted to match:
- 10sec / a round: how long it takes each participant to take an action in combat 
- 10min / a dungeon turn: how long it takes for an action during exploration. One roll on the dungeon clock.
- 1hr: Has elapsesed whenever a 1 is rolled on the dungeon clock.

## Magic
### Vancian Magic

- Anyone cast magic by reading spells from *spell books** (or **scrolls**).
- To cast magic, invest a number of _Mana Dice_ (d6) of your choice, up to the number you have access to. Spells will refer number of [dice] and the [sum] of the roll to determine the effect. 
- **Spell books** take one inventory slot, start with one spell revealed and each casting adds one fatigue to your inventory. It takes 10min of gesticulation and incantation to cast (1 roll of the dungeon clock) and cannot be done in combat. More spells can be unlocked from the spellbook by [studying](/classes/wizard.html) it.
- Spells come with one *Mana Dice*, more can be attained from items, ritual or other sources. Rolling doubles causes a [mishap](#mishaps).

#### Spellburn

- Those skilled in the art can pay for magic through mental strain (WIL), or their own flesh (STR).
- When casting a spell with spellburn determine with the GM the cost based on this:

| Cost | Targets | Duration | Distance                                     | Semantics                        |
| ---- | ------- | -------- | -------------------------------------------- | -------------------------------- |
| 0    | One     | Instant  | Touch                                        | Adheres to spell's touchstones   |
| +1   | a Few   | A minute | Within sight                                 | Stretches plausibility           |
| +2   | Many    | An hour  | Anywhere (requires lock of hair, or similar) | Severely stretches plausibility  |

- After casting a spell with spellburn, make a WIL save to avoid a [spelling error](#spelling-error)

##### Spelling Error
- The spell’s effect is determined by changing a few letters of the spell. The PCs suggest alternatives of the spell, changing a few letters from the original spelling. The GM picks from the alternatives suggested and describes how this magic effect is realized in the situation.

#### Spell Invention
- Wizard's can choose to invent insted of studying existing spells. See [Spell invention](/spell-invention.html)
- Invented spells can do whatever the name implies, but are limited without spellburn [spellburn](#spellburn). They start only dealing d6 damage (or equivalent effect), have a range of touch, an momentary duration, and affecting at most one target.

#### Mishaps
When you roll doubles, look up the [sum] on [this table](https://cairnrpg.com/hacks/glog-magic/)


### Invocation Magic
Mortals can worship gods (*and other supernatural entities)* via appeasements, to be granted blessings as well as invocations which cost debt.

#### Worship
Is performed by taking a level in priest, involves making a major appeasement to be granted a blessing and an invocation.

#### Appeasement
- **Appeasement** means performing a rite with a suitable offering, at a sufficiently sacred site, that shows befitting humility. Major appeasements are needed for worship, smaller ones are needed for clearing debt.
- Anyone can perform an appeasement to ask for a favor, but if you're not a priest it's [hard](link to difficulty section in rules) *(High-risk low-reward)*

#### Invocation 
* **Invocation**: Cast an invocation by using any number of Debt Dice (d6) up to your total levels in Priest. Doubles cause hubris, triples cause banishment. Add the debt used to your accumulated debt.

#### Debt
- Mortals are surprisingly well suited to being saddled with debt. Any amount of debt always takes 1 inventory slot *(it stacks)*
* Clear debt by performing a minor to moderate appeasement *(depending on the amount of debt)*
* At any time your god may issue a commandment, if you do not immediately fulfill it take [debt]d6 WIL damage. If you do fulfill it clear your debt.

#### Hubris
[Hubris table](link to hubris table in gods secrion)

### Alchemy

- Can be learned by harvesting and ingesting thirteen potent psychoactive ingredients while taking meticulous notes on their effects. Or by taking a class level in [Alchemist](/classes.html#classes##alechemist).
- You can combine ingredients into alchemicals (potions, oils, powder, fumes). You gain **alchemists equipment** (1 inventory slot) 
- Steps:
  - **Harvest Ingredients**: Collect plant and animal samples, noting its name and expected effect in your notebook like "eye of newt - vision", or "cloying fog - mist". These samples take 1 inventory slot, and take 10min to harvest.
  - **Combine** two samples using your **alchemists equipment** combining their effects (like "vision & mist") and choose the form (potions, oil, powder or fumes). It takes 10min to produce. Make a DEX save to avoid one of the effects being replaced with a rhyming substitute e.g. "vision mist" becoming "vision cyst" (your character doesn't know). Produces 3 uses.
  - **Use** it, each use consuming one of the 3 uses and its effect based on the samples used. If consumed it may be treated as an [addicitive substance](link to addictive subnstances section)

#### Addicitive Substances

Addictive substances last an 1 hour, afterwhich (so typically when a 1 is rolled on the dungeon clock) make a WIL save to resist gaining the **addicted condition** (1 inventory slot).

**Addicted Condition**: You are deprived (cannot regain HP) unless you are on something. Multiple instances of addiction stack (don't consume additional inventory slots). Clear: Get a good night's sleep. Roll for Withdrawals Symptoms.

##### Withdrawal Symptoms
Roll [addiction]d6

|Roll|Symptom|
|---|---|
|1|Uncontrolled Growth: Your hair and nails grow at a startling rate of an inch per hour. It’s a constant, distracting, and unpleasant maintenance issue.|
|2|The Digging Urge: You are filled with an intense, gnawing urge to dig. You must save or spend hours clawing at the earth. While strangely restful, it's a compulsive, mad behaviour that overrides all else.|
|3|Proper Noun Aphasia: You lose the ability to speak proper nouns (names of people, places, specific things). When you try, only an animalistic growl emerges, making communication a frustrating exercise in circumlocution.|
|4|Water Phobia: Not _your_ phobia, but water's phobia of _you_. Water refuses to come within arm’s reach, making rain avoid you in a perfect circle but rendering drinking and hygiene a significant, frustrating challenge.|
|5|Susurrus of Objects: You constantly hear a low whisper of voices from every object around you. Using an object makes its voice louder—lighting a match causes it to scream a death knell. You can only concentrate by plugging your ears with your hands.|
|6|Acute Phobia: You develop a sudden, severe, and irrational phobia of a common item or creature that was present when you last took the substance (e.g., steel, dogs, fire, closed doors). When confronted with it, you must save or become panicked.|
|7|Malignant Lie: The next lie you tell becomes true in the most twisted and harmful way possible. A simple bluff to a guard that "we're expected by the captain" might result in the captain appearing, furious that you're late for your own execution.|
|8|Waxen Body: Your body takes on the consistency of soft, warm candle wax. While you can reshape yourself with effort, heat causes you to slowly melt and cold makes you stiff and brittle. Taking a serious injury could cause a limb to just fall off.|
|9|Unjointed Limbs: Your arms and legs double in length, each growing an extra, awkward joint. Your movements become strange and spider-like, making fine manipulation difficult and marking you as an unsettling presence.|
|10|Withered Limb: One of your limbs suddenly withers and cramps into a useless, gnarled claw. It is dead to you, and any attempt by another to magically heal it causes the withering curse to spread to them instead. (none of the characters know this)|
|11|Obsessive Stalker: The next stranger you meet must save or become obsessed with you. This obsession twists into a need to murder you and keep a grisly trophy of your body. If they succeed, they are cured. If they fail or are killed, the curse leaps to the _next_ stranger you meet.|
|12|Primal Fear: You are seized by a pure, animal terror so profound you can only scream and run. You will flee until dawn, responding with violence to anyone who tries to stop you. If you are killed in this state, you rise as a banshee.|
|13|Soul in a Flame: Your soul is violently shunted into the nearest flame (a torch, a candle, a campfire). As long as that flame burns, you cannot be killed by normal means—damage that would kill you is transferred to the flame, causing it to shrink. If the flame is extinguished, your soul is snuffed out, and you die instantly. You now have a desperate need to protect your new, fragile phylactery.|
|14|Ashen Touch: The touch of another human, even a soft caress from a loved one, becomes lethal.Their skin on yours causes your flesh to wither and instantly flake away into grey ash.|
|15|Fugitive Hands: Your hands fall from your wrists and skitter away into the darkness. In seven days, they will return. Bloated to the size of wolves and driven by a hateful intelligence, their only goal is to hunt you down and kill you.|
|16|The Uncanny Replacement: You are replaced by something that looks and acts like you, but is fundamentally _wrong_. Everyone, including you, knows it. You can't trust your own reflection, your own thoughts. You are now a stranger to the world and, most horrifyingly, to yourself.|
|17|Post-Mortem Realization: You have a sudden, clarifying moment of horror: you already died, long before this started. The corpse you've been piloting has finally reached its expiration date, and the rot is setting in. You must save each day or your body will crumble to dust, releasing your mind as a mad, tormented wraith.|

## Combat & Danger

### Attacks

Attacks always hit. Roll your weapon's die and do that much damage to an opponent, minus their armour.

When an attack is **impaired**, such is firing into cover, or fighting while grappled, roll d4 for damage regardless of weapon. When an attack is **enhanced** by a gambit or vulnerable opponent, roll d12. A **Blast** or **Cleave** attack affects all targets in a specific area.

Instead of an attack you can perform a risky gambit (like tripping or disarming an opponent).

### Hit Protection and damage

Damage is dealt first to a creature's Hit Protection (HP). This represents the creature's ability to avoid or shrug off real damage. Once HP is depleted, damage is dealt to STR.

After taking STR damage, the creature must make a STR save. If they succeed, they are still able to fight. If they fail, they take critical damage.

When a creature takes critical damage, they take an Injured Condition, and are incapacitated until tended to by an ally and take a short rest.

If an incapacitated creature is left untended for 1 hour, they die.

### Healing & Recovery

A moment to catch your breath restores all lost **Hit Protection (HP)**. Recovering lost attribute points requires a full week of uninterrupted rest in a safe place.

### Armor

Subtract your **Armor** value from any incoming damage. The maximum base Armor value is 3. Shields provide +1 Armor but require a free hand.

### Attribute score loss and death

If a creature has their **STR** reduced to zero, they are **dead**. If **DEX** is reduced to zero, they are **unable to move**. If **WIL** is reduced to zero, they are reduced to **insensibility**.

When your character **dies**, roll up a new one. The GM should introduce them as soon as possible. Getting back into the game quickly is more important than realism.

### Conditions

Conditions are negative effects. Each **Condition** must be placed in an inventory slot. 

Some Conditions have additional effects, which apply as long as the Condition remains in your inventory.

Conditions can only be removed by meeting their clear requirement—often a short, long or full rest.

### Deprivation & Fatigue

Lacking essentials like food or rest makes a character **Deprived**. A Deprived character cannot recover HP or attribute points. For each day they remain Deprived, they gain the **Fatigued** condition.

### Morale

NPCs and hirelings must make a **WIL save** to avoid fleeing. This check is triggered after they suffer their first casualty or when their group is reduced to half its original numbers. This rule does not apply to Player Characters.

## Growth & Advancement

### Hirelings

Hirelings are NPCs recruited to join the party. They can be created by rolling their attributes or by choosing a pre-made background that defines their skills and stats.

### Earning XP

Characters gain XP from the valuable treasures and boons they earn during an adventure. XP awards don't need to reflect monetary value; boons or fabled items have intangible worth. Each PC gets the full XP value of each treasure.

| Quality | XP | Examples |
|---|---|---|
| Poor | 0 | Bag of silver, used dagger, knucklebone dice |
| Normal | 1 | Bag of gold, gem, fine armor, magic scroll |
| Fabulous | 3 | Magic sword, giant diamond, mithral chainmail |
| Legendary | 10 | The Staff of Ord, a djinni's wish, a dragon hoard |

### Advancement

#### Class Levels
- XP Cost: [new level] x 5 XP
- Attribute increase: roll d20 once for each of your mouse’s STR, DEX and WIL. If a result is higher than the attribute’s current value, increase it by one. 
- Hit Protection Increase: Roll your class's hit points die and add it to your maximum HP
- Talent: Gain any talents listed on your class.

Notes:
- You can can 4 class levels max
- You can mix and match classes

#### Achievements
Achievements can always be achieved in the fiction, and does not cost XP, or can be purcahsed for 5 XP. 

When XP to gain a class level or unlock an achievement the fullfillment of any prequisites is retconned into the fiction.

