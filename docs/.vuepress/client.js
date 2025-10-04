import { defineClientConfig } from 'vuepress/client'
import LinkPopover from './components/LinkPopover.vue'
import './styles/index.scss'
import './styles/palette.scss'

export default defineClientConfig({
  enhance({ app }) {
    app.component('LinkPopover', LinkPopover)
  },
  setup() {
    // Component will be automatically mounted
  },
  rootComponents: [LinkPopover],
})
