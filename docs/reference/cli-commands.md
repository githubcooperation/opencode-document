---
title: CLI 命令速查
description: OpenCode CLI 与会话命令速查（含常见使用场景）。
---

# CLI 命令速查

说明：不同版本命令可能变化，请以当前版本 `opencode --help` 和 `/help` 为准。

## 启动命令

| 命令 | 说明 | 常见用途 |
| --- | --- | --- |
| `opencode` | 启动交互会话 | 日常协作入口 |
| `opencode --help` | CLI 参数帮助 | 确认可用子命令 |
| `opencode serve` | 启动服务模式 | 服务化接入 |

## 会话内高频命令

| 命令 | 说明 |
| --- | --- |
| `/help` | 查看会话命令 |
| `/init` | 初始化当前项目上下文 |
| `/model` 或 `/models` | 查看/切换模型 |
| `/permissions` | 查看或调整权限策略 |
| `/share` | 分享会话 |
| `/compact` | 压缩上下文 |
| `/memory` | 查看记忆/上下文相关信息 |
| `/stats` | 查看会话统计 |
| `/upgrade` | 检查更新 |
| `/exit` | 退出会话 |

## 推荐使用顺序

1. `opencode`
2. `/init`
3. 先 plan 再 build
4. 运行验证命令（test/lint/build）
5. 输出变更摘要与风险

## 故障速查

| 现象 | 优先检查 |
| --- | --- |
| 无法启动 | Node 版本、安装路径、PATH |
| 模型调用失败 | API Key、网络、模型权限 |
| 输出不稳定 | 任务边界是否明确、规则是否清晰 |

## 参考来源

- OpenCode Docs: [Commands](https://opencode.ai/docs/commands/)
