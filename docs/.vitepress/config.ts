import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Opencode 中文手册',
  description: '开源终端 AI 编程助手完全指南',
  sitemap: {
    hostname: 'https://opencode-doc.example.com',
  },

  srcExclude: ['**/specs/**'],

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '指南', link: '/guide/what-is-opencode' },
      { text: '核心', link: '/core/agents' },
      { text: '进阶', link: '/advanced/server-sdk' },
      { text: '食谱', link: '/cookbook/build-api' },
      { text: 'Skills', link: '/skills/' },
      { text: '参考', link: '/reference/cli-commands' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '入门指南',
          items: [
            { text: '什么是 Opencode', link: '/guide/what-is-opencode' },
            { text: '安装指南', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '第一个项目', link: '/guide/first-project' },
            { text: '基本工作流', link: '/guide/basic-workflow' },
          ],
        },
      ],
      '/core/': [
        {
          text: '核心概念',
          items: [
            { text: 'Agent 系统', link: '/core/agents' },
            { text: '模型与提供商', link: '/core/models' },
            { text: '配置详解', link: '/core/config' },
            { text: 'Rules 规则系统', link: '/core/rules' },
            { text: '内置命令', link: '/core/commands' },
          ],
        },
      ],
      '/advanced/': [
        {
          text: '进阶用法',
          items: [
            { text: 'Server 模式与 SDK', link: '/advanced/server-sdk' },
            { text: 'GitHub 集成', link: '/advanced/github-integration' },
            { text: 'IDE 集成', link: '/advanced/ide-integration' },
            { text: '自定义模型提供商', link: '/advanced/custom-providers' },
            { text: 'MCP 工具集成', link: '/advanced/mcp-tools' },
          ],
        },
      ],
      '/cookbook/': [
        {
          text: '实战食谱',
          items: [
            { text: '构建 API 项目', link: '/cookbook/build-api' },
            { text: '调试工作流', link: '/cookbook/debug-workflow' },
            { text: 'TDD 实践', link: '/cookbook/tdd-with-opencode' },
            { text: '团队协作', link: '/cookbook/team-workflow' },
          ],
        },
      ],
      '/skills/': [
        {
          text: '优秀 Skills 推荐',
          items: [
            { text: 'Skills 总览', link: '/skills/' },
            { text: 'GSD 快速上手', link: '/skills/get-shit-done' },
            { text: '编码类', link: '/skills/coding' },
            { text: '测试类', link: '/skills/testing' },
            { text: 'DevOps 类', link: '/skills/devops' },
            { text: '效率类', link: '/skills/productivity' },
          ],
        },
      ],
      '/reference/': [
        {
          text: '参考手册',
          items: [
            { text: 'CLI 命令速查', link: '/reference/cli-commands' },
            { text: '配置项速查', link: '/reference/config-options' },
            { text: '快捷键', link: '/reference/keyboard-shortcuts' },
            { text: '常见问题', link: '/reference/faq' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sst/opencode' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Opencode 中文社区',
    },

    outline: {
      label: '页面导航',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
  },
})
