<template>
  <div>
    <button @click="generateSpell">Invent Spell</button>
    <div v-if="spell">
      <p><strong>Adjective:</strong> {{ spell.adjective }}</p>
      <p><strong>Material:</strong> {{ spell.material }}</p>
      <p><strong>Form:</strong> {{ spell.form }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spell: null,
      adjectives: [
        "Binding", "Flaming", "Charming", "Cryptic", "Freezing", "Unseen",
        "Slowing", "Silent", "Withering", "Seeping", "Mesmerising", "Oozing",
        "Shimmering", "Wrathful", "Dazzling", "Primal", "Ferocious", "Expanding",
        "Shielding", "Petrifying", "Piercing", "Screaming", "Grasping", "Swift",
        "Curious", "Hungry", "Jovial", "Thunderous", "Venomous", "Phantom",
        "Shadowy", "Majestic", "Frenzied", "Prismatic", "Sickening", "Terrible"
      ],
      materials: [
        "Oil", "Crystal", "Slime", "Light", "Doom", "Pain",
        "Earth", "Air", "Fungus", "Hex", "Smoke", "Energy",
        "Lore", "Fire", "Death", "Blight", "Sight", "Feeling",
        "Lightning", "Spirit", "Stasis", "Terror", "Mist", "Bone",
        "Ash", "Acid", "Sound", "Mind", "Vermin", "Flesh",
        "Thorn", "Vine", "Water", "Draught", "Wood", "Worm"
      ],
      forms: [
        "Beacon", "Ring", "Chains", "Eye", "Cascade", "Bubble",
        "Servant", "Crown", "Word", "Aura", "Shield", "Hand",
        "Vision", "Disk", "Fang", "Gust", "Swarm", "Dance",
        "Sentinel", "Web", "Gate", "Whispers", "Pillar", "Explosion",
        "Ray", "Guide", "Wall", "Wings", "Claw", "Mask",
        "Poison", "Embers", "Dark", "Wave", "Dream", "Rot"
      ]
    };
  },
  methods: {
    generateSpell() {
      const adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
      const material = this.materials[Math.floor(Math.random() * this.materials.length)];
      const form = this.forms[Math.floor(Math.random() * this.forms.length)];
      this.spell = { adjective, material, form };
    }
  }
};
</script>
