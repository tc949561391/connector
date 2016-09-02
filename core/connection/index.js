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
        session.on('message', function (message) {
            var request
            try {
                request = JSON.parse(message);
                console.log(message)
                var response = {
                    from: session.user.id,
                    to: session.user.id,
                    message: message
                }
                session.send(JSON.stringify(response))
            } catch (err) {
                session.send('错误的消息格式')
            }

        })

        session.on('close', function () {
            session.send('close')
        })

        session.on('error', function (err) {
            session.send(err.message)
        })
    })
}
module.exports = doConnection






