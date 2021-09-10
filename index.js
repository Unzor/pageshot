var express=require('express');
var app=express();
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads


app.get('/', function(req, res){
res.sendFile(__dirname+'/index.html');
});

app.post('/takeScreenshot', function(req, res){
const random__ = Math.random().toString(16).substr(2, 16);
// @ts-check
const playwright = require('playwright');

(async () => {
  // Try to add 'firefox' to the list ↓
  for (const browserType of ['chromium', 'webkit']) {
    // @type {import('playwright').Browser}
    const browser = await playwright[browserType].launch({proxy: { server: 'proxy.crawlera.com:8010' }});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(req.body.page);
    await page.screenshot({ path: `public/screenshots/screenshot-` + random__ + `.png` });
    await browser.close();
res.send('screenshots/screenshot-' + random__ + '.png');
  }
})();
});

app.listen(1024, function(){
console.log('Listening at localhost:1024');
});
