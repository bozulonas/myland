<template>
  <div>
    <button @click="generateGod">Generate God</button>
    <div v-if="generated">
      <p>
        The {{ godType }} of
        <a :href="domain1Link">{{ displayDomain1 }}</a> and
        <a :href="domain2Link">{{ displayDomain2 }}</a>.
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
      generated: false,
      domain1: "",
      domain2: "",
      godType: "",
      displayDomain1: "",
      displayDomain2: ""
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
      this.godType = this.godTypes[Math.floor(Math.random() * this.godTypes.length)];

      let d1Index = Math.floor(Math.random() * this.domains.length);
      let d2Index;
      do {
        d2Index = Math.floor(Math.random() * this.domains.length);
      } while (d1Index === d2Index);

      this.domain1 = this.domains[d1Index];
      this.domain2 = this.domains[d2Index];

      this.displayDomain1 = this.domain1;
      this.displayDomain2 = this.domain2;

      if (this.isAnimalAndElement) {
        const animal = this.animals[Math.floor(Math.random() * this.animals.length)];
        const element = this.elements[Math.floor(Math.random() * this.elements.length)];

        if (this.domain1 === 'Animal') {
            this.displayDomain1 = animal;
            this.displayDomain2 = element;
        } else {
            this.displayDomain1 = element;
            this.displayDomain2 = animal;
        }
      }

      this.generated = true;
    }
  }
};
</script>