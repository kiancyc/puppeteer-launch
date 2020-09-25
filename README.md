# launch helper for puppeteer

### usage
local:
```
    let browser = await new Browser({ui:true}).local()
    browser.goto('www.google.com')
```

remote:
```
    let browser = await new Browser().connect(url)
    browser.goto('www.google.com')
```
