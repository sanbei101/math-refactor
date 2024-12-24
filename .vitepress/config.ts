import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "数学重构计划",
  description: "圆曲不联立,导数不求导,高考不报名...",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '不等式',
        collapsed: true,
        items: [
          {
            text: '极化恒等式',
            link: '/不等式/极化恒等式'
          }
        ]

      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sanbei101' }
    ]
  }
})
