const $ = require('jquery')

try {
  const content = $('#content')
  content.html(content.data().content)
} catch (error) { }
