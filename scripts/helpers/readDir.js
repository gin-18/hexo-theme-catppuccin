const path = require('path')
const fs = require('fs')

hexo.extend.helper.register('readDir', (type, p) => {
  const files = fs.readdirSync(path.join(__dirname, p))
  const f = files.map((file) => {
    return `${type}/${file}`
  })
  return f
})
