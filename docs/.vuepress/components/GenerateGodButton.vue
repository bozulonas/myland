<template>
  <div>
    <button @click="generateGod" class="fantasy-button">Generate God</button>
    <div v-if="generated">
      <p>
        The {{ godType }} of
        <a :href="domain1Link">{{ displayDomain1 }}</a> &amp;
        <a :href="domain2Link">{{ displayDomain2 }}</a>,
        {{ question }}. Blessing: Gain Luck when you adhere to their mandate at your own expense.
      </p>
      <p><strong>Physical Form:</strong> {{ physicalForm }}</p>
      <p><strong>Additional Feature:</strong> {{ additionalFeature }}</p>
      <small>
        Note: The following tables are missing and are needed for complete generation:
        <code>Table 2-74</code>, <code>Table 2-61</code>, <code>Table 2-62</code>, <code>Table 2-60</code>, and <code>Table 2-79</code>.
      </small>
    </div>
  </div>
</template>

<script>
import { tables } from '../tableData.js';

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
        "Wolfs", "Bears", "Eagles", "Boar", "Serpents", "Stags", "Spiders",
        "Gryphons", "Manticores", "Chimeras"
      ],
      godTypes: [
        "godling", "demigod", "god", "forgotten god", "elder god", "fallen god"
      ],
      traits: [
        "Wrathful", "Petty", "Lustful", "Vengeful", "Magnanimous", "Fickle"
      ],
      questions: {
        "demigod": "how does their ambition show?",
        "godling": "they are obviously the bottom of the divine food chain, how can you tell?",
        "god": "they are famously {trait}, what affirmation have you experienced?",
        "forgotten god": "how did you find them?",
        "fallen god": "what instigated their downfall?",
        "elder god": "what gives away their age?"
      },
      generated: false,
      domain1: "",
      domain2: "",
      godType: "",
      displayDomain1: "",
      displayDomain2: "",
      question: "",
      physicalForm: "",
      additionalFeature: ""
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
    resolveTableReferences(text) {
      let resolvedText = text;
      const tableRegex = /\(Table (\d+-\d+)\)/g;
      let match;

      while ((match = tableRegex.exec(resolvedText)) !== null) {
        const tableId = match[1];
        const replacement = this.getRandomTableEntry(tableId);
        resolvedText = resolvedText.replace(match[0], replacement);
      }

      const browseRegex = /browse through Table (\d+-\d+)/g;
      while ((match = browseRegex.exec(resolvedText)) !== null) {
        const tableId = match[1];
        const replacement = this.getRandomTableEntry(tableId);
        resolvedText = resolvedText.replace(match[0], replacement);
      }

      return resolvedText;
    },

    getRandomTableEntry(tableId) {
      const table = tables[tableId];
      if (!table) {
        return `(Missing Table ${tableId})`;
      }
      const randomIndex = Math.floor(Math.random() * table.length);
      const randomRow = table[randomIndex];
      const keys = Object.keys(randomRow).filter(key => key !== 'Die Roll');
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      return this.resolveTableReferences(randomRow[randomKey]);
    },

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

      // Generate Physical Form and Additional Feature
      const table254 = tables["2-54"];
      let randomRow = table254[Math.floor(Math.random() * table254.length)];

      let physicalFormText = randomRow["Physical Form"];
      let additionalFeatureText = randomRow["Additional Feature"];

      if (physicalFormText.includes("Roll again for a result on this table")) {
          let newRandomRow;
          do {
              newRandomRow = table254[Math.floor(Math.random() * table254.length)];
          } while (newRandomRow["Physical Form"].includes("Roll again for a result on this table"));

          this.physicalForm = this.resolveTableReferences(newRandomRow["Physical Form"]) + ", but with wings";
          this.additionalFeature = this.resolveTableReferences(additionalFeatureText);
      } else {
          this.physicalForm = this.resolveTableReferences(physicalFormText);
          this.additionalFeature = this.resolveTableReferences(additionalFeatureText);
      }

      this.generated = true;
    }
  }
};
</script>