import { defineConfig } from 'vitepress'
import { autoGenerateSidebar, getFirstDocLink } from 'press-util'

export default defineConfig({

  base: '/tongpo/',

  title: '乐天工具库',
  description: '竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。',

  themeConfig: {
    logo: '/logo.png',
    nav: [{
      text: '文档',
      link: getFirstDocLink('doc')
    }],
    sidebar: autoGenerateSidebar()
  }
})
