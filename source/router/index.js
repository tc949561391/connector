var home=require('./home')
var rs = function (router) {
    router.get('/',home.homepage)
    router.get('/help',home.help)
    router.post('/register',home.register)
}

module.exports = rs