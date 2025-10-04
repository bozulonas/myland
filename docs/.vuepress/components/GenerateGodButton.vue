<template>
  <div>
    <button @click="generateGod">Generate God</button>
    <div v-if="generated">
      <p>Your new god has the following domains:</p>
      <ul>
        <li><a :href="domain1Link">{{ domain1 }}</a></li>
        <li><a :href="domain2Link">{{ domain2 }}</a></li>
      </ul>
      <div v-if="isAnimalAndElement">
        <p>Your god is a god of {{ animal }} and {{ element }}.</p>
      </div>
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
      generated: false,
      domain1: "",
      domain2: "",
      animal: "",
      element: ""
    };
  },
  computed: {
    domain1Link() {
      return `/divine-domains.html#${this.domain1.toLowerCase()}-domain`;
    },
    domain2Link() {
      return `/divine-domains.html#${this.domain2.toLowerCase()}-domain`;
    },
    isAnimalAndElement() {
      const domains = [this.domain1, this.domain2].sort();
      return domains[0] === "Animal" && domains[1] === "Element";
    }
  },
  methods: {
    generateGod() {
      let d1Index = Math.floor(Math.random() * this.domains.length);
      let d2Index;
      do {
        d2Index = Math.floor(Math.random() * this.domains.length);
      } while (d1Index === d2Index);

      this.domain1 = this.domains[d1Index];
      this.domain2 = this.domains[d2Index];

      if (this.isAnimalAndElement) {
        this.animal = this.animals[Math.floor(Math.random() * this.animals.length)];
        this.element = this.elements[Math.floor(Math.random() * this.elements.length)];
      } else {
        this.animal = "";
        this.element = "";
      }

      this.generated = true;
    }
  }
};
</script>