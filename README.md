# launch helper for puppeteer

### usage
local:
```
    const Browser = require('puppeteer-launch')
    let browser = await new Browser({ui:true}).local()
    browser.goto('www.google.com')
```

remote:
```
    const Browser = require('puppeteer-launch')
    let browser = await new Browser().connect(url)
    browser.goto('www.google.com')
```
