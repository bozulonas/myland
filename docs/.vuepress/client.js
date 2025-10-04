import { defineClientConfig } from 'vuepress/client'
import LinkPopover from './components/LinkPopover.vue'
import GenerateGodButton from './components/GenerateGodButton.vue'
import './styles/index.scss'
import './styles/palette.scss'

export default defineClientConfig({
  enhance({ app }) {
    app.component('LinkPopover', LinkPopover)
    app.component('GenerateGodButton', GenerateGodButton)
  },
  setup() {
    // Component will be automatically mounted
  },
  rootComponents: [LinkPopover],
})
