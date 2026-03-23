---
title: Server 模式与 SDK
description: 基于官方文档梳理 OpenCode Server 模式与 SDK 的落地用法。
---

# Server 模式与 SDK

这页面向“要把 OpenCode 变成服务能力”的开发者。你会看到两条主线：

1. Server mode：把 OpenCode 作为可连接服务运行
2. SDK：在你自己的程序里调用 OpenCode

## 什么时候需要 Server 模式

适合以下场景：

- 团队想把 OpenCode 接入内部工具链（工单系统、发布系统、审查系统）
- 你希望多客户端连接同一个服务实例
- 你需要可编排、可审计的自动化入口

## 什么时候只用 SDK

如果你只是想在单个应用里调用 OpenCode，不一定要单独部署服务。SDK 更直接：

- 业务代码里直接发起调用
- 由你自己控制调用时机与上下文边界
- 更容易和现有后端服务整合

## Server 模式的典型结构

```text
Client (CLI/IDE/Internal App)
  -> OpenCode Server
    -> Model Provider
    -> MCP Tools
    -> Repo/Workspace
```

建议把“服务权限边界”单独定义：

1. 可访问目录
2. 可执行命令范围
3. 可调用 MCP 工具白名单
4. 日志与审计保留策略

## 安全落地建议

1. 先在内网或受控环境部署，不要直接公网裸露
2. 把密钥放环境变量，不写死在仓库
3. 先用最小权限规则，再按需放开
4. 对高风险命令设置人工确认

## 与工作流结合

在服务化场景下，推荐固定流程：

1. 先 Plan（仅生成计划）
2. 再 Build（按计划执行）
3. 最后 verify（测试 + 构建 +人工确认）

这能明显降低“自动化误操作”的风险。

## 最小实践路径

1. 先本地 CLI 跑通
2. 再引入 SDK 做单服务调用
3. 最后才做多客户端 Server 编排

不要一开始就上“全自动多代理平台”，先把可观测和回滚链路补齐。

## 参考来源

- OpenCode Docs: [Server](https://opencode.ai/docs/server/)
- OpenCode Docs: [SDK](https://opencode.ai/docs/sdk/)
