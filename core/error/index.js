/**
 * 系统中可抓取的异常类，详细的异常代码请看errors.json
 * Created by Tristan on 2016/9/2.
 */
var util=require('util')
/**
 * 身份验证异常
 * @param errCode
 * @param message
 * @constructor
 */
function AuthError(errCode, message) {
    var msg={
        error_code:errCode,
        time:Date.now(),
        type:'auth',
        message:message
    }
    this.message=JSON.stringify(msg)
    Error.call(this)
}
util.inherits(AuthError, Error)

module.exports.AuthError = AuthError


/**
 * 消息异常
 * @param errCode
 * @param message
 * @constructor
 */
function MessageError(errCode, message) {
    var msg={
        error_code:errCode,
        time:Date.now(),
        type:'message',
        message:message
    }
    this.message=JSON.stringify(msg)
    Error.call(this)
}
util.inherits(MessageError, Error)

module.exports.MessageError=MessageError