/**
 * Created by j0 on 2016/9/2.
 */
var query = require('querystring')
var Errors = require('../error')
var url = require('url')
var validateModules = require('./validateModuls')
function validater(session, callback) {
    var params = query.parse(url.parse(session.upgradeReq.url).query);
    if (!params.access_token) {
        callback(new Errors.AuthError(1044, 'access_token no found'))
        return
    }
    if (params.access_token.length < 6) {
        callback(new Errors.AuthError(1050, 'access_token error'))
        return
    }
    validateModules.getUser(params.access_token, function (err, user) {
        //
        if (err) {
            callback(err)
            return
        }
        if (!user){
            callback(new Errors.AuthError(1050, '无效的access_token'))
        }
        session.user=user
        session.send(JSON.stringify(user)+'join')
        callback()
    })
}
module.exports = validater
