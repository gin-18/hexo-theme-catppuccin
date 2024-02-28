const $ = require('jquery')
const markdownit = require('markdown-it')

// 渲染首页的content
const content = $('#content')
const md = markdownit({
  html: true
})
const result = md.render(content.data().content)
content.html(result)
