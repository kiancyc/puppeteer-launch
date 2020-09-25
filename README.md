# launch helper for puppeteer

### usage
local:
```node.js
    const Browser = require('puppeteer-launch')
    
    let browser = await new Browser({ui:true}).local()
    browser.goto('www.google.com')
```

remote:
```node.js
    const Browser = require('puppeteer-launch')
    
    let browser = await new Browser().remote(url)
    browser.goto('www.google.com')
```
