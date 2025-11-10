# LifeBook - 跨平台日记应用

LifeBook是一款跨平台日记应用，支持Web、桌面端（Windows）和移动端（Android和iOS），提供统一的用户体验和数据同步功能。

## 项目结构

```
LifeBook/
├── docs/                      # 项目文档
│   ├── api/                   # API文档
│   ├── design/                # 设计文档
│   └── deployment/            # 部署文档
├── shared/                    # 共享代码
│   ├── core/                  # 核心业务逻辑
│   ├── api/                   # API调用
│   ├── store/                 # 状态管理
│   ├── utils/                 # 工具函数
│   ├── types/                 # TypeScript类型定义
│   └── constants/             # 常量定义
├── platforms/                 # 平台特定代码
│   ├── web/                   # Web应用
│   ├── desktop/               # 桌面应用
│   └── mobile/                # 移动应用
├── backend/                   # 后端服务
│   ├── src/                   # 源代码
│   ├── tests/                 # 测试代码
│   └── migrations/            # 数据库迁移
├── infrastructure/            # 基础设施代码
│   ├── docker/                # Docker配置
│   ├── kubernetes/            # K8s配置
│   └── ci-cd/                 # CI/CD配置
└── assets/                    # 资源文件
    ├── images/                # 图片资源
    ├── icons/                 # 图标资源
    └── fonts/                 # 字体资源
```

## 技术栈

### 前端
- **Web**: React + TypeScript + Vite
- **桌面端**: Electron + React
- **移动端**: React Native + TypeScript
- **状态管理**: Redux Toolkit + RTK Query
- **样式**: Styled-components

### 后端
- **语言**: Node.js + TypeScript
- **框架**: Express.js / Nest.js
- **数据库**: PostgreSQL + Redis
- **认证**: JWT + OAuth 2.0

### 部署
- **容器化**: Docker
- **编排**: Kubernetes
- **CI/CD**: GitHub Actions
- **云服务**: AWS / 阿里云

## 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0
- PostgreSQL >= 13.0
- Redis >= 6.0

### 安装依赖

```bash
# 安装共享模块依赖
cd shared
npm install

# 安装Web应用依赖
cd ../platforms/web
npm install

# 安装后端依赖
cd ../../backend
npm install
```

### 运行项目

```bash
# 启动后端服务
cd backend
npm run dev

# 启动Web应用
cd ../platforms/web
npm run dev
```

## 开发指南

请参考 [开发指南](docs/development.md) 了解详细的开发流程和规范。

## API文档

API文档可在 [API文档](docs/api/) 中查看，或启动后端服务后访问 `/api-docs`。

## 贡献指南

请参考 [贡献指南](CONTRIBUTING.md) 了解如何为项目贡献代码。

## 许可证

本项目采用 MIT 许可证，详情请参考 [LICENSE](LICENSE) 文件。