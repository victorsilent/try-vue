require('babel-register')
var config = require('../../config')

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_assertions_path: ['test/e2e/custom-assertions'],
  "selenium": {
    "start_process": false
  },
  "test_settings": {
    "default": {
      "selenium_host": "127.0.0.1",
      "selenium_port": "9515",
      "screenshots": {
        "enabled": false,
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled" : true,
        "acceptSslCerts" : true,
        "chromeOptions" : {
          "args": [
            "--no-sandbox",
            "start-fullscreen",
            "window-size=1280,800"
          ]
        }
      },
      "launch_url": "http://app"
    }
  }
}
