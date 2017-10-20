'use strict'

const Router = require('koa-router');
const router = new Router();
const render = require('koa-views-render');

router.get("/test", async (ctx, next) => {
	//ctx.body = "Inside Test";
	await ctx.render('test',{name: "test name"});
});

module.exports = router;
