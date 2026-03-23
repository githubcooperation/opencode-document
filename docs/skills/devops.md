---
title: DevOps 类 Skills
description: DevOps 类 Skills 推荐与自动化实践。
---

# DevOps 类 Skills

DevOps 类 Skill 的目标是“降低人为失误 + 提升可观测性”。

## 1. 发布检查 Skill

- 名称与链接：`release-checker`（示例）
- 用途说明：发布前自动检查测试、构建、环境变量、数据库迁移风险。
- 使用示例：

```text
请执行发布前检查清单，
输出阻塞项、警告项和可发布结论。
```

- 适用场景：上线前最后一公里。
- 推荐评级：★★★★★

## 2. CI 失败诊断 Skill

- 名称与链接：`ci-debugger`（示例）
- 用途说明：读取 CI 日志后给出“最短修复路径”。
- 使用示例：

```text
请解析这个 GitHub Actions 失败日志，
给出根因排序和最小修复方案。
```

- 适用场景：流水线不稳定、排障耗时高。
- 推荐评级：★★★★☆

## 3. 多平台采集 Skill（Agent Reach）

- 名称与链接：[Agent Reach 安装指南](https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md)
- 用途说明：统一打通网页、GitHub、社媒等外部数据渠道。
- 适用场景：竞品跟踪、舆情监控、跨平台信息收集。
- 推荐评级：★★★★☆

## 落地建议

1. 先自动化“检查”，再自动化“执行”
2. 生产环境写操作必须保留人工审批
3. 对高风险步骤保留回滚脚本
