# hexo-theme-catppuccin

## 安装

```sh
git clone https://github.com/GIN-18/hexo-theme-catppuccin.git themes/catppuccin

cd themes/catppuccin

npm run build
```

## 首页内容

在主题目录中的 `_config.yml` 的 `avatar` 字段下修改头像相关内容。

页面的内容需要写在 `index.md` 中。

```sh
hexo new page index
```

## 修改全局配置可以使用代码高亮

在博客目录中的 `_config.yml` 将 `highlight.enable` 设置为 `false`。

```yaml
highlight:
  enable: false
```

## 搜索文章

在主题目录中的 `_config.yml` 将 `search.enable` 设置为 `true`。

### 安装 hexo-generator-search

在博客目录下安装 `hexo-generator-search` 插件。

```sh
npm install hexo-generator-search --save
```

在博客目录中的 `_config.yml` 添加以下内容：

```yaml
search:
  path: search.json
  field: post
  content: true
```

执行以下命令在生成 `/public/search.json` 文件：

```sh
hexo generate
```
