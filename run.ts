const serverless = require('serverless-http');
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router({
});


router.get('/hello', async ctx => {
  ctx.body = { foo: 'bar' }  
});

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

export const handler = serverless(app);
