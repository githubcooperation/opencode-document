---
title: 常见问题
description: OpenCode 常见问题、成因与处理建议。
---

# 常见问题

## 1. OpenCode 和普通 AI 聊天工具有什么区别？

OpenCode 面向“可执行开发流程”，不只是问答。它更适合：

1. 读项目上下文
2. 改代码并验证
3. 产出可审查变更

## 2. 为什么我感觉前几步很好，后面越来越跑偏？

这通常是上下文漂移。建议：

1. 任务拆小
2. 每步重申边界
3. 必要时用上下文压缩（如 `/compact`）

## 3. 要不要让 OpenCode 一次性改完整个功能？

不建议。中大型需求推荐分批：

1. 计划
2. 第一批改动
3. 验证
4. 第二批改动

## 4. 模型怎么选？

按任务选：

1. 小修复：低延迟模型
2. 复杂设计：高推理模型
3. 成本敏感：预算档模型

## 5. 如果输出不稳定，优先改什么？

先改任务描述，不是先换模型。

1. 明确范围
2. 明确禁改区域
3. 明确验收命令

## 6. 如何避免高风险操作？

1. 开启最小权限
2. 对高风险命令保留人工确认
3. 强制先 plan 再 build

## 7. 团队怎么落地最快？

先做四件事：

1. 项目规则文档
2. 提示词模板
3. PR 模板
4. 统一验证命令

## 8. OpenCode 和 MCP 是什么关系？

MCP 是工具接入协议。OpenCode 通过 MCP 调用外部能力，但你仍需做好权限治理。

## 参考来源

- OpenCode Docs: [FAQ](https://opencode.ai/docs/faq/)
- OpenCode Docs: [Configuration](https://opencode.ai/docs/configuration/)
- OpenCode Docs: [MCP Servers](https://opencode.ai/docs/mcp-servers/)
