<p align="left">
  <img alt="Duoasa 标志" src="assets/readme/duoasa-logo.png" width="120">
</p>

<h1 align="center">Duoasa Design</h1>

<p align="center">
  <a href="README.md">English</a>
  &middot;
  <strong>简体中文</strong>
</p>

<p align="center">
  一个使用 OpenAI Codex、WebGL 动效与规则驱动静态前端工作流构建的 AI 辅助个人设计网站。
</p>

<p align="center">
  <a href="https://design.duoasa.com"><img alt="线上网站" src="https://img.shields.io/badge/site-design.duoasa.com-111111?style=for-the-badge"></a>
  <img alt="使用 Codex 构建" src="https://img.shields.io/badge/built%20with-OpenAI%20Codex-111111?style=for-the-badge">
  <img alt="静态前端" src="https://img.shields.io/badge/frontend-HTML%20%2F%20CSS%20%2F%20JS-2F80ED?style=for-the-badge">
  <img alt="Cloudflare Workers" src="https://img.shields.io/badge/deploy-Cloudflare%20Workers-F38020?style=for-the-badge">
</p>

<p align="center">
  <a href="https://design.duoasa.com">线上网站</a>
  &middot;
  <a href="AGENTS.md">Agent 规则</a>
  &middot;
  <a href="#动效与开源参考">动效参考</a>
  &middot;
  <a href="#codex-协作工作流">Codex 工作流</a>
  &middot;
  <a href="#使用-codex-构建你自己的网站">构建你的网站</a>
  &middot;
  <a href="#部署">部署</a>
</p>

---

## 项目概览

Duoasa Design 是 XuChenChen / Duoasa 的个人设计网站，也是一个使用 [OpenAI Codex](https://openai.com/codex/) 构建的 AI 辅助设计到代码项目。

本仓库面向开发者与设计师社区开放，用于记录一名全栈设计工程师如何与编码 Agent 协作，将视觉方向、交互规则、动效参考与维护约束转化为可上线的静态网站。

## 这个项目探索什么

- 使用 Codex 将自然语言表达的设计意图转化为前端实现。
- 在利用 AI 执行代码任务的同时，始终由人类掌握设计判断。
- 将可复用的决策写入 Markdown 规则，让未来的 AI 会话能够保持页面结构与部署行为一致。
- 在不引入重型构建流程的情况下组合静态 HTML、CSS、JavaScript、WebGL 与动效库。
- 将视觉实验当作可维护的产品界面，而不是一次性演示。

## 关于 Duoasa

Duoasa 是一名全栈设计工程师，关注产品逻辑、视觉系统、交互节奏、动效设计、前端实现与 AI 辅助创作之间的交集。

这个网站的设计方向强调清晰的信息层级、精确的间距、响应式动效与具有表现力的氛围。代码在这里不仅用于发布静态页面，也是一种塑造视觉记忆的媒介。

## Codex 协作工作流

这个网站通过与 Codex 的持续迭代完成：

| 步骤 | 实践方式 |
| --- | --- |
| 1 | Duoasa 定义设计方向、内容边界、动效参考与编辑约束。 |
| 2 | Codex 在修改前读取现有代码，并遵循仓库已有的实现方式。 |
| 3 | 重复出现的决策会被写入 Markdown 规则，而不是只保留在对话中。 |
| 4 | 已完成的页面保持隔离，避免新的实验意外影响已发布页面。 |
| 5 | 人工检查视觉输出，再通过后续设计与代码迭代持续完善。 |

对于 AI 辅助前端工作，真正有效的方式不是一次性的提示词，而是一个循环：表达意图、实现、检查、沉淀规则、受控迭代。

## 规则文档

规则文档被视为源代码的一部分。它们把反复出现的设计、实现、检查与维护决策转化为可持续使用的指令，让未来的 AI 辅助开发会话不必每次都从当前页面猜测约束，也让关键决策能够跨越提示词、贡献者与后续改版继续生效。

根目录的 [AGENTS.md](AGENTS.md) 是整个工作流的入口。它相当于一个轻量的任务路由层：Codex 在修改文件之前先识别任务类型和受影响的界面，再读取对应的 Markdown 规则。更聚焦的规则文档则负责定义修改范围、受保护的实现模式、素材归属、必需的验证步骤，以及任务完成的判断条件。

| 文档 | 作用 | 适用时机 |
| --- | --- | --- |
| [AGENTS.md](AGENTS.md) | 本仓库的 Agent 工作流索引 | 每次修改仓库前，用于判断需要优先读取哪一份规则文档 |
| [项目案例页独立性规则](cases/README.md) | 保证二级项目页面彼此隔离并可安全编辑 | 创建、冻结、编辑或重构任意项目案例页之前 |
| [外部交互组件接入规范](docs/external-interaction-component-guidelines.md) | 规定外部动画或交互组件的导入、适配和验证方式 | 使用 WebGL、Canvas、Shader 背景、React Bits 导出代码、滚动效果、指针响应视觉或其他开源交互组件之前 |

这些文档共同构成了一套面向 Codex 的仓库级工作模型：

1. **任务路由。** `AGENTS.md` 在实现开始前决定哪些专项规则适用。
2. **范围保护。** 每份规则明确允许修改的文件与界面，减少对已完成页面的意外改动。
3. **保持不变量。** 页面隔离、渲染行为、源组件还原度、素材归属与缓存更新都以明确要求记录。
4. **定义验证。** 规则说明交付前必须在代码和实际页面中检查什么。
5. **沉淀新决策。** 当一次工作产生长期有效的约束时，可以把它从对话升级为新的规则文件，再通过 `AGENTS.md` 接入工作流。

当前规则覆盖范围包括：

- 已完成的详情页拥有独立的 HTML、CSS、JavaScript 与项目素材
- 页面级样式始终限制在当前项目页面作用域内
- 本地测试页面在被明确提升为正式内容前不会进入生产环境
- 外部组件在视觉调参前必须保持源组件默认值、渲染管线、色彩空间、Alpha 混合、DPR 与后处理逻辑
- 修改后的 CSS 或 JavaScript 需要重新加载时，必须更新缓存版本查询参数

这套结构可以持续扩展：新规则可以存放在 `docs/` 或某个功能专属目录中，再以明确的触发条件链接到 `AGENTS.md`。

添加规则文档时，应让人类与编码 Agent 都能快速理解它的契约。一份有效的规则通常需要回答五个问题：**它何时适用、负责哪些文件、哪些内容必须保持不变、如何验证工作、交付时必须报告什么？**

## 使用 Codex 构建你自己的网站

你可以把这个仓库作为使用 Codex 构建个人作品集或产品网站的参考。真正值得复用的不是 Duoasa 的视觉身份，而是小型静态技术栈、明确设计方向与仓库本地规则的组合方式。

### 1. 创建你的工作副本

在 GitHub 上 Fork 本仓库，或者克隆后连接到新的远程仓库：

```bash
git clone https://github.com/Duoasa/Duoasa-Design.git my-design-site
cd my-design-site
```

如果你希望保持轻量静态网站，可以继续使用现有 HTML、CSS 与 JavaScript 结构；也可以替换实现方式，但建议保留规则驱动的协作流程。

### 2. 替换项目身份与内容

更新首页文案、项目条目、联系方式、页面元信息、标志、网站图标和图片。项目专属素材应存放在独立目录，不要混入全局素材文件夹。同时移除不适用于你的网站的 Duoasa 内容与规则。

### 3. 把 `AGENTS.md` 改造成你的规则索引

先描述 Codex 在整个仓库中必须遵循的通用行为，再把专项任务路由到更聚焦的规则文档。建议优先保护网站中风险最高的区域，例如：

- 项目详情页的文件归属与页面隔离
- 共享设计变量与全局导航
- 外部动效或 WebGL 组件的接入方式
- 响应式断点与无障碍要求
- 素材存储、缓存版本、本地预览检查与部署流程

每条触发条件都应尽量具体。例如：“在导入或修改任何 Canvas、WebGL、Shader 或指针响应组件前，先阅读 `docs/motion-rules.md`。”

### 4. 给 Codex 一个范围明确的构建任务

要求 Codex 先读取规则索引，说明将要修改的界面，并保持范围之外的内容不变。第一个任务可以这样写：

```text
编辑前先阅读 AGENTS.md 及其路由到的规则文档。
用我的作品集资料替换首页身份与项目内容。
保留现有响应式行为和动效系统。
启动本地预览，检查桌面端与移动端布局，并总结所有修改过的文件。
除非规则明确要求，否则不要修改已经完成的项目页面。
```

进行视觉修改时，附上截图或参考图，并说明希望用户获得的体验。检查实际渲染结果后，把重复出现的修正要求写进规则文档，而不是依赖对话历史。

### 5. 在本地预览和检查

主站不需要构建步骤。在仓库根目录运行：

```bash
python3 -m http.server 4173
```

打开 `http://127.0.0.1:4173`，检查被修改的页面，并至少测试一个桌面端和一个移动端视口。确认内容、链接、响应式布局、动效降级、控制台错误，以及修改 CSS 或 JavaScript 后需要更新的缓存版本。

### 6. 有意识地部署

把你的 Fork 连接到偏好的托管平台。本仓库使用 Cloudflare Workers Static Assets，但静态输出也可以部署到 GitHub Pages、Cloudflare Pages、Netlify、Vercel 或其他静态托管服务。请把部署专属说明保留在仓库中，让 Codex 清楚哪些分支、命令和验证步骤可以安全使用。

最终的工作流应该保持简单：**描述意图，让 Codex 在明确规则内实现，检查真实页面，把长期有效的决策写入 Markdown，然后继续迭代。**

## 动效与开源参考

网站结合了手写交互代码与经过适配的开源动效、WebGL 参考。每个参考都根据静态网站结构、响应式布局、性能限制和 Duoasa Design 的视觉方向进行了调整。

| 层级 | 在本站中的用途 | 参考来源 |
| --- | --- | --- |
| 动效系统 | 入场动效、滚动显现、视差效果与滚动控制帧序列 | [GSAP](https://gsap.com/docs/v3/) + [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) |
| 创意组件参考 | Grid Scan、玻璃、终端、棱镜与多彩视觉实验 | [React Bits](https://www.reactbits.dev/) |
| Hero 氛围 | 首页 Hero 区域适配后的 Grid Scan Shader 背景 | [React Bits Grid Scan](https://www.reactbits.dev/backgrounds/grid-scan) |
| 玻璃实验 | 流体玻璃与基于 SVG Filter 的玻璃表面探索 | [Fluid Glass](https://www.reactbits.dev/components/fluid-glass)、[Glass Surface](https://www.reactbits.dev/components/glass-surface) |
| WebGL 组件 | 材质渲染与 3D 玻璃预览支持 | [Three.js](https://threejs.org/docs/)、[React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction)、[Drei](https://github.com/pmndrs/drei)、[maath](https://github.com/pmndrs/maath) |
| Shader 背景 | 终端与棱镜风格的轻量 WebGL 效果 | [OGL](https://github.com/oframe/ogl)、[Faulty Terminal](https://www.reactbits.dev/backgrounds/faulty-terminal)、[Prism](https://www.reactbits.dev/backgrounds/prism)、[Prismatic Burst](https://www.reactbits.dev/backgrounds/prismatic-burst) |

## 技术形态

| 范围 | 说明 |
| --- | --- |
| 前端 | 静态 HTML、CSS 与 JavaScript |
| 构建步骤 | 主站无需构建 |
| 素材 | 对稳定性要求较高的第三方素材采用本地化存储 |
| 页面模型 | 独立的项目案例页文件，便于 AI 辅助下安全迭代 |
| 部署 | [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) |

## 部署

线上网站：

[https://design.duoasa.com](https://design.duoasa.com)

Cloudflare Worker 配置位于 [wrangler.jsonc](wrangler.jsonc)。

推送到 `main` 分支会触发生产环境部署。

## 仓库用途

本仓库面向关注 AI 辅助界面开发的人开放，尤其适合正在探索编码 Agent 如何参与真实前端生产工作的设计师和开发者。

项目在技术栈上刻意保持小而轻，但在流程上足够具体：由人类保留设计判断，将约束明确写出，让 Agent 在约束内工作，并把代码库视为一份持续生长的协作记录。
