/**
 * Created by j0 on 2016/9/2.
 */

var log = require('log4js').getLogger('onmessage')
function onmessage(message,session) {
    session.send(message)

}


module.exports = onmessage