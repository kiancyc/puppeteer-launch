const puppeteer = require('puppeteer')
const _ = require('lodash')

// puppeteer api
// https://github.com/puppeteer/puppeteer/blob/main/docs/api.md
function Browser(params) {

    _.assign(this, params)

    this.local = async function() {
        return await puppeteer.launch({
            headless: !this.ui,
            devtools: this.devtools,
            defaultViewport:{width:1440, height:1200},
            executablePath: process.env.CHROME_BIN || null,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                `--window-size=1600,900`,
                `--content-shell-host-window-size=1600,900`,
            ]
        })
    }

    // chrome in docker (browserless.io)
    // ws://chrome-843567580.ap-southeast-1.elb.amazonaws.com:3000
    this.remote = async function(url) {
        return await puppeteer.connect({ 
            browserWSEndpoint: url
        })
    }
    
}

module.exports = Browser;