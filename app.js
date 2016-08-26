var Koa = require('koa')
var koa_router = require('koa-router');
var rs=require('./source/router')
var app = new Koa()
var router=new koa_router()

app.use(router.routes());
app.use(router.allowedMethods());

rs(router)

module.exports = app