import '@catppuccin/highlightjs/css/catppuccin.variables.css';
import '../css/style.css';
import '../css/markdown.css';

import '../images/favicon.ico';
import '../images/avatar.jpg';

const $ = require('jquery');
const hljs = require('highlight.js');

// 高亮文件代码块
hljs.highlightAll();


// 回到顶部
$('#toTopBtn').on('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 设置滚动方式为平滑
  });
})