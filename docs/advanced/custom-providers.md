---
title: 自定义模型提供商
description: 如何在 OpenCode 中接入与治理自定义 Provider（提供商）。
---

# 自定义模型提供商

OpenCode 支持多 Provider。团队要稳定落地，关键不是“能连上”，而是“可治理”。

## 接入目标

1. 默认模型可用
2. 备用模型可切换
3. 敏感任务可指定更强模型
4. 成本有上限策略

## 接入前检查清单

1. API Key 管理方案（环境变量或密钥系统）
2. 区域网络与代理策略
3. 速率限制与重试策略
4. 成本预算告警

## 配置策略建议

1. 个人开发：一个默认模型 + 一个备用模型
2. 团队项目：按场景分模型档位

- 低成本：日常小改
- 平衡：常规功能
- 高质量：架构和高风险重构

3. 把 Provider 配置写进项目文档，避免成员口口相传

## 常见接入问题

### 问题 1：能连通但响应不稳定

做法：

- 缩小上下文
- 明确输出格式
- 切换备用模型

### 问题 2：成本飙升

做法：

- 控制任务粒度
- 关闭不必要的长上下文
- 给不同任务绑定不同模型档位

### 问题 3：模型行为差异大

做法：

- 在规则中固定输出模板
- 用同一验证命令做客观验收

## 合规与安全建议

1. 生产项目避免直接暴露主密钥
2. 不把密钥写进仓库和截图
3. 对高敏场景优先本地或受控 Provider

## 参考来源

- OpenCode Docs: [Providers](https://opencode.ai/docs/providers/)
- OpenCode Docs: [Models](https://opencode.ai/docs/models/)
- OpenCode Docs: [Configuration](https://opencode.ai/docs/configuration/)
