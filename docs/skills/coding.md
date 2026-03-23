---
title: 编码类 Skills
description: 面向日常开发的高价值 Skills 推荐与使用示例。
---

# 编码类 Skills

本文先给出一个“可直接落地”的真实推荐，再给出 3 类常用编码场景模板。

## 0. 强烈推荐：GSD（get-shit-done）

- 名称与链接：[gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done)
- 用途说明：把复杂开发任务拆成“讨论 -> 规划 -> 执行 -> 验证 -> 提交”的闭环流程。
- 安装方式：

```bash
npx get-shit-done-cc@latest
```

- 使用示例：

```text
1) 先初始化项目（new-project）
2) 再讨论当前 phase 的实现偏好（discuss-phase）
3) 再做规划（plan-phase）
4) 最后执行与验证（execute-phase / verify-work）
```

- 适用场景：跨文件功能开发、重构、版本迭代、多阶段需求推进。
- 推荐评级：★★★★★
- 新手入口：直接看 [GSD 快速上手指南](/skills/get-shit-done)（已按中文用户习惯简化）。

## 1. 重构辅助 Skill

- 名称与链接：`refactor-helper`（示例）
- 用途说明：在不改变行为的前提下，拆分函数、提取模块并同步更新调用方。
- 安装方式：

```bash
# 示例命令，请替换成实际仓库安装方式
codex skill add refactor-helper
```

- 使用示例：

```text
请使用 refactor-helper，对 src/services/order.ts 做小步重构：
先提取纯函数，再补充测试，不要改对外接口。
```

- 适用场景：遗留代码可读性差、函数过长、重复逻辑多。
- 推荐评级：★★★★☆

## 2. 类型修复 Skill

- 名称与链接：`typescript-guard`（示例）
- 用途说明：批量修复类型错误，优先收敛 `any` 与空值风险。
- 安装方式：

```bash
codex skill add typescript-guard
```

- 使用示例：

```text
用 typescript-guard 处理 src/modules/payment 下的类型错误，
要求通过 typecheck，禁止改动 API 响应结构。
```

- 适用场景：TypeScript 项目迁移、历史包袱清理。
- 推荐评级：★★★★★

## 3. 文档同步 Skill

- 名称与链接：`api-doc-sync`（示例）
- 用途说明：在接口变更后自动补齐 README 或接口文档差异。
- 安装方式：

```bash
codex skill add api-doc-sync
```

- 使用示例：

```text
完成 users API 修改后，用 api-doc-sync 更新 docs/api/users.md，
并输出变更摘要。
```

- 适用场景：接口迭代频繁、文档经常滞后。
- 推荐评级：★★★★☆

## 落地建议

先挑一个团队痛点最明显的场景试点，例如“类型修复”或“重构”，跑 1 到 2 周后再扩展到其他 Skill。
