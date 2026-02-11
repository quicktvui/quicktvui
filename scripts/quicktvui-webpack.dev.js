const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: (() => {
      const aliases = {
        src: path.resolve('./src'),
        '@quicktvui/quicktvui3': path.resolve('./packages/quicktvui'),
        // '@quicktvui/web': path.resolve('./packages/web'),
      }
      return aliases
    })(),
  },
}
