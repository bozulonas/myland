<template>
  <div class="marketplace-accordion">
    <div v-for="category in categories" :key="category.category" class="accordion-item">
      <button @click="toggle(category.category)" class="accordion-trigger">
        {{ category.category }}
      </button>
      <div v-if="isOpen(category.category)" class="accordion-content">
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
}

.accordion-item {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}

.accordion-trigger {
  background-color: #f7f7f7;
  border: none;
  padding: 10px 15px;
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
}

.accordion-content {
  padding: 15px;
}
</style>
