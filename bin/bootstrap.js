var fs=require('fs')
var koa = require('koa');
var socket=require('../socket')
//读取配置文件
var config=require('./conf/conf')
var app = new koa();
var WebSocketServer=require('ws').Server








app.use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});
app.use(function *(){
    this.body = 'Hello World';
});







var server = require('http').Server(app.callback());
var socketContext=new WebSocketServer({
    server:server
})



socketContext.on('connection',socket)
app.listen(config.bootstrap.port);