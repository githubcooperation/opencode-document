# Opencode 中文教程网站 - 设计规格

## 概述

为 [sst/opencode](https://github.com/sst/opencode)（开源终端 AI 编程助手）构建一个全面的中文参考手册网站。独立于官方英文文档，覆盖从新手到资深开发者的所有用户群体。

## 技术栈

- **框架**: VitePress 1.x（稳定版）
- **语言**: 中文为主
- **部署**: GitHub Pages + GitHub Actions CI/CD
- **包管理**: pnpm
- **Node.js**: 18+

## 网站结构

```
opencode-document/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts              # VitePress 主配置
│   │   └── theme/
│   │       ├── index.ts           # 主题扩展入口
│   │       └── style.css          # 自定义样式
│   ├── public/
│   │   ├── logo.svg               # 网站 logo
│   │   └── og-image.png           # 社交分享图
│   ├── index.md                   # 首页（Hero 布局）
│   │
│   ├── guide/                     # 🟢 入门指南（新手）
│   │   ├── what-is-opencode.md    # 什么是 Opencode
│   │   ├── installation.md        # 安装指南
│   │   ├── quick-start.md         # 快速开始
│   │   ├── first-project.md       # 第一个项目
│   │   └── basic-workflow.md      # 基本工作流
│   │
│   ├── core/                      # 🟡 核心概念（中级）
│   │   ├── agents.md              # Agent 系统（Build/Plan）
│   │   ├── models.md              # 模型与提供商配置
│   │   ├── config.md              # 配置详解
│   │   ├── rules.md               # Rules 规则系统
│   │   └── commands.md            # 内置命令
│   │
│   ├── advanced/                  # 🔴 进阶用法（高级）
│   │   ├── server-sdk.md          # Server 模式与 SDK
│   │   ├── github-integration.md  # GitHub 集成
│   │   ├── ide-integration.md     # IDE 集成
│   │   ├── custom-providers.md    # 自定义模型提供商
│   │   └── mcp-tools.md           # MCP 工具集成
│   │
│   ├── cookbook/                   # 📖 实战食谱（所有用户）
│   │   ├── build-api.md           # 用 Opencode 构建 API
│   │   ├── debug-workflow.md      # 调试工作流
│   │   ├── tdd-with-opencode.md   # TDD 实践
│   │   └── team-workflow.md       # 团队协作工作流
│   │
│   ├── skills/                    # ⭐ 优秀 Skills 推荐
│   │   ├── index.md               # Skills 总览与分类
│   │   ├── coding.md              # 编码类 skills
│   │   ├── testing.md             # 测试类 skills
│   │   ├── devops.md              # DevOps 类 skills
│   │   └── productivity.md        # 效率类 skills
│   │
│   └── reference/                 # 📋 参考手册（速查）
│       ├── cli-commands.md        # CLI 命令速查
│       ├── config-options.md      # 配置项速查
│       ├── keyboard-shortcuts.md  # 快捷键
│       └── faq.md                 # 常见问题
│
├── specs/                         # 设计文档（不发布）
│   └── *.md
├── package.json
└── .gitignore
```

> 注意：`specs/` 目录通过 VitePress `srcExclude` 排除，不会发布到网站。

## 内容分层策略

| 层级 | 目录 | 目标用户 | 内容风格 |
|------|------|----------|----------|
| 入门 | `guide/` | 新手开发者 | 手把手教学，终端截图丰富，步骤详细 |
| 核心 | `core/` | 有基础的用户 | 概念讲解 + 配置说明 + 使用场景 |
| 进阶 | `advanced/` | 资深开发者 | 深入原理 + 集成方案 + 架构决策 |
| 食谱 | `cookbook/` | 所有用户 | 按实际场景组织的端到端实战案例 |
| Skills | `skills/` | 所有用户 | 精选社区/第三方 opencode 扩展技能推荐，含安装和使用示例 |
| 参考 | `reference/` | 所有用户 | 速查手册，结构化表格为主 |

## 视觉设计

### 主题

- **默认深色主题**（契合终端工具调性），支持亮色切换
- 配色参考 Opencode 官方品牌色
- 代码块高亮显示终端命令和配置文件

### 首页布局

1. **Hero 区域**: 渐变背景 + 标题 "Opencode 中文手册" + 副标题 "开源终端 AI 编程助手完全指南" + CTA 按钮（快速开始 / 查看指南）
2. **特性卡片**: 4 个特性（多模型支持 / 隐私优先 / 开源免费 / 终端优先）
3. **内容导航**: 按用户水平分流的快速入口

### 导航结构

- **顶部导航**: 指南 | 核心 | 进阶 | 食谱 | Skills | 参考
- **侧边栏**: 当前章节的页面列表
- **页内目录**: 右侧显示当前页面标题层级

## Skills 推荐页面规范

每个推荐的 skill 条目包含：

- **名称与链接**: skill 名称 + GitHub/安装链接
- **用途说明**: 一句话描述这个 skill 做什么
- **安装方式**: 具体安装命令
- **使用示例**: 实际使用场景的代码/命令示例
- **适用场景**: 什么时候应该用这个 skill
- **推荐评级**: 简单的推荐度标记

## 内容规范

### 术语处理

英文技术术语保留原文不翻译，括号内注中文解释（仅首次出现时）：
- Agent（代理）、Provider（提供商）、Skill（技能扩展）、MCP、TUI 等
- 后续使用直接用英文原文

### 内容风格

- 口语化但专业，避免过度正式
- 代码示例以终端代码块为主（更易维护），必要时辅以截图
- 每篇文章 800-2000 字
- 文档跟随 opencode 最新稳定版本，不做版本化管理

### Frontmatter 规范

每篇 Markdown 文件包含：
```yaml
---
title: 页面标题
description: 一句话描述（用于 SEO 和搜索）
---
```

## VitePress 配置要点

```ts
// .vitepress/config.ts 关键配置
export default defineConfig({
  lang: 'zh-CN',
  title: 'Opencode 中文手册',
  description: '开源终端 AI 编程助手完全指南',
  sitemap: { hostname: 'https://opencode-doc.example.com' },
  srcExclude: ['**/specs/**'],

  themeConfig: {
    logo: '/logo.svg',
    nav: [...],           // 顶部导航
    sidebar: {...},       // 侧边栏分组
    socialLinks: [...],   // GitHub 链接
    search: {
      provider: 'local',  // 本地搜索（中文分词由 VitePress 内置 minisearch 处理）
    },
    footer: {...}
  }
})
```

## 首期交付范围

首期专注于完成核心框架和关键页面：

1. VitePress 项目搭建与配置
2. 首页设计与实现
3. `guide/` 入门指南全部 5 篇
4. `core/` 核心概念全部 5 篇
5. `skills/` 推荐页面框架 + 至少 1 个分类
6. `reference/` CLI 命令速查

后续迭代再补充 `advanced/`、`cookbook/` 和其余参考页面。
