import '@catppuccin/highlightjs/css/catppuccin.variables.css';
import '../css/style.css';
import '../css/markdown.css';

import '../images/favicon.ico';
import '../images/avatar.jpg';

const $ = require('jquery');
const hljs = require('highlight.js');

// 高亮文件代码块
hljs.highlightAll();

$(window).on('scroll', () => {
  if ($(window).scrollTop() > 800) {
    $('#top').removeClass('hidden').addClass('flex');
  } else {
    $('#top').removeClass('flex').addClass('hidden');
  }
})

// 回到顶部
$('#top').on('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 设置滚动方式为平滑
  });
})

// 点击搜索
$('#search-btn').on('click', () => {
  $('body').addClass('overflow-hidden');
  $('#search-box').removeClass('hidden').addClass('flex');
  searchPosts()
})

function searchPosts() {
  $.ajax({
    url: '/search.json',
    dataType: "json",
    success: (res) => {
      $('#search-input').on('input', () => {
        const value = $('#search-input').val();

        if (!value) {
          $('#search-result').empty();
          return;
        };

        $('#search-result').empty();

        res.forEach(item => {
          $('#search-result').append(filterContent(item, value))
        })
      })

      $('#search-close').on('click', () => {
        $('body').removeClass('overflow-hidden');
        $('#search-input').val('');
        $('#search-result').empty();
        $('#search-box').removeClass('flex').addClass('hidden');
      })

    }
  });
}

function filterContent(data, value) {
  const { title, url, content } = data

  const year = url.split('/')[1]
  const month = remapMonth(url.split('/')[2])
  const day = url.split('/')[3]
  const date = `${month} ${day}, ${year}`

  const titleMatch = title.replace(new RegExp(value, 'gi'), '<span class="text-green">$&</span>');

  let contentMatch = content
    .split('\n')
    .filter(item => item.toLowerCase().includes(value.toLowerCase()))
    .map(item => {
      return item.replace(new RegExp(value, 'gi'), '<span class="text-green">$&</span>');
    })[0];

  if (titleMatch.includes('span') || contentMatch) {
    if (!contentMatch) contentMatch = content.split('\n').filter(item => item.length > 0)[0];

    return `
      <li class="border border-surface1 rounded">
        <a class="flex flex-col gap-2 p-2" href="${url}">
          <h3 class="font-semibold">${titleMatch}</h3>
          <span class="text-xs">${date}</span>
          <p class="text-sm">${contentMatch}</p>
        </a>
      </li>
    `
  }
}

function remapMonth(month) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[month - 1];
}