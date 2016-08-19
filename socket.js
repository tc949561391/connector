/**
 * Created by Tristan on 16/8/18.
 */
function doSocket(wss) {
    var i=0;
    wss.on('connection',function (socket) {
        socket.on('message', function (message) {
            i++
            console.log(i+"------------------"+message)
            broadcast(message)
        })

        socket.on('close', function (message) {

            console.log('close')
        })

        socket.on('error',function (error) {

        })

        console.log('connection')

        socket.send('you join')
    })

    function broadcast(data) {
        wss.clients.forEach(function each(client) {
            client.send(data);
        });
    }
}
module.exports=doSocket