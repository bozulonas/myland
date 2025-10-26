import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { usePagesPlugin } from 'vuepress-plugin-use-pages'
import { path } from '@vuepress/utils'

export default defineUserConfig({
  
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './'),
        },
      },
    },
  }),
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
      { text: 'Spell Invention', link: '/spell-invention.html' },
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
            { text: 'Time', link: '/rules#time' },
          ],
          class: 'custom-sidebar',
        },
        {
          text: 'Magic',
          collapsible: true,
          children: [
            { text: 'Vancian Magic', link: '/rules#vancian-magic' },
            { text: 'Spellburn', link: '/rules#spellburn' },
            { text: 'Spelling Error', link: '/rules#spelling-error' },
            { text: 'Spell Invention', link: '/rules#spell-invention' },
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

      '/classes.html': [
        {
          text: 'Classes',
          collapsible: true,
          children: [
            { text: 'Alchemist', link: '/classes.html#alchemist' },
            { text: 'Always Prepared', link: '/classes.html#always-prepared' },
            { text: 'Assassin', link: '/classes.html#assassin' },
            { text: 'Bard', link: '/classes.html#bard' },
            { text: 'Beastmaster', link: '/classes.html#beastmaster' },
            { text: 'Berserker', link: '/classes.html#berserker' },
            { text: 'Brawler', link: '/classes.html#brawler' },
            { text: 'Commander', link: '/classes.html#commander' },
            { text: 'Duellist', link: '/classes.html#duellist' },
            { text: 'Healer', link: '/classes.html#healer' },
            { text: 'Ironclad', link: '/classes.html#ironclad' },
            { text: 'Priest', link: '/classes.html#priest' },
            { text: 'Sharpshooter', link: '/classes.html#sharpshooter' },
            { text: 'Skilled', link: '/classes.html#skilled' },
            { text: 'Swashbuckler', link: '/classes.html#swashbuckler' },
            { text: 'Tactician', link: '/classes.html#tactician' },
            { text: 'Warrior', link: '/classes.html#warrior' },
            { text: 'Wizard', link: '/classes.html#wizard' },
          ]
        }
      ],

      '/spell-invention/': [
        {
          text: 'Spell Invention',
          collapsible: true,
          children: [],
        },
      ],
      '/gods': [
        {
          text: 'Gods',
          collapsible: true,
          children: [
            { text: 'Pantheon', link: '/gods.html#pantheon' },
            { text: 'Hubris Table', link: '/gods.html#hubris-table' },
            { text: 'Divine Domains Reference', link: '/gods.html#divine-domains-reference' },
            { text: 'Animal Domain', link: '/gods.html#animal-domain' },
            { text: 'Authority Domain', link: '/gods.html#authority-domain' },
            { text: 'Battle Domain', link: '/gods.html#battle-domain' },
            { text: 'Blood Domain', link: '/gods.html#blood-domain' },
            { text: 'Creation Domain', link: '/gods.html#creation-domain' },
            { text: 'Death Domain', link: '/gods.html#death-domain' },
            { text: 'Element Domain', link: '/gods.html#element-domain' },
            { text: 'Fate Domain', link: '/gods.html#fate-domain' },
            { text: 'Forge Domain', link: '/gods.html#forge-domain' },
            { text: 'Greed Domain', link: '/gods.html#greed-domain' },
            { text: 'Harvest Domain', link: '/gods.html#harvest-domain' },
            { text: 'Knowledge Domain', link: '/gods.html#knowledge-domain' },
            { text: 'Love Domain', link: '/gods.html#love-domain' },
            { text: 'Nobility Domain', link: '/gods.html#nobility-domain' },
            { text: 'Purity Domain', link: '/gods.html#purity-domain' },
            { text: 'Storm Domain', link: '/gods.html#storm-domain' },
            { text: 'Trickery Domain', link: '/gods.html#trickery-domain' },
            { text: 'Undeath Domain', link: '/gods.html#undeath-domain' },
            { text: 'Vengeance Domain', link: '/gods.html#vengeance-domain' },
            { text: 'Wilds Domain', link: '/gods.html#wilds-domain' },
          ]
        }
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
