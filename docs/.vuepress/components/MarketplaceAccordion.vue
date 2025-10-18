<template>
  <div class="marketplace-accordion">
    <div v-for="category in categories" :key="category.category" class="accordion-item" :data-open="isOpen(category.category)">
      <button @click="toggle(category.category)" class="accordion-trigger">
        {{ category.category }}
      </button>
      <div class="accordion-content">
        <div v-html="category.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      openCategories: [],
    };
  },
  methods: {
    toggle(category) {
      const index = this.openCategories.indexOf(category);
      if (index > -1) {
        this.openCategories.splice(index, 1);
      } else {
        this.openCategories.push(category);
      }
    },
    isOpen(category) {
      return this.openCategories.includes(category);
    },
  },
};
</script>

<style scoped>
.marketplace-accordion {
  margin-top: 20px;
  border-radius: 4px;
  overflow: hidden;
  border: 2px solid var(--c-border-dark);
  box-shadow: 0 4px 12px rgba(139, 46, 31, 0.1);
}

.accordion-item {
  border-bottom: 2px solid var(--c-border-dark);
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-trigger {
  background-color: var(--c-bg-light);
  border: none;
  padding: 15px 20px;
  width: 100%;
  text-align: left;
  font-family: 'IM Fell English', serif;
  font-size: 1.5rem;
  font-weight: normal;
  color: var(--c-brand);
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s ease;
}

.accordion-trigger:hover {
  background-color: var(--c-bg);
}

.accordion-trigger::after {
  content: '+';
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  font-weight: normal;
  color: var(--c-accent-dark);
  transition: transform 0.3s ease;
}

.accordion-item[data-open="true"] .accordion-trigger::after {
  transform: translateY(-50%) rotate(45deg);
}

.accordion-content {
  padding: 0;
  background-color: transparent;
  transition: max-height 0.25s ease-in-out, padding 0.25s ease-in-out;
  max-height: 0;
  overflow: hidden;
}

.accordion-item[data-open="true"] .accordion-content {
  max-height: 1000px; /* Adjust as needed */
  padding: 0 20px 20px 20px;
  transition: max-height 0.35s ease-in-out, padding 0.35s ease-in-out;
}

</style>
