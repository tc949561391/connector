/**
 * Created by Tristan on 16/8/18.
 */
var validate = require('./socket/TokenValidate')
function doSocket(wss) {
    wss.on('connection', function (socket) {


        var isauth = false;
        isauth = validate(socket)
        console.log(socket.readyState)

        socket.send('you join')
//["CONNECTING", "OPEN", "CLOSING", "CLOSED"]





        socket.on('message', function (message) {
            broadcast(message)
        })



        socket.on('close', function (message) {

            console.log('close')
        })

        socket.on('error', function (error) {

        })

        console.log('connection')


    })

    function broadcast(data) {
        wss.clients.forEach(function each(client) {
            client.send(data);
        });
    }
}
module.exports = doSocket