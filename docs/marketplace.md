---
title: Marketplace
---

# Marketplace

<MarketplaceAccordion :categories="categories" />

<script setup>
import { ref } from 'vue';
import { categories as marketplaceCategories } from '@/marketplaceData.js';

const categories = ref(marketplaceCategories);
</script>




# Ship Upgrades

|**Upgrade**|**Bulk**|**Cost**|**Time**|**Notes**|
|---|---|---|---|---|
|**Ballista**|1–3|Medium|4 days per Bulk|Range 500' × Bulk.|
|**Ballista Bolt**|0.1|Low|1 minute|~10' long.|
|**Ballista Cable, 100'**|0.1|Low|1 minute|Attaches to bolts.|
|**Ballista Chain, 100'**|0.2|Low|1 minute|Attaches to bolts. Halves range.|
|**Battering Ram**|2|High|2 days|Deals 1 Bulk damage per 5 Zest.|
|**Bladed Siding**|1|High|3 days|Cuts ships and boarders.|
|**Boarding Planks**|1|Medium|1 day|40' long. Retractable.|
|**Catapult**|3|High|1 week|Range 1,000'.|
|**Diving Bell-Tank**|2|Medium|2 days|Grants 2 hours of air. 100' chain.|
|**Fireproof Sails**|0|Low|1 minute per yard|Leathery-brown look.|
|**Flamethrower**|2|High|1 month|100' cone. 25T$ of oil per shot. 2 minute reload.|
|**Gunwale Crossbow**|0.1|Low|1 hour|Pintle-mounted.|
|**Ironclad Masts**|20% total Bulk|High|1 day per Bulk|+[Bulk / 5] Zest, rounded down.|
|**Reinforced Hull**|10% total Bulk|Medium|2 days per Bulk|Negates Naval Chaos effects on the hull.|
|**Smuggler's Holes**|1:1|Low|1 day per Bulk converted|Hides an equal amount of bulk in the cargo hold.|

