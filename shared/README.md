# 共享代码模块

本目录包含跨平台共享的代码模块，包括核心业务逻辑、API调用、状态管理等。

## 目录结构

```
shared/
├── core/                  # 核心业务逻辑
│   ├── diary/            # 日记相关逻辑
│   ├── user/             # 用户相关逻辑
│   └── auth/             # 认证相关逻辑
├── api/                   # API调用
│   ├── client.ts         # API客户端配置
│   ├── auth.ts           # 认证API
│   ├── diaries.ts        # 日记API
│   └── users.ts          # 用户API
├── store/                 # 状态管理
│   ├── index.ts          # Store配置
│   ├── slices/           # Redux切片
│   └── middleware/       # 中间件
├── utils/                 # 工具函数
│   ├── date.ts           # 日期处理
│   ├── validation.ts     # 表单验证
│   └── encryption.ts     # 加密工具
├── types/                 # TypeScript类型定义
│   ├── api.ts            # API类型
│   ├── diary.ts          # 日记类型
│   └── user.ts           # 用户类型
├── constants/             # 常量定义
│   ├── api.ts            # API常量
│   ├── app.ts            # 应用常量
│   └── ui.ts             # UI常量
├── components/            # 共享组件
│   ├── Button/           # 按钮组件
│   ├── Input/            # 输入框组件
│   └── Modal/            # 模态框组件
└── hooks/                 # 自定义Hook
    ├── useAuth.ts        # 认证Hook
    ├── useDiary.ts       # 日记Hook
    └── useApi.ts         # API Hook
```

## 使用说明

共享模块作为独立的npm包发布，各平台通过npm安装使用：

```bash
npm install @lifebook/shared
```

在平台代码中导入：

```typescript
import { createDiary } from '@lifebook/shared/core/diary';
import { useAuth } from '@lifebook/shared/hooks';
import { Button } from '@lifebook/shared/components';
```

## 开发指南

1. 修改共享代码后，需要运行构建命令：

```bash
npm run build
```

2. 发布新版本：

```bash
npm version patch/minor/major
npm publish
```

3. 在各平台项目中更新依赖：

```bash
npm install @lifebook/shared@latest
```