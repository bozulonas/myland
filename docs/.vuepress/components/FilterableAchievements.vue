<template>
  <div>
    <div class="tags-container">
      <button
        v-for="tag in allTags"
        :key="tag"
        @click="selectedTag = tag"
        :class="{ active: tag === selectedTag }"
        class="tag-button"
      >
        {{ tag }}
      </button>
    </div>

    <ul class="content-list">
      <li v-for="item in filteredItems" :key="item.id" class="content-item">
        <h3>{{ item.title }}</h3>
        <div v-html="item.content"></div>
        <div class="item-tags">
          <span v-for="tag in item.tags" :key="tag" class="item-tag">{{ tag }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import items from '../achievementsData.js';

const allTags = computed(() => {
  const tags = new Set();
  items.forEach(item => {
    if (item.tags) {
      item.tags.forEach(tag => tags.add(tag));
    }
  });
  return ['All', ...Array.from(tags).sort()];
});

const selectedTag = ref('All');

const filteredItems = computed(() => {
  if (selectedTag.value === 'All') {
    return items;
  }
  return items.filter(item => item.tags && item.tags.includes(selectedTag.value));
});
</script>

<style scoped>
.tags-container {
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.tag-button:hover {
  background-color: #e0e0e0;
  border-color: #bbb;
}

.tag-button.active {
  background-color: var(--c-brand);
  color: white;
  border-color: var(--c-brand-dark);
}

.content-list {
  list-style: none;
  padding: 0;
}

.content-item {
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fafafa;
}

.content-item h3 {
  margin-top: 0 !important;
  margin-block-start: 0 !important;
  padding-top: 0 !important;
  color: var(--c-brand);
}

.unlocks-section {
  margin-top: 1rem;
  font-style: italic;
  color: #555;
}

.item-tags {
  margin-top: 1rem;
}

.item-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin-right: 0.5rem;
  background-color: #e7e7e7;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
}
</style>