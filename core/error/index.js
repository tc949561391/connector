/**
 * Created by j0 on 2016/9/2.
 */
var util=require('util')
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