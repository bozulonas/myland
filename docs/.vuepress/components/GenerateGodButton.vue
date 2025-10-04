<template>
  <div>
    <button @click="generateGod" class="fantasy-button">Generate God</button>
    <div v-if="generated">
      <p>
        The {{ godType }} of
        <a :href="domain1Link">{{ displayDomain1 }}</a> &amp;
        <a :href="domain2Link">{{ displayDomain2 }}</a>,
        {{ question }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      domains: [
        "Animal", "Authority", "Battle", "Blood", "Creation", "Death",
        "Element", "Fate", "Forge", "Greed", "Harvest", "Knowledge",
        "Love", "Nobility", "Purity", "Storm", "Trickery", "Undeath",
        "Vengeance", "Wilds"
      ],
      elements: [
        "Fire", "Water", "Earth", "Air", "Ice", "Lightning", "Ooze",
        "Magma", "Radiance", "Shadow", "Uranium"
      ],
      animals: [
        "Wolf", "Bear", "Eagle", "Boar", "Serpent", "Stag", "Spider",
        "Gryphon", "Manticore", "Chimera"
      ],
      godTypes: [
        "godling", "demigod", "god", "forgotten God", "elder God", "fallen God"
      ],
      traits: [
        "Wrathful", "Petty", "Lustful", "Vengeful", "Magnanimous", "Fickle"
      ],
      questions: {
        "demigod": "How does their ambition show?",
        "godling": "They are obviously the bottom of the divine food chain, how can you tell?",
        "god": "They are famously {trait}, what affirmation have you experienced?",
        "forgotten God": "How did you find them?",
        "fallen God": "What instigated their downfall?",
        "elder God": "What gives away their age?"
      },
      generated: false,
      domain1: "",
      domain2: "",
      godType: "",
      displayDomain1: "",
      displayDomain2: "",
      question: ""
    };
  },
  computed: {
    domain1Link() {
      return `/gods.html#${this.domain1.toLowerCase()}-domain`;
    },
    domain2Link() {
      return `/gods.html#${this.domain2.toLowerCase()}-domain`;
    }
  },
  methods: {
    generateGod() {
      // Select God Type
      this.godType = this.godTypes[Math.floor(Math.random() * this.godTypes.length)];

      // Generate Question based on God Type
      let questionText = this.questions[this.godType];
      if (this.godType === 'god') {
        const trait = this.traits[Math.floor(Math.random() * this.traits.length)];
        questionText = questionText.replace('{trait}', trait);
      }
      this.question = questionText;

      // Select two different domains
      let d1Index = Math.floor(Math.random() * this.domains.length);
      let d2Index;
      do {
        d2Index = Math.floor(Math.random() * this.domains.length);
      } while (d1Index === d2Index);

      const d1 = this.domains[d1Index];
      const d2 = this.domains[d2Index];

      this.domain1 = d1;
      this.domain2 = d2;

      // Handle subtypes for Animal and Element domains
      if (d1 === 'Animal') {
        this.displayDomain1 = this.animals[Math.floor(Math.random() * this.animals.length)];
      } else if (d1 === 'Element') {
        this.displayDomain1 = this.elements[Math.floor(Math.random() * this.elements.length)];
      } else {
        this.displayDomain1 = d1;
      }

      if (d2 === 'Animal') {
        this.displayDomain2 = this.animals[Math.floor(Math.random() * this.animals.length)];
      } else if (d2 === 'Element') {
        this.displayDomain2 = this.elements[Math.floor(Math.random() * this.elements.length)];
      } else {
        this.displayDomain2 = d2;
      }

      this.generated = true;
    }
  }
};
</script>