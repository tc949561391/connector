var Koa=require('koa')
var app= new Koa()


app.use(function *() {
  this.body='hello world'
})
module.exports=app