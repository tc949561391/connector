/**
 * Created by Tristan on 16/8/18.
 */
function doSocket(socket) {

    socket.on('message', function (message) {

    })


    socket.on('close', function (message) {

        console.log(message)
    })



    socket.on('error',function (error) {


    })

    console.log('connection')

    socket.send('you join')
}
module.exports=doSocket