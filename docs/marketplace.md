---
title: Marketplace
---

# Marketplace

<MarketplaceAccordion :categories="categories" />

<script setup>
import { ref } from 'vue';
import { categories as marketplaceCategories } from './.vuepress/marketplaceData.js';

const categories = ref(marketplaceCategories);
</script>
