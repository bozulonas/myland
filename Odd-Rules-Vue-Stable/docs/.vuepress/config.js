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
      { text: 'Classes', link: '/classes' },
    ],
    // Enable sidebar on all pages
    sidebar: {
      '/rules': [
        {
          text: 'Character Basics',
          collapsible: true,
          children: [
            { text: 'Attributes', link: '/rules#attributes' },
            { text: 'Healing & Recovery', link: '/rules#healing-recovery' },
            { text: 'Armor', link: '/rules#armor' },
          ],
        },
        {
          text: 'Actions',
          collapsible: true,
          children: [
            { text: 'Leverage Time, Gear and Skill', link: '/rules#leverage-time-gear-and-skill' },
            { text: 'Raise the Stakes', link: '/rules#raise-the-stakes-aka-devils-bargain' },
            { text: 'Gambit', link: '/rules#gambit' },
          ],
        },
        {
          text: 'Core Mechanics',
          collapsible: true,
          children: [
            { text: 'Difficulty', link: '/rules#difficulty' },
            { text: 'Magic', link: '/rules#magic' },
          ],
        },
        {
          text: 'Combat & Danger',
          collapsible: true,
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
          collapsible: true,
          children: [
            { text: 'Hirelings', link: '/rules#hirelings' },
            { text: 'Earning XP', link: '/rules#earning-xp' },
            { text: 'Advancement', link: '/rules#advancement' },
          ],
        },
      ],
      '/classes': [
        {
          text: 'Player Classes',
          collapsible: true,
          children: [
            { text: 'The Priest', link: '/classes#the-priest' },
            { text: 'The Sorcerer', link: '/classes#the-sorcerer' },
            { text: 'The Thief', link: '/classes#the-thief' },
            { text: 'The Wizard', link: '/classes#the-wizard' },
          ],
        },
        {
          text: 'Divine Domains',
          collapsible: true,
          children: [
            { text: 'Animal', link: '/classes#animal-domain' },
            { text: 'Authority', link: '/classes#authority-domain' },
            { text: 'Battle', link: '/classes#battle-domain' },
            { text: 'Blood', link: '/classes#blood-domain' },
            { text: 'Creation', link: '/classes#creation-domain' },
            { text: 'Death', link: '/classes#death-domain' },
            { text: 'Element', link: '/classes#element-domain' },
            { text: 'Fate', link: '/classes#fate-domain' },
            { text: 'Forge', link: '/classes#forge-domain' },
            { text: 'Greed', link: '/classes#greed-domain' },
            { text: 'Harvest', link: '/classes#harvest-domain' },
            { text: 'Knowledge', link: '/classes#knowledge-domain' },
            { text: 'Love', link: '/classes#love-domain' },
            { text: 'Nobility', link: '/classes#nobility-domain' },
            { text: 'Purity', link: '/classes#purity-domain' },
            { text: 'Storm', link: '/classes#storm-domain' },
            { text: 'Trickery', link: '/classes#trickery-domain' },
            { text: 'Undeath', link: '/classes#undeath-domain' },
            { text: 'Vengeance', link: '/classes#vengeance-domain' },
            { text: 'Wilds', link: '/classes#wilds-domain' },
          ],
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
