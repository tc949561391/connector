/**
 * Created by j0 on 2016/9/5.
 */
var sessions=require('./sessionMap')
var logconn=require('log4js').getLogger('onconnect')
var logmess=require('log4js').getLogger('onmessage')
function saveSession(key,session) {
    logconn.info(key+'   join in')
    var old=sessions.get(key)
    if (old){
        old.send('其他地放重复登陆')
        old.close()
    }
    sessions.set(key,session)
}
module.exports.saveSession=saveSession


function getSession(key) {
    logmess.info(key+'   get session')
    var session=sessions.get(key)
    return session
}

module.exports.getSession=getSession
