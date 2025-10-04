import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    // Navigation
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Rules', link: '/rules' },
    ],
    // Enable sidebar on all pages
    sidebar: {
      '/rules': [
        {
          text: 'Character Basics',
          link: '/rules#character-basics',
          children: [
            { text: 'Attributes', link: '/rules#attributes' },
            { text: 'Healing & Recovery', link: '/rules#healing-recovery' },
            { text: 'Armor', link: '/rules#armor' },
          ],
        },
        {
          text: 'Actions',
          link: '/rules#actions',
          children: [
            { text: 'Leverage Time, Gear and Skill', link: '/rules#leverage-time-gear-and-skill' },
            { text: 'Raise the Stakes', link: '/rules#raise-the-stakes-aka-devils-bargain' },
            { text: 'Gambit', link: '/rules#gambit' },
          ],
        },
        {
          text: 'Core Mechanics',
          link: '/rules#core-mechanics',
          children: [
            { text: 'Difficulty', link: '/rules#difficulty' },
            { text: 'Magic', link: '/rules#magic' },
          ],
        },
        {
          text: 'Combat & Danger',
          link: '/rules#combat-danger',
          children: [
            { text: 'Attacks', link: '/rules#attacks' },
            { text: 'Hit Protection and damage', link: '/rules#hit-protection-and-damage' },
            { text: 'Scars', link: '/rules#scars' },
            { text: 'Attribute score loss and death', link: '/rules#attribute-score-loss-and-death' },
            { text: 'Conditions', link: '/rules#conditions' },
            { text: 'Deprivation & Fatigue', link: '/rules#deprivation-fatigue' },
            { text: 'Reactions', link: '/rules#reactions' },
            { text: 'Morale', link: '/rules#morale' },
          ],
        },
        {
          text: 'Growth & Advancement',
          link: '/rules#growth-advancement',
          children: [
            { text: 'Hirelings', link: '/rules#hirelings' },
            { text: 'Earning XP', link: '/rules#earning-xp' },
            { text: 'Advancement', link: '/rules#advancement' },
          ],
        },
      ],
    },
  }),
  
  // site config
  lang: 'en-US',
  title: 'Your Game\'s Name',
  description: 'Official rules website for our TTRPG',
})
