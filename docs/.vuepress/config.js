import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { usePagesPlugin } from 'vuepress-plugin-use-pages'

export default defineUserConfig({
  
  bundler: viteBundler(),
  plugins: [
    usePagesPlugin(),
  ],
  theme: defaultTheme({
    // Navigation
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Rules', link: '/rules' },
      { text: 'Classes', link: '/classes' },
      { text: 'Gods', link: '/gods' },
      { text: 'Achievements', link: '/achievements.html' },
      { text: 'Marketplace', link: '/marketplace.html' },
    ],
    // Enable sidebar on all pages
    sidebar: {
      '/rules': [
        {
          text: 'Character Basics',
          collapsible: true,
          children: [
            { text: 'Attributes', link: '/rules#attributes' },
            { text: 'Saves', link: '/rules#saves' },
          ],
          class: 'custom-sidebar',
        },
        {
          text: 'Actions',
          collapsible: true,
          children: [
            { text: 'Leverage Time, Gear and Skill', link: '/rules#leverage-time-gear-and-skill' },
            { text: 'Raise the Stakes', link: '/rules#raise-the-stakes-aka-devils-bargain' },
            { text: 'Gambit', link: '/rules#gambit' },
          ],
          class: 'custom-sidebar',
        },
        {
          text: 'Core Mechanics',
          collapsible: true,
          children: [
            { text: 'Difficulty', link: '/rules#difficulty' },
            { text: 'Magic', link: '/rules#magic' },
            { text: 'Time', link: '/rules#time' },
          ],
          class: 'custom-sidebar',
        },
        {
          text: 'Combat & Danger',
          collapsible: true,
          children: [
            { text: 'Attacks', link: '/rules#attacks' },
            { text: 'Hit Protection and damage', link: '/rules#hit-protection-and-damage' },
            { text: 'Healing & Recovery', link: '/rules#healing-recovery' },
            { text: 'Armor', link: '/rules#armor' },
            { text: 'Attribute score loss and death', link: '/rules#attribute-score-loss-and-death' },
            { text: 'Conditions', link: '/rules#conditions' },
            { text: 'Deprivation & Fatigue', link: '/rules#deprivation-fatigue' },
            { text: 'Morale', link: '/rules#morale' },
          ],
          class: 'custom-sidebar',
        },
        {
          text: 'Growth & Advancement',
          collapsible: true,
          children: [
            { text: 'Hirelings', link: '/rules#hirelings' },
            { text: 'Earning XP', link: '/rules#earning-xp' },
            { text: 'Advancement', link: '/rules#advancement' },
          ],
          class: 'custom-sidebar',
        },
      ],
      '/classes/': [
        {
          text: 'Player Classes',
          children: [
            { text: 'Priest', link: '/classes/priest.html' },
            { text: 'Fighter', link: '/classes/fighter.html' },
            { text: 'Thief', link: '/classes/thief.html' },
            { text: 'Wizard', link: '/classes/wizard.html' },
          ],
          class: 'custom-sidebar',
        },
      ],

    },
  }),
  
  // site config
  lang: 'en-US',
  title: 'Myland',
  description: 'Official house rules website for our TTRPG',
  
  // Add footer with license
  head: [
    ['meta', { name: 'license', content: 'CC BY 4.0' }],
  ],
})
