/**
 * 会话仓库
 * Created by Tristan on 2016/9/2.
 */
var hashmap = require('hashmap')
var log = require('log4js').getLogger('server-init')

var sessionStore

if (!sessionStore) {
    sessionStore = new hashmap()
}

function set(clientId, userId, session) {
    var clientSession = sessionStore.get('client:' + clientId);
    if (!clientSession) {
        clientSession = new hashmap()
        sessionStore.set('client:' + clientId, clientSession)
    }
    clientSession.set(clientId + ':' + userId, session)
}

function get(clientId, userId) {
    var clientSession = sessionStore.get('client:' + clientId);
    if (!clientSession) {
        return null
    }
    return clientSession.get(clientId+':'+userId);
}


function remove(clientId,userId) {
    var clientSession = sessionStore.get('client:' + clientId);
    if (!clientSession) {
        return
    }
    if (clientSession.has(clientId+':'+userId)){
        clientSession.remove(clientId+':'+userId)
    }
}

function print() {
    sessionStore.forEach(function (clientSession,key) {
        console.log(key)
        clientSession.forEach(function(session,sessionKey){
            console.log('--'+sessionKey+':'+session)
        })
    })
}

module.exports.set = set
module.exports.get = get
module.exports.remove = remove
module.exports.print = print

