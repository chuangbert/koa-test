'use strict'

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const views = require('koa-views');
const router = require('./web');

// Set View Engine
app.use(views(__dirname + '/web/views', {
  map: {
    html: 'dust'
  }
}));

// Integrate routes into app
app
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000, () => {
	console.log("3000");
});
