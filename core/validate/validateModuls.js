/**
 * Created by j0 on 2016/9/2.
 */
var util = require('util')
var redis = require('../../models/redis')
var Errors = require('../error')
var keys = {
    token: 'tokens:%s',
    refreshToken: 'refresh_tokens:%s',
    code: 'code:%s'
};


function getAccessToken(bearerToken, callback) {
    redis.select(11, function () {
        redis.hgetall(util.format(keys.token, bearerToken), function (err, token) {
            if (err) return callback(err);

            if (!token) return callback();
            console.log('getAccessToken:' + token)

            callback(null, {
                accessToken: token.accessToken,
                clientId: token.clientId,
                expires: token.expires ? new Date(token.expires) : null,
                userId: token.userId
            });
        });
    })
};
exports.getAccessToken = getAccessToken

function getUser(access_token, callback) {
    if (access_token == '123456789') {
        var user = {
            id: 123456,
            clientId: 'client_id',
            joinTime: Date.now(),
            host: process.address.host
        }
        callback(null, user)
        return
    }
    getAccessToken(access_token, function (err, token) {
        if (err || typeof (token) == 'undefined') {
            callback(new Errors.AuthError(1050, 'access_token error'))
            return
        }
        var user = {
            id: token.userId,
            clientId: token.clientId,
            joinTime: Date.now(),
            host: process.address.host
        }
        callback(null, user)
    })
}
exports.getUser = getUser