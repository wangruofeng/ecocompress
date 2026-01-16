# GitHub Pages 部署指南

本项目已配置为自动部署到 GitHub Pages。

## 自动部署

项目使用 GitHub Actions 自动部署。当你推送代码到 `main` 分支时，会自动触发构建和部署流程。

### 首次部署设置

1. **启用 GitHub Pages**
   - 进入仓库的 Settings
   - 点击左侧的 Pages
   - 在 Source 部分，选择 "GitHub Actions"

2. **推送代码**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **查看部署状态**
   - 在仓库的 Actions 标签页查看部署进度
   - 部署完成后，访问 `https://wangruofeng.github.io/img_compress/`

## 本地测试 GitHub Pages 构建

在部署前，可以在本地测试 GitHub Pages 版本的构建：

```bash
# 构建生产版本（会自动使用 /img_compress/ base 路径）
npm run build

# 预览 GitHub Pages 版本
npm run preview:gh-pages
```

## 配置说明

- **Base Path**: `/img_compress/` - 在 `vite.config.ts` 中配置
- **构建输出**: `dist/` 目录
- **工作流文件**: `.github/workflows/deploy.yml`

## 注意事项

- 确保仓库是公开的（Public），或者你有 GitHub Pro 账户
- 首次部署可能需要几分钟时间
- 如果更改了仓库名称，需要更新 `vite.config.ts` 中的 `base` 路径
