/**
 * Created by j0 on 2016/9/2.
 */
var sessions = require('../sessions')
var log = require('log4js').getLogger('onmessage')
function onmessage(message, session) {
    var toSession = sessions.getSession(session.id + '1:' + session.user.clientId);
    if (!toSession){
        log.info('no the one')
        return
    }
    toSession.send(message)
}


module.exports = onmessage