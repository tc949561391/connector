/**
 * Created by j0 on 2016/9/2.
 */
var validater = require('../validate')
function doConnection(session) {
    validater(session, function (err) {
        if (err) {
            console.log(err.message)
            session.send(err.message)
            session.close()
            return
        }
    })
}
module.exports = doConnection






