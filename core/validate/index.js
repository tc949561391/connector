/**
 * 身份验证处理器
 * Created by Tristan on 2016/9/2.
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
    if (!params.client_id){
        callback(new Errors.AuthError(1048,'client_id not found'))
        return
    }
    // if (params.access_token.length < 6) {
    //     callback(new Errors.AuthError(1050, 'access_token error'))
    //     return
    // }

    validateModules.getUser(params.access_token, function (err, user) {
        if (err) {
            callback(err)
            return
        }

        if (!user){
            callback(new Errors.AuthError(1050, '无效的access_token'))
            return
        }

        if (params.client_id!=user.clientId){
            callback(new Errors.AuthError(1048,'client_id error'))
            return
        }
        session.id=user.id
        session.clientId=user.clientId
        session.user=user
        callback()
    })
}
module.exports = validater
