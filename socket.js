/**
 * Created by j0 on 2016/9/2.
 */
var doConnection = require('./core/connection')
function coreConnection(wss) {
    wss.on('connection', function (session) {
        doConnection(session)
    })
}
module.exports.conn = coreConnection