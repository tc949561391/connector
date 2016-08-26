var fs = require('fs')
var http = require('http')
var koa = require('koa');
var logger = require('koa-logger')
var koastatic = require('koa-static')
var Pug = require('koa-pug')

var WebSocketServer = require('ws').Server


//读取配置文件
var config = require('./conf/conf')
//http   web
var app = require('../app')

app.use(logger())


//websocket模块


var DoSocket=require('../socket')
app.use(koastatic('./public'))
const pug = new Pug({
    viewPath: './views',
    app: app // equals to pug.use(app) and app.use(pug.middleware)
})


var server = http.createServer(app.callback())
var wss = new WebSocketServer({server: server})
DoSocket(wss);
server.listen(config.bootstrap.port)




