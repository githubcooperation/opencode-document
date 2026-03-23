---
title: 安装指南
description: 在 macOS、Linux、Windows 上安装并初始化 Opencode。
---

# 安装指南

这篇文档给你一条“最稳妥”的安装路径：先确认依赖，再安装，再验证。

## 1. 环境准备

请先确认以下工具可用：

- Node.js 18+
- `pnpm`（推荐）或 `npm`
- `git`

可以用下面命令检查：

```bash
node -v
pnpm -v
git --version
```

## 2. 安装 Opencode

以官方仓库为准，常见安装方式如下（示例）：

```bash
# 全局安装（示例）
pnpm add -g opencode

# 或在项目中使用
pnpm add -D opencode
```

如果你更偏向隔离环境，也可以在容器或远程开发机里安装。

## 3. 配置模型 Provider

首次使用前，需要配置模型提供商凭据（如 OpenAI、Anthropic、Gemini 或本地 Ollama）。

常见做法：

```bash
# 仅示例：按你使用的 provider 设置
export OPENAI_API_KEY="your_key_here"
```

建议把密钥放在安全的环境变量管理方案中，而不是硬编码进仓库。

## 4. 运行并验证

```bash
opencode --help
opencode
```

你应该能看到 CLI/TUI 启动成功，并可进入交互流程。

## 5. 常见安装问题

- 命令找不到：确认全局安装路径在 `PATH` 中
- Node 版本过低：切换到 Node 18+
- 网络依赖失败：使用镜像源或重试
- 模型调用报错：优先检查 API Key 与配额

## 下一步

安装完成后，继续看 [快速开始](/guide/quick-start)，我们会用一个最小任务把整套流程走通。
