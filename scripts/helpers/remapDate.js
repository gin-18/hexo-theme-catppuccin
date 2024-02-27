hexo.extend.helper.register('remapDate', (date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[Number(date.split('-')[1]) - 1]
  const day = date.split('-')[2]
  return `<span>${month} ${day}</span>`
});
