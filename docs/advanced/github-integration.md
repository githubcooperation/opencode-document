---
title: GitHub 集成
description: 把 OpenCode 稳定接入 GitHub 工作流：Issue、PR、Review 与 CI。
---

# GitHub 集成

这页目标是让 OpenCode 在 GitHub 流程里“可控地提效”，而不是变成不受控机器人。

## 你可以用 OpenCode 做什么

1. 根据 Issue 生成分步计划
2. 在限定文件范围内实现改动
3. 自动跑测试并总结结果
4. 生成 PR 描述与风险清单
5. 在 code review 前做一次自检

## 推荐协作模式

### 模式 A：开发者本地驱动（推荐）

- 开发者在本地仓库运行 OpenCode
- 由开发者发起 commit/PR
- CI 仍是最终门禁

优点：最容易落地，责任边界清晰。

### 模式 B：CI/机器人驱动

- 由服务账号在 CI 中触发自动修改
- 通过 PR 回流审查

优点：自动化强；缺点：治理复杂度更高。

## 一个实用的 PR 流程

1. 从 Issue 提取需求边界
2. 让 OpenCode 先出计划，不改代码
3. 确认计划后再执行
4. 执行后必须跑：测试、lint、build
5. PR 模板中附：

- 变更文件列表
- 验证命令与结果
- 已知风险与回滚方案

## 常见风险与防护

1. 一次改动过大
做法：限制单次改动范围，拆小 PR。

2. 生成代码与团队规范不一致
做法：把规则写进项目 instructions / rules。

3. 过度依赖模型结论
做法：强制测试 + 人工 review。

## 结合 GitHub Actions 的建议

- 用 CI 执行测试与质量门禁
- 不要在未审查情况下自动 merge
- 对高风险目录（迁移、权限、计费）加额外审批

## 参考来源

- OpenCode Docs: [GitHub](https://opencode.ai/docs/github/)
