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

|**Upgrade**|**Bulk**|**City (gp)**|**Town (gp)**|**Time**|**Notes**|
|---|---|---|---|---|---|
|**Ballista**|1–3|100 gp per Bulk|300 gp per Bulk|4 days per Bulk|Range 500' × Bulk.|
|**Ballista Bolt**|0.1|2.5 gp|5 gp|1 minute|~10' long.|
|**Ballista Cable, 100'**|0.1|1.5 gp|3 gp|1 minute|Attaches to bolts.|
|**Ballista Chain, 100'**|0.2|1 gp|2.5 gp|1 minute|Attaches to bolts. Halves range.|
|**Battering Ram**|2|200 gp|500 gp|2 days|Deals 1 Bulk damage per 5 Zest.|
|**Bladed Siding**|1|200 gp|300 gp|3 days|Cuts ships and boarders.|
|**Boarding Planks**|1|50 gp|100 gp|1 day|40' long. Retractable.|
|**Catapult**|3|400 gp|600 gp|1 week|Range 1,000'.|
|**Diving Bell-Tank**|2|75 gp|150 gp|2 days|Grants 2 hours of air. 100' chain.|
|**Fireproof Sails**|0|1 gp per yard|2.5 gp per yard|1 minute per yard|Leathery-brown look.|
|**Flamethrower**|2|750 gp|1,500 gp|1 month|100' cone. 2.5 gp of oil per shot. 2 minute reload.|
|**Gunwale Crossbow**|0.1|7.5 gp|20 gp|1 hour|Pintle-mounted.|
|**Ironclad Masts**|20% total Bulk|200 gp × Bulk|400 gp × Bulk|1 day per Bulk|+[Bulk / 5] Zest, rounded down.|
|**Reinforced Hull**|10% total Bulk|100 gp per Bulk|200 gp per Bulk|2 days per Bulk|Negates Naval Chaos effects on the hull.|
|**Smuggler's Holes**|1:1|20 gp per Bulk converted|10 gp per Bulk converted|1 day per Bulk converted|Hides an equal amount of bulk in the cargo hold.|