process.env.CHROME_BIN = require('puppeteer').executablePath() // IMPORTANT!

module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless', 'Firefox'], // IMPORTANT! You can list & use multiple browsers
    plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher')]
  })
}
