---
title: CLI 命令速查
description: Opencode 常用 CLI 命令、参数和使用场景速查表。
---

# CLI 命令速查

注意：不同版本命令可能存在差异。使用前请先执行 `opencode --help` 以当前版本输出为准。

## 基础命令

| 命令 | 说明 | 常见用途 |
| --- | --- | --- |
| `opencode` | 启动交互会话 | 日常协作入口 |
| `opencode --help` | 查看帮助 | 快速确认子命令 |
| `opencode <cmd> --help` | 查看某子命令参数 | 避免参数误用 |

## 推荐工作顺序

1. `opencode --help`：确认当前版本支持项
2. 启动会话并给出清晰任务边界
3. 执行验证命令（测试/构建/检查）
4. 汇总改动并人工审查

## 高效使用小技巧

- 把高频命令写进 `package.json scripts`
- 用 shell alias 简化长命令
- 把团队验证命令统一为同一入口（如 `pnpm verify`）

## 故障排查速查

| 现象 | 优先检查 |
| --- | --- |
| 命令无法启动 | Node 版本、安装路径、`PATH` |
| 模型调用失败 | API Key、网络、额度 |
| 输出质量不稳定 | 任务边界是否清晰、规则是否完善 |

## 关联阅读

- [配置详解](/core/config)
- [Rules 规则系统](/core/rules)
- [基本工作流](/guide/basic-workflow)
