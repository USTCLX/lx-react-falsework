const serve = require('koa-static');
const Koa = require('koa');
const path = require('path');
const app = new Koa();

// $ GET /hello.txt
app.use(serve('test/fixtures'));

// or use absolute paths
app.use(serve(path.resolve(__dirname, '../dist')));

app.listen(8065);

console.log('listening on port 8065');
