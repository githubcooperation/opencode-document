---
title: GSD（get-shit-done）用户指南（重构版）
description: 参考 gsd-user-guide.html 的信息架构重排，覆盖完整内容并提供可落地的逐步引导。
---

# GSD（get-shit-done）用户指南（重构版）

> 这版按你给的 `gsd-user-guide.html` 结构重排：先给清晰导航和角色引导，再给完整命令、配置、排障、恢复速查。

## 快速导航

- [概览](#概览)
- [核心特性](#核心特性)
- [产品经理指南（零技术背景）](#产品经理指南零技术背景)
- [5 分钟上手（开发者）](#5-分钟上手开发者)
- [项目生命周期](#项目生命周期)
- [规划流程](#规划流程)
- [执行与验证](#执行与验证)
- [UI 设计契约](#ui-设计契约)
- [验证架构](#验证架构)
- [Backlog 与 Threads](#backlog-与-threads)
- [Workstreams](#workstreams)
- [安全机制](#安全机制)
- [命令参考](#命令参考)
- [配置参考](#配置参考)
- [使用示例](#使用示例)
- [故障排除](#故障排除)
- [恢复速查](#恢复速查)
- [文件结构](#文件结构)

## 概览

GSD（get-shit-done）是一套面向 Claude Code、OpenCode、Gemini CLI、Codex、Copilot、Cursor、Antigravity 的结构化工作流系统。它不是“多几个指令”的命令包，而是覆盖以下闭环的执行体系：

1. 需求澄清
2. 研究与规划
3. 并行执行
4. 验证与交付
5. 里程碑审计

官方来源：

1. 项目仓库：[gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done)
2. 官方 README：[README.md](https://github.com/gsd-build/get-shit-done/blob/main/README.md)
3. 官方 User Guide：[docs/USER-GUIDE.md](https://github.com/gsd-build/get-shit-done/blob/main/docs/USER-GUIDE.md)

> [!TIP]
> GSD 解决的是 context rot（上下文越长质量越掉）。核心做法是把“思考”和“执行”拆到不同阶段，让每一步都有可审计产物。

## 核心特性

1. 阶段化流程：`discuss -> plan -> execute -> verify -> ship`
2. 多 Agent 协作：研究员、规划器、执行器、验证器分工
3. 验证前置（Nyquist）：在计划阶段映射测试覆盖
4. UI 设计契约：前端 phase 先锁定视觉与交互约束
5. 并行波次执行：按依赖分 wave 并行推进
6. 防护机制：路径穿越、注入检测、workflow guard

## 产品经理指南（零技术背景）

你如果是 PM 或业务负责人，不需要会写代码。你只要抓住这三件事：

1. 说清楚需求
2. 决定方向和优先级
3. 验收结果

### 你负责什么 vs AI 负责什么

你负责：

1. 提供需求文档
2. 回答关键业务问题
3. 定义验收标准
4. 检查交付是否达标

AI 负责：

1. 需求结构化
2. 技术方案与计划
3. 编码与测试
4. 验证与交付文档

### PM 五步法（照着走）

1. 整理需求文档
说明：用自然语言写即可，重点写清“目标、角色、规则、边界、验收标准”。

2. 交给开发或直接交给 AI
说明：建议让开发执行命令，你参与讨论与验收。

3. 参加 discuss 阶段
说明：这是你影响结果最大的环节。

4. 验收交付
说明：按需求逐条验收，不要只看“能运行”。

5. 持续迭代
说明：新增需求用 `add-phase`，小问题用 `quick`。

### PM 需求模板（可直接复制）

```markdown
# 项目名称

## 项目背景
为什么要做，解决什么问题。

## 核心功能
1. 功能 A
2. 功能 B
3. 功能 C

## 用户角色
- 角色 1
- 角色 2

## 业务规则
- 规则 1
- 规则 2

## 非功能需求
- 性能
- 安全
- 兼容性

## 验收标准
- 标准 1
- 标准 2
```

## 5 分钟上手（开发者）

### 第 1 步：安装

```bash
npx get-shit-done-cc@latest
```

### 第 2 步：验证安装

1. Claude Code / Gemini / Copilot / Antigravity：`/gsd:help`
2. OpenCode：`/gsd-help`
3. Codex：`$gsd-help`

### 第 3 步：跑第一条完整链路

```text
/gsd:new-project
/gsd:discuss-phase 1
/gsd:plan-phase 1
/gsd:execute-phase 1
/gsd:verify-work 1
/gsd:ship 1
```

### 第 4 步：推荐运行方式（Claude Code）

```bash
claude --dangerously-skip-permissions
```

### 第 5 步：保持更新

```bash
npx get-shit-done-cc@latest
```

## 项目生命周期

完整生命周期如下：

1. `/gsd:new-project`
2. 对每个 phase 执行：`discuss -> ui-phase(可选) -> plan -> execute -> verify -> ship`
3. `/gsd:audit-milestone`
4. `/gsd:complete-milestone`
5. 新里程碑：`/gsd:new-milestone`

## 规划流程

`/gsd:plan-phase N` 的核心机制：

1. 并行研究（栈、功能、架构、坑点）
2. 汇总研究产物 `RESEARCH.md`
3. 规划器读 `PROJECT/REQUIREMENTS/CONTEXT/RESEARCH`
4. plan-checker 最多 3 次循环校验
5. 输出可执行计划

## 执行与验证

`/gsd:execute-phase N`：

1. 按依赖拆 wave
2. wave 内并行执行
3. 执行后由 verifier 对齐 phase 目标

`/gsd:verify-work N`：

1. 进行 UAT
2. 自动诊断问题
3. 产出验证记录

## UI 设计契约

### `/gsd:ui-phase N`

用途：在执行前锁定设计契约，避免 UI 质量漂移。

关键点：

1. 检测设计系统状态（如 shadcn）
2. 只问未决策项
3. 输出 `N-UI-SPEC.md`
4. 按 6 维校验：文案、视觉、颜色、排版、间距、安全

### `/gsd:ui-review N`

用途：执行后进行 6 维审计，输出前三优先修复项。

## 验证架构

### Nyquist 验证层

目标：在 `plan-phase` 就完成“需求 -> 自动验证命令”映射。

结果：

1. 每条需求有验证路径
2. 缺失验证命令的计划会被拦截
3. 产物：`VALIDATION.md`

关闭方式：`workflow.nyquist_validation: false`

### `/gsd:validate-phase N`

用途：对老 phase 或历史项目补齐验证覆盖。

流程：扫描 -> 找缺口 -> 计划补齐 -> 生成测试 -> 更新 `VALIDATION.md`。

## Backlog 与 Threads

### Backlog 停车场（999.x）

```text
/gsd:add-backlog "GraphQL API layer"
/gsd:add-backlog "Mobile responsive"
```

### Seeds（带触发条件）

```text
/gsd:plant-seed "Add real-time collab when WebSocket infra is in place"
```

### Threads（跨会话上下文）

```text
/gsd:thread
/gsd:thread fix-deploy-key-auth
/gsd:thread "Investigate TCP timeout"
```

## Workstreams

适用：同一仓库并行推进多个方向，但不想互相污染 planning 状态。

命令：

1. `/gsd:workstreams create <name>`
2. `/gsd:workstreams switch <name>`
3. `/gsd:workstreams list`
4. `/gsd:workstreams complete <name>`

## 安全机制

官方 v1.27 的防护重点：

1. 路径穿越防护：输入路径必须在项目内
2. Prompt Injection 检测：拦截典型注入模式
3. runtime hooks：写入 planning 时扫描风险
4. CI 安全扫描：对 agent/workflow/commands 扫描

## 命令参考

### Core Workflow

| 命令 | 用途 | 何时用 |
| --- | --- | --- |
| `/gsd:new-project` | 初始化项目（问题、研究、需求、路线图） | 新项目起点 |
| `/gsd:new-project --auto @idea.md` | 从文档自动初始化 | 已有 PRD |
| `/gsd:discuss-phase [N]` | 固化偏好 | plan 前 |
| `/gsd:ui-phase [N]` | 生成 UI 契约 | 前端 phase |
| `/gsd:plan-phase [N]` | 研究 + 计划 + 校验 | execute 前 |
| `/gsd:execute-phase <N>` | 并行执行 | 计划通过后 |
| `/gsd:verify-work [N]` | UAT + 自动诊断 | 执行后 |
| `/gsd:ship [N]` | 创建 PR | 验证通过后 |
| `/gsd:fast <text>` | 超小任务直达 | 低复杂度修改 |
| `/gsd:next` | 自动给下一步 | 不确定流程时 |
| `/gsd:ui-review [N]` | UI 审计 | 前端交付后 |
| `/gsd:audit-milestone` | 里程碑审计 | 收尾前 |
| `/gsd:complete-milestone` | 归档与版本完成 | 审计通过后 |
| `/gsd:new-milestone [name]` | 新里程碑 | 下一版本开始 |

### Navigation

| 命令 | 用途 |
| --- | --- |
| `/gsd:progress` | 查看当前状态 |
| `/gsd:resume-work` | 恢复会话上下文 |
| `/gsd:pause-work` | 保存交接信息 |
| `/gsd:session-report` | 会话报告 |
| `/gsd:help` | 命令帮助 |
| `/gsd:update` | 更新 |
| `/gsd:join-discord` | 社区 |

### Phase Management

| 命令 | 用途 |
| --- | --- |
| `/gsd:add-phase` | 追加 phase |
| `/gsd:insert-phase [N]` | 插入紧急 phase |
| `/gsd:remove-phase [N]` | 删除 future phase |
| `/gsd:list-phase-assumptions [N]` | 查看系统假设 |
| `/gsd:plan-milestone-gaps` | 审计缺口转 phase |
| `/gsd:research-phase [N]` | 仅研究 |

### Brownfield & Utilities

| 命令 | 用途 |
| --- | --- |
| `/gsd:map-codebase` | 现有项目映射 |
| `/gsd:quick` | 带保障的快速任务 |
| `/gsd:debug [desc]` | 系统化调试 |
| `/gsd:forensics` | 法医诊断 |
| `/gsd:add-todo [desc]` | 记待办 |
| `/gsd:check-todos` | 看待办 |
| `/gsd:settings` | 调参 |
| `/gsd:set-profile <profile>` | 模型档位切换 |
| `/gsd:reapply-patches` | 恢复本地补丁 |

### Code Quality & Review

| 命令 | 用途 |
| --- | --- |
| `/gsd:review --phase N` | 跨 AI CLI 评审 |
| `/gsd:pr-branch` | 干净 PR 分支 |
| `/gsd:audit-uat` | UAT 债务审计 |

### Backlog & Threads

| 命令 | 用途 |
| --- | --- |
| `/gsd:add-backlog <desc>` | backlog 停车 |
| `/gsd:review-backlog` | 提升/保留/删除 |
| `/gsd:plant-seed <idea>` | 种子想法 |
| `/gsd:thread [name]` | 持续线程 |

## 配置参考

配置位置：`.planning/config.json`

官方完整 schema：

```json
{
  "mode": "interactive",
  "granularity": "standard",
  "model_profile": "balanced",
  "planning": {
    "commit_docs": true,
    "search_gitignored": false
  },
  "workflow": {
    "research": true,
    "plan_check": true,
    "verifier": true,
    "nyquist_validation": true,
    "ui_phase": true,
    "ui_safety_gate": true,
    "research_before_questions": false,
    "discuss_mode": "standard",
    "skip_discuss": false
  },
  "resolve_model_ids": "anthropic",
  "hooks": {
    "context_warnings": true,
    "workflow_guard": false
  },
  "git": {
    "branching_strategy": "none",
    "phase_branch_template": "gsd/phase-{phase}-{slug}",
    "milestone_branch_template": "gsd/{milestone}-{slug}",
    "quick_branch_template": null
  }
}
```

### 配置要点速览

| 配置 | 选项 | 默认 | 含义 |
| --- | --- | --- | --- |
| `mode` | `interactive` `yolo` | `interactive` | 决策自动化程度 |
| `granularity` | `coarse` `standard` `fine` | `standard` | phase 粒度 |
| `model_profile` | `quality` `balanced` `budget` `inherit` | `balanced` | 成本/质量策略 |
| `workflow.discuss_mode` | `standard` `assumptions` | `standard` | 讨论模式 |
| `workflow.skip_discuss` | `true` `false` | `false` | 是否跳过 discuss |

## 使用示例

### 示例 1：全流程新项目

```text
/gsd:new-project
/gsd:discuss-phase 1
/gsd:ui-phase 1
/gsd:plan-phase 1
/gsd:execute-phase 1
/gsd:verify-work 1
/gsd:ship 1
/gsd:next
/gsd:audit-milestone
/gsd:complete-milestone
```

### 示例 2：已有代码库

```text
/gsd:map-codebase
/gsd:new-project
```

### 示例 3：快速修 bug

```text
/gsd:quick
> Fix login button not responding on mobile Safari
```

### 示例 4：会话恢复

```text
/gsd:progress
# or
/gsd:resume-work
```

## 故障排除

1. Project already initialized
说明：`.planning/PROJECT.md` 已存在。

2. 长会话质量下降
说明：先清上下文，再 `resume-work`。

3. 计划偏离预期
说明：先 `discuss-phase`，或看 `list-phase-assumptions`。

4. execute 产出 stubs
说明：计划过大，改小粒度。

5. 不知道下一步
说明：`progress` 或 `next`。

6. 成本高
说明：`set-profile budget` 并关掉部分 workflow 开关。

7. 非 Claude runtime 模型分配
说明：用 `resolve_model_ids: "omit"`，必要时配 `model_overrides`。

8. 更新后本地改动没了
说明：`/gsd:reapply-patches`。

9. 并行执行锁冲突
说明：升级版本或关 `parallelization.enabled`。

10. Windows `EPERM` 安装错误
说明：更新版本，绕开受保护目录。

## 恢复速查

| 问题 | 建议命令 |
| --- | --- |
| 丢上下文 | `/gsd:resume-work` 或 `/gsd:progress` |
| phase 做错 | 回滚后重做 plan |
| 需改范围 | `/gsd:add-phase` `/gsd:insert-phase` `/gsd:remove-phase` |
| 里程碑有缺口 | `/gsd:plan-milestone-gaps` |
| 功能故障 | `/gsd:debug "desc"` |
| 状态疑似损坏 | `/gsd:forensics` |
| 快速定点修复 | `/gsd:quick` |
| 成本过高 | `/gsd:set-profile budget` + `/gsd:settings` |
| 需要汇报 | `/gsd:session-report` |
| 不知下一步 | `/gsd:next` |

## 文件结构

```text
.planning/
  PROJECT.md
  REQUIREMENTS.md
  ROADMAP.md
  STATE.md
  config.json
  MILESTONES.md
  HANDOFF.json
  research/
  reports/
  todos/
    pending/
    done/
  debug/
    resolved/
  codebase/
  phases/
    XX-phase-name/
      XX-YY-PLAN.md
      XX-YY-SUMMARY.md
      CONTEXT.md
      RESEARCH.md
      VERIFICATION.md
      XX-UI-SPEC.md
      XX-UI-REVIEW.md
  ui-reviews/
```

## 最后建议

1. 新团队先用 `interactive + balanced + standard`。
2. 先用好 discuss，再追求执行速度。
3. 小任务优先 `quick/fast`，大任务用完整 phase。
4. 每个 phase 都做 `verify-work`。
5. 里程碑前固定跑 `audit-milestone`。
