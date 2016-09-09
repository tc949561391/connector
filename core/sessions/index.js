/**
 * 连接会话仓库dao 的真删改查
 * Created by Tristan on 2016/9/5.
 */
var sessions = require('./sessionMap')
var logconn = require('log4js').getLogger('onconnect')
var logmess = require('log4js').getLogger('onmessage')
function saveSession(session) {
    sessions.print()
    logconn.log('连接成功，保存session')
    console.log('连接成功，保存session')
    var oldSession = getSession(session.clientId , session.id)
    if (oldSession) {
        logconn.log('其他地方正在登陆')
        console.log('其他地方正在登陆')
        console.log(session.readyState)
        oldSession.send('too')
        oldSession.close()
    }
    sessions.set(session.clientId , session.id, session)
    sessions.print()
}




function getSession(clientId,userId ) {
    return sessions.get(clientId , userId)
}

function removeSession(clientId,userId) {
    sessions.remove(clientId,userId)
    sessions.print()
}




module.exports.saveSession = saveSession
module.exports.getSession = getSession
module.exports.removeSession = removeSession
