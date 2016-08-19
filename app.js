var Koa = require('koa')
var route = require('koa-route')
var app = new Koa()


app.use(route.all('/getuser/:name', function *(name) {
    this.render('index', {title: name})
}))

module.exports = app