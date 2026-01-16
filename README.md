<div align="center">

# 🖼️ EcoCompress

**一个安全、快速、完全在浏览器中运行的图片压缩工具**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**🌐 [在线演示](https://wangruofeng.github.io/ecocompress/) | [GitHub 仓库](https://github.com/wangruofeng/ecocompress)**

**Language / 语言 / 語言**: [English](#english) | [简体中文](#简体中文) | [繁體中文](#繁體中文)

</div>

---

## 简体中文

### ✨ 特性

- 🔒 **完全客户端处理** - 所有图片处理都在浏览器中完成，不会上传到任何服务器，保护您的隐私
- 🎨 **实时预览对比** - 支持拖拽分割线对比原图和压缩后的图片效果
- 🎯 **图片质量进度条** - 带高亮选中部分的进度条，根据质量值显示不同颜色（绿色/黄色/红色）
- 🚀 **批量处理** - 支持同时压缩多张图片，提高工作效率
- 🎛️ **灵活配置** - 可自定义图片质量、输出格式和最大宽度
- 🌍 **多语言支持** - 支持英文、简体中文和繁体中文，默认简体中文
- 💾 **格式转换** - 支持 JPG、PNG、WebP 格式之间的转换
- 📱 **响应式设计** - 完美适配桌面端和移动端设备
- ⚡ **高性能** - 基于 Canvas API，压缩速度快，资源占用低
- 🌐 **在线访问** - 已部署到 GitHub Pages，可直接在线使用

### 🎬 功能演示

#### 主要功能
- **拖拽上传** - 支持点击或拖拽图片文件
- **实时压缩** - 上传后自动开始压缩处理
- **对比预览** - 点击预览按钮，通过拖拽分割线对比压缩效果
- **批量下载** - 一键下载所有压缩后的图片

#### 预览对比功能
预览界面支持通过拖拽竖直分割线来对比原图和压缩后的图片：
- 分割线左侧显示压缩后的图片
- 分割线右侧显示原图
- 默认分割线位于中间位置（50%）
- 支持鼠标和触摸拖拽操作

### 🚀 快速开始

#### 环境要求

- Node.js >= 20.19.0 或 >= 22.12.0
- npm 或 yarn

#### 安装步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/wangruofeng/ecocompress.git
   cd ecocompress
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **构建生产版本**
   ```bash
   npm run build
   ```

5. **预览生产构建**
   ```bash
   npm run preview
   ```

### 📖 使用说明

#### 基本使用

1. **上传图片**
   - 点击上传区域或直接拖拽图片文件
   - 支持 JPG、PNG、WebP 格式
   - 可同时上传多张图片

2. **调整压缩设置**
   - **图片质量**：选择高、中、低质量，或自定义质量值（0.1-1.0）
   - **输出格式**：选择 JPEG、PNG 或 WebP
   - **最大宽度**：设置图片的最大宽度（像素）

3. **预览和下载**
   - 点击图片卡片上的预览按钮查看对比效果
   - 拖拽分割线调整对比位置
   - 点击下载按钮保存压缩后的图片
   - 使用"下载全部"按钮批量下载

#### 压缩设置说明

- **JPEG**：最适合照片，文件体积小，但不支持透明背景
- **PNG**：支持透明背景，适合图标和图形，但文件体积较大
- **WebP**：现代格式，体积最小，质量最好，但部分旧浏览器不支持

### 🛠️ 技术栈

- **前端框架**: React 19.2.3
- **开发语言**: TypeScript 5.8.2
- **构建工具**: Vite 6.2.0
- **UI 图标**: Lucide React
- **样式方案**: Tailwind CSS（通过 Vite 配置）

### 📁 项目结构

```
ecocompress/
├── components/          # React 组件
│   ├── Dropzone.tsx    # 文件上传组件
│   ├── Header.tsx      # 页面头部
│   ├── ImageCard.tsx   # 图片卡片组件
│   ├── PreviewModal.tsx # 预览对比模态框
│   ├── SettingsPanel.tsx # 设置面板
│   └── Icon.tsx        # 图标组件
├── contexts/           # React Context
│   └── LanguageContext.tsx # 多语言上下文
├── locales/           # 国际化文件
│   └── translations.ts # 翻译文本
├── utils/             # 工具函数
│   ├── compressor.ts  # 图片压缩逻辑
│   └── helpers.ts     # 辅助函数
├── types.ts           # TypeScript 类型定义
├── App.tsx            # 主应用组件
├── index.tsx          # 应用入口
└── vite.config.ts     # Vite 配置
```

### 🤝 贡献指南

我们欢迎所有形式的贡献！请遵循以下步骤：

1. **Fork 本仓库**
2. **创建特性分支** (`git checkout -b feature/AmazingFeature`)
3. **提交更改** (`git commit -m 'Add some AmazingFeature'`)
4. **推送到分支** (`git push origin feature/AmazingFeature`)
5. **开启 Pull Request**

#### 贡献建议

- 🐛 修复 Bug
- ✨ 添加新功能
- 📝 改进文档
- 🎨 优化 UI/UX
- 🌍 添加更多语言支持
- ⚡ 性能优化

### 📝 开发说明

#### 代码规范

- 使用 TypeScript 进行类型检查
- 遵循 React Hooks 最佳实践
- 组件采用函数式组件
- 使用 Tailwind CSS 进行样式设计

#### 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

### 📄 许可证

本项目采用 [MIT License](LICENSE) 许可证。

### 🙏 致谢

- [React](https://reactjs.org/) - UI 框架
- [Vite](https://vitejs.dev/) - 构建工具
- [Lucide React](https://lucide.dev/) - 图标库
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - 图片处理

### 📧 联系方式

如有问题或建议，请通过以下方式联系：

- 📮 提交 [Issue](https://github.com/wangruofeng/ecocompress/issues)
- 💬 开启 [Discussion](https://github.com/wangruofeng/ecocompress/discussions)

### 📋 Changelog

详细的更新日志请查看 [CHANGELOG.md](CHANGELOG.md)。

---

## English

### ✨ Features

- 🔒 **Fully Client-Side Processing** - All image processing happens in your browser, no uploads to any server, protecting your privacy
- 🎨 **Real-time Preview Comparison** - Drag a split line to compare original and compressed images
- 🎯 **Image Quality Progress Bar** - Progress bar with highlighted selected portion, displaying different colors based on quality value (green/yellow/red)
- 🚀 **Batch Processing** - Compress multiple images simultaneously
- 🎛️ **Flexible Configuration** - Customize image quality, output format, and max width
- 🌍 **Multi-language Support** - English, Simplified Chinese, and Traditional Chinese, defaulting to Simplified Chinese
- 💾 **Format Conversion** - Convert between JPG, PNG, and WebP formats
- 📱 **Responsive Design** - Perfect for desktop and mobile devices
- ⚡ **High Performance** - Based on Canvas API, fast compression with low resource usage
- 🌐 **Online Access** - Deployed to GitHub Pages, accessible online

### 🎬 Demo

#### Main Features
- **Drag & Drop Upload** - Click or drag image files
- **Real-time Compression** - Automatic compression starts after upload
- **Comparison Preview** - Click preview button and drag split line to compare compression effects
- **Batch Download** - Download all compressed images with one click

#### Preview Comparison Feature
The preview interface supports comparing original and compressed images by dragging a vertical split line:
- Left side of the split line shows compressed image
- Right side of the split line shows original image
- Default split line position is at center (50%)
- Supports mouse and touch drag operations

### 🚀 Quick Start

#### Requirements

- Node.js >= 20.19.0 or >= 22.12.0
- npm or yarn

#### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/wangruofeng/ecocompress.git
   cd ecocompress
   ```
   
2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### 📖 Usage

#### Basic Usage

1. **Upload Images**
   - Click the upload area or drag image files directly
   - Supports JPG, PNG, WebP formats
   - Can upload multiple images simultaneously

2. **Adjust Compression Settings**
   - **Image Quality**: Choose high, medium, low quality, or customize quality value (0.1-1.0)
   - **Output Format**: Choose JPEG, PNG, or WebP
   - **Max Width**: Set maximum width of images (pixels)

3. **Preview and Download**
   - Click preview button on image card to view comparison
   - Drag split line to adjust comparison position
   - Click download button to save compressed image
   - Use "Download All" button for batch download

#### Compression Settings

- **JPEG**: Best for photos, small file size, but doesn't support transparency
- **PNG**: Supports transparency, good for icons and graphics, but larger file size
- **WebP**: Modern format, smallest size, best quality, but not supported by some older browsers

### 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.3
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **UI Icons**: Lucide React
- **Styling**: Tailwind CSS (via Vite config)

### 📁 Project Structure

```
ecocompress/
├── components/          # React Components
│   ├── Dropzone.tsx    # File upload component
│   ├── Header.tsx      # Page header
│   ├── ImageCard.tsx   # Image card component
│   ├── PreviewModal.tsx # Preview comparison modal
│   ├── SettingsPanel.tsx # Settings panel
│   └── Icon.tsx        # Icon component
├── contexts/           # React Context
│   └── LanguageContext.tsx # Multi-language context
├── locales/           # Internationalization files
│   └── translations.ts # Translation texts
├── utils/             # Utility functions
│   ├── compressor.ts  # Image compression logic
│   └── helpers.ts     # Helper functions
├── types.ts           # TypeScript type definitions
├── App.tsx            # Main app component
├── index.tsx          # App entry point
└── vite.config.ts     # Vite configuration
```

### 🤝 Contributing

We welcome all forms of contributions! Please follow these steps:

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to branch** (`git push origin feature/AmazingFeature`)
5. **Open Pull Request**

#### Contribution Suggestions

- 🐛 Fix bugs
- ✨ Add new features
- 📝 Improve documentation
- 🎨 Optimize UI/UX
- 🌍 Add more language support
- ⚡ Performance optimization

### 📝 Development

#### Code Standards

- Use TypeScript for type checking
- Follow React Hooks best practices
- Use functional components
- Use Tailwind CSS for styling

#### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### 📄 License

This project is licensed under the [MIT License](LICENSE).

### 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [Lucide React](https://lucide.dev/) - Icon library
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - Image processing

### 📧 Contact

If you have questions or suggestions, please contact us through:

- 📮 Submit an [Issue](https://github.com/wangruofeng/ecocompress/issues)
- 💬 Start a [Discussion](https://github.com/wangruofeng/ecocompress/discussions)

### 📋 Changelog

For detailed changelog, please see [CHANGELOG.md](CHANGELOG.md).

---

## 繁體中文

### ✨ 功能

- 🔒 **完全客戶端處理** - 所有圖片處理都在瀏覽器中完成，不會上傳到任何伺服器，保護您的隱私
- 🎨 **即時預覽對比** - 支援拖曳分割線對比原圖和壓縮後的圖片效果
- 🎯 **圖片品質進度條** - 帶高亮選中部分的進度條，根據品質值顯示不同顏色（綠色/黃色/紅色）
- 🚀 **批次處理** - 支援同時壓縮多張圖片，提高工作效率
- 🎛️ **靈活配置** - 可自訂圖片品質、輸出格式和最大寬度
- 🌍 **多語言支援** - 支援英文、簡體中文和繁體中文，預設簡體中文
- 💾 **格式轉換** - 支援 JPG、PNG、WebP 格式之間的轉換
- 📱 **響應式設計** - 完美適配桌面端和行動裝置
- ⚡ **高效能** - 基於 Canvas API，壓縮速度快，資源佔用低
- 🌐 **線上訪問** - 已部署到 GitHub Pages，可直接線上使用

### 🎬 功能演示

#### 主要功能
- **拖曳上傳** - 支援點擊或拖曳圖片檔案
- **即時壓縮** - 上傳後自動開始壓縮處理
- **對比預覽** - 點擊預覽按鈕，透過拖曳分割線對比壓縮效果
- **批次下載** - 一鍵下載所有壓縮後的圖片

#### 預覽對比功能
預覽介面支援透過拖曳豎直分割線來對比原圖和壓縮後的圖片：
- 分割線左側顯示壓縮後的圖片
- 分割線右側顯示原圖
- 預設分割線位於中間位置（50%）
- 支援滑鼠和觸控拖曳操作

### 🚀 快速開始

#### 環境要求

- Node.js >= 20.19.0 或 >= 22.12.0
- npm 或 yarn

#### 安裝步驟

1. **克隆倉庫**
   ```bash
   git clone https://github.com/wangruofeng/ecocompress.git
   cd ecocompress
   ```


2. **安裝依賴**
   ```bash
   npm install
   ```

3. **啟動開發伺服器**
   ```bash
   npm run dev
   ```

4. **構建生產版本**
   ```bash
   npm run build
   ```

5. **預覽生產構建**
   ```bash
   npm run preview
   ```

### 📖 使用說明

#### 基本使用

1. **上傳圖片**
   - 點擊上傳區域或直接拖曳圖片檔案
   - 支援 JPG、PNG、WebP 格式
   - 可同時上傳多張圖片

2. **調整壓縮設定**
   - **圖片品質**：選擇高、中、低品質，或自訂品質值（0.1-1.0）
   - **輸出格式**：選擇 JPEG、PNG 或 WebP
   - **最大寬度**：設定圖片的最大寬度（像素）

3. **預覽和下載**
   - 點擊圖片卡片上的預覽按鈕查看對比效果
   - 拖曳分割線調整對比位置
   - 點擊下載按鈕儲存壓縮後的圖片
   - 使用「下載全部」按鈕批次下載

#### 壓縮設定說明

- **JPEG**：最適合照片，檔案體積小，但不支援透明背景
- **PNG**：支援透明背景，適合圖示和圖形，但檔案體積較大
- **WebP**：現代格式，體積最小，品質最好，但部分舊瀏覽器不支援

### 🛠️ 技術棧

- **前端框架**: React 19.2.3
- **開發語言**: TypeScript 5.8.2
- **構建工具**: Vite 6.2.0
- **UI 圖示**: Lucide React
- **樣式方案**: Tailwind CSS（透過 Vite 配置）

### 📁 專案結構

```
ecocompress/
├── components/          # React 元件
│   ├── Dropzone.tsx    # 檔案上傳元件
│   ├── Header.tsx      # 頁面標頭
│   ├── ImageCard.tsx   # 圖片卡片元件
│   ├── PreviewModal.tsx # 預覽對比模態框
│   ├── SettingsPanel.tsx # 設定面板
│   └── Icon.tsx        # 圖示元件
├── contexts/           # React Context
│   └── LanguageContext.tsx # 多語言上下文
├── locales/           # 國際化檔案
│   └── translations.ts # 翻譯文字
├── utils/             # 工具函數
│   ├── compressor.ts  # 圖片壓縮邏輯
│   └── helpers.ts     # 輔助函數
├── types.ts           # TypeScript 類型定義
├── App.tsx            # 主應用元件
├── index.tsx          # 應用入口
└── vite.config.ts     # Vite 配置
```

### 🤝 貢獻指南

我們歡迎所有形式的貢獻！請遵循以下步驟：

1. **Fork 本倉庫**
2. **建立特性分支** (`git checkout -b feature/AmazingFeature`)
3. **提交變更** (`git commit -m 'Add some AmazingFeature'`)
4. **推送到分支** (`git push origin feature/AmazingFeature`)
5. **開啟 Pull Request**

#### 貢獻建議

- 🐛 修復 Bug
- ✨ 新增功能
- 📝 改進文件
- 🎨 優化 UI/UX
- 🌍 新增更多語言支援
- ⚡ 效能優化

### 📝 開發說明

#### 程式碼規範

- 使用 TypeScript 進行類型檢查
- 遵循 React Hooks 最佳實踐
- 元件採用函數式元件
- 使用 Tailwind CSS 進行樣式設計

#### 瀏覽器支援

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

### 📄 授權許可

本專案採用 [MIT License](LICENSE) 授權許可。

### 🙏 致謝

- [React](https://reactjs.org/) - UI 框架
- [Vite](https://vitejs.dev/) - 構建工具
- [Lucide React](https://lucide.dev/) - 圖示庫
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - 圖片處理

### 📧 聯絡方式

如有問題或建議，請透過以下方式聯絡：

- 📮 提交 [Issue](https://github.com/wangruofeng/ecocompress/issues)
- 💬 開啟 [Discussion](https://github.com/wangruofeng/ecocompress/discussions)

### 📋 更新日誌

詳細的更新日誌請查看 [CHANGELOG.md](CHANGELOG.md)。

---

<div align="center">

**如果這個專案對您有幫助，請給個 ⭐ Star！**

Made with ❤️ by EcoCompress Contributors

<a href="https://github.com/wangruofeng/ecocompress/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wangruofeng/ecocompress" alt="Contributors" />
</a>

</div>
