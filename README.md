# 超导文献数据库 (Superconductor Literature Database)

一个开放贡献的超导材料文献收集平台，通过元素周期表导航，快速查找特定元素组合的超导体文献。

## 核心功能

- **元素周期表交互界面** - 点击选择元素，查找相关超导体文献
- **文献上传与管理** - 通过DOI自动解析文献信息
- **文献截图存储** - 支持上传1-5张文献截图，优先结构图
- **搜索和筛选** - 按关键词、年份、期刊等条件搜索
- **引用格式导出** - 支持APS和BibTeX引用格式
- **开放贡献机制** - 任何人都可以上传文献，成为贡献者

## 快速开始

### 本地开发

**1. 环境要求**
- Python 3.10 或更高版本
- pip 包管理器

**2. 安装依赖**
```bash
pip install -r requirements.txt
```

**3. 本地部署方案**

#### 方案一：使用启动脚本（推荐用于测试完整流程）

```bash
# 直接运行启动脚本
./start.sh
```

**特点：**
- ✅ 自动检查并创建 data 目录
- ✅ 自动运行数据库初始化（已有数据会跳过）
- ✅ 显示详细的启动日志
- ✅ 模拟生产环境启动流程

**适用场景：**
- 第一次启动项目
- 测试完整的部署流程
- 验证数据库初始化是否正常

---

#### 方案二：直接启动开发服务器（推荐用于日常开发）

```bash
# 如果是首次启动，需先初始化数据库
python -m backend.init_db

# 启动开发服务器（带热重载）
uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
```

**特点：**
- ✅ 代码修改后自动重启服务器
- ✅ 启动速度快，无额外日志输出
- ✅ 直接使用本地 `data/superconductor.db`
- ✅ 不会每次都重新初始化数据库

**适用场景：**
- 日常开发和调试
- 频繁修改代码
- 需要快速看到代码效果

**参数说明：**
- `--host 0.0.0.0`：允许从任何IP访问（局域网访问）
- `--port 8000`：监听8000端口
- `--reload`：代码修改时自动重启（仅开发环境使用）

---

**4. 访问网站**
- 主页：http://localhost:8000
- API文档：http://localhost:8000/docs
- 本机访问：http://127.0.0.1:8000
- 局域网访问：http://你的IP:8000

### Docker 部署（完全模拟生产环境）

```bash
# 构建 Docker 镜像
docker build -t superconductor-app .

# 运行容器（挂载本地 data 目录）
docker run -p 8000:8000 -v $(pwd)/data:/app/data superconductor-app

# 查看容器日志
docker logs -f <容器ID>

# 停止容器
docker-compose down
```

## 部署到生产环境

**🚀 详细部署指南请查看：[DEPLOYMENT.md](DEPLOYMENT.md)**

支持的部署方式：
- ⭐ Railway 云平台（推荐，免费）
- Render 云平台（免费，有休眠限制）
- VPS 服务器（完全控制，需付费）
- Docker 容器化部署

**注意：GitHub Pages 和 Gitee Pages 不适用于本项目！** 它们只支持静态网站，而本项目需要后端服务器和数据库。

## 项目结构

```
conventional-sc-dataset/
├── backend/              # FastAPI 后端
│   ├── api/             # API 路由
│   ├── utils/           # 工具函数
│   ├── models.py        # 数据库模型
│   ├── schemas.py       # Pydantic 模式
│   ├── crud.py          # 数据库操作
│   ├── database.py      # 数据库配置
│   ├── init_db.py       # 数据库初始化
│   └── main.py          # 应用入口
├── frontend/            # 前端（HTML/CSS/JS）
│   ├── templates/       # HTML 模板
│   └── static/          # 静态文件
│       ├── css/         # 样式
│       └── js/          # JavaScript
├── data/                # 数据库文件
├── requirements.txt     # Python 依赖
├── Dockerfile          # Docker 配置
├── docker-compose.yml  # Docker Compose 配置
├── railway.json        # Railway 部署配置
├── DEPLOYMENT.md       # 详细部署指南
└── README.md           # 项目说明
```

## 使用说明

### 查找文献
1. 打开网站，看到元素周期表
2. 点击选择一个或多个元素
3. 点击"进入化合物页面"或按 Enter 键

### 上传文献
1. 进入元素组合页面
2. 点击"上传文献"按钮
3. 填写 DOI 编号
4. 选择文章类型（理论/实验）
5. 选择超导体类型（常规/非常规/未知）
6. 上传 1-5 张文献截图
7. 填写可选信息（化学式、晶体结构、贡献者信息）
8. 提交

### 搜索和筛选
- 关键词搜索：在搜索框输入标题、作者、化学式等关键词
- 年份筛选：设置最小和最大年份范围
- 一键复制引用格式（APS 或 BibTeX）

### 管理员审核文献

本项目支持完整的管理员审核系统。**详细的管理员系统文档请查看：[ADMIN_SYSTEM.md](ADMIN_SYSTEM.md)**

#### 快速开始审核流程：

**1. 创建超级管理员账户**

```bash
# 在项目目录下运行
python -m backend.create_superadmin
```

按提示输入邮箱、真实姓名和密码。

**2. 启动本地服务**

```bash
# 开发模式（推荐）
uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
```

**3. 登录管理员面板**

浏览器访问：**http://localhost:8000/admin/login**

**4. 审核文献**

登录后访问：**http://localhost:8000/admin/dashboard**

你可以：
- 📊 查看统计信息（待审核/已审核数量）
- 📋 查看待审核文献列表
- ✅ 点击"标记为已审核"确认文献质量
- 🔗 点击"查看原文"跳转到DOI链接查看完整论文
- 📝 查看审核历史：http://localhost:8000/admin/my-reviews

**5. 超级管理员功能**

访问：**http://localhost:8000/admin/superadmin**

- 审批其他管理员的申请
- 查看所有管理员列表
- 管理员统计信息

#### 管理员系统功能：

- ✅ 管理员注册与邮箱验证
- ✅ 超级管理员审批机制
- ✅ 文献审核状态追踪（已审核/未审核）
- ✅ 开放贡献（匿名上传标记为未审核）
- ✅ JWT 认证与权限控制

#### 重要页面：

| 页面 | 路径 | 说明 |
|------|------|------|
| 管理员登录 | `/admin/login` | JWT 登录界面 |
| 管理员注册 | `/admin/register` | 两步注册流程 |
| 文献审核面板 | `/admin/dashboard` | 审核待审核文献 |
| 超级管理员面板 | `/admin/superadmin` | 审批管理员申请 |
| 我审核的文献 | `/admin/my-reviews` | 查看审核历史 |

**注意事项：**
- ❌ 不要访问 `http://0.0.0.0:8000`（浏览器无法解析）
- ✅ 使用 `http://localhost:8000` 或 `http://127.0.0.1:8000`
- 如果8000端口被占用，可以改用其他端口：`--port 8888`

## 技术栈

**后端：**
- FastAPI - 现代 Python Web 框架
- SQLAlchemy - ORM 数据库工具
- SQLite - 轻量级数据库
- httpx - 异步 HTTP 客户端（DOI 解析）
- Pillow - 图片处理库

**前端：**
- HTML5 + CSS3 + JavaScript（原生）
- Bootstrap 5 - UI 框架
- 响应式设计，支持移动端

**部署：**
- Railway / Render - 云平台
- Docker - 容器化
- Nginx - 反向代理（VPS 部署）

## 数据库设计

- **elements** - 元素表（118个元素）
- **compounds** - 元素组合表（动态生成）
- **papers** - 文献表（DOI、元数据、分类标签）
- **paper_images** - 文献截图表（原图 + 缩略图）
- **compound_elements** - 元素组合关联表

## 贡献指南

欢迎通过 Issue 或 Pull Request 贡献代码！

**贡献方式：**
1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 开源协议

MIT License

## 联系方式

- 项目地址：https://gitee.com/mayuan_JLUPHY/conventional-sc-dataset
- 问题反馈：通过 Gitee Issues 提交

## 致谢

感谢所有为超导研究贡献文献的用户！

---

**⚡ 让超导文献查找变得简单高效！**
