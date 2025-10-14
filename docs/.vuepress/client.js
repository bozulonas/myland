import { defineClientConfig } from 'vuepress/client'
import LinkPopover from './components/LinkPopover.vue'
import GenerateGodButton from './components/GenerateGodButton.vue'
import FilterableAchievements from './components/FilterableAchievements.vue'
import './styles/index.scss'
import './styles/palette.scss'

export default defineClientConfig({
  enhance({ app }) {
    app.component('LinkPopover', LinkPopover)
    app.component('GenerateGodButton', GenerateGodButton)
    app.component('FilterableAchievements', FilterableAchievements)
  },
  setup() {
    // Component will be automatically mounted
  },
  rootComponents: [LinkPopover],
})
