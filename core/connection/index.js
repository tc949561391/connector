/**
 * Created by j0 on 2016/9/2.
 */
var validater = require('../validate')
var log=require('log4js').getLogger('connect')
var onmessage=require('../onmessage')
var onclose=require('../onclose')
var onerror=require('../onerror')
function doConnection(session) {
    log.info('getconnected:'+session.upgradeReq.url)
    validater(session, function (err) {
        if (err) {
            console.log(err.message)
            session.send(err.message)
            session.close()
            return
        }
        session.on('message', function (message) {
            onmessage(message,session)

        })

        session.on('close', onclose)

        session.on('error', onerror)
    })
}
module.exports = doConnection






