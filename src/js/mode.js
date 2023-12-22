// BUG: 在深色模式下，跳转到文章页面会闪白
const $ = require('jquery');

const palette = $('#mode-icon').data('palette');

let isDark = localStorage.getItem('dark') || localStorage.setItem('dark', false);

if (JSON.parse(isDark)) {
  $('body').addClass(palette);
  $('#mode-icon').removeClass('icon-[charm--moon]').addClass('icon-[charm--sun]');
} else {
  $('body').removeClass(palette);
  $('#mode-icon').removeClass('icon-[charm--sun]').addClass('icon-[charm--moon]');
}

$('#mode-icon').on('click', () => {
  isDark = !JSON.parse(isDark)

  if (isDark) {
    $('body').addClass(palette);
    localStorage.setItem('dark', isDark);
    $('#mode-icon').removeClass('icon-[charm--moon]').addClass('icon-[charm--sun]');
  } else {
    $('body').removeClass(palette);
    localStorage.setItem('dark', isDark);
    $('#mode-icon').removeClass('icon-[charm--sun]').addClass('icon-[charm--moon]');
  }
});