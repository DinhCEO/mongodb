require('dotenv').config();
const Koa  = require('koa');
const app  = new Koa();
const port = process.env.PORT;

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(port, () => {
    console.log(`server listening port ${port}`);
});
