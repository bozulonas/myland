Here is a concise description of the architecture and plan, suitable for prompting an LLM agent:

### **Prompt for LLM Agent**

**Role:** You are an expert in VuePress 2 and front-end development.

**Task:** Generate the code and implementation steps for a dynamic, filterable list on a VuePress 2 website.

**Architecture:**
The architecture is **"Static Site Generation (SSG) with Client-Side Filtering."**
1.  **Data Source:** A folder of Markdown files (e.g., `/achievements/`). Each file uses YAML front matter to define its metadata, especially an array of `tags` (e.g., `tags: [Combat, Boss, Easy]`).
2.  **Build Process:** At build time, VuePress 2 parses all Markdown files and their front matter, making this data available to the client-side application.
3.  **Client-Side App:** The user's browser loads a static page that runs as a Single-Page Application (SPA). All filtering happens client-side in JavaScript.

**Implementation Plan:**
1.  Create a custom Vue component (e.g., `.vuepress/components/AchievementList.vue`).
2.  Inside this component's `<script setup>`, use the built-in VuePress 2 Client API.
3.  Import the `useRoutes` hook from `@vuepress/client`. This hook provides a reactive array of all page routes on the site.
4.  Create a `computed` property (e.g., `allAchievements`) that filters the `useRoutes` array to only include pages from the `/achievements/` directory. Each item in this array will contain the page's `path` and `frontmatter`.
5.  Create another `computed` property (e.g., `allTags`) that iterates over `allAchievements` to generate a `Set` of all unique tags, which is then converted to a sorted array.
6.  Create a `ref` (e.g., `selectedTags`) to store the user's currently selected filter tags.
7.  Create a final `computed` property (e.g., `filteredAchievements`) that filters `allAchievements` based on the `selectedTags` array.
8.  The component's `<template>` should:
    a.  Render a list of checkboxes or buttons based on the `allTags` array. Use `v-model` to bind these to the `selectedTags` ref.
    b.  Render the list of `filteredAchievements`, displaying the `frontmatter.title`, `frontmatter.description`, etc., for each item.