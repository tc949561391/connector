/**
 * Created by j0 on 2016/8/26.
 */
exports.homepage=   function *() {
    this.render('index', {
        title: 'HOME'
    })
}

exports.help=function *() {
    this.render('index',{
        title:'error'
    })
}


exports.register=function *() {
   var name= this.req.body.name;
    res.send(name)
}