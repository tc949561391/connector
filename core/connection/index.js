/**
 * 当用户连接到该服务器的时候
 * Created by Tristan on 2016/9/2.
 */
var validater = require('../validate')
var log=require('log4js').getLogger('connect')
var onmessage=require('../onmessage')
var onclose=require('../onclose')
var onerror=require('../onerror')
var sessions=require('../sessions')



function doConnection(session) {
    log.info('getconnected:'+session.upgradeReq.url)
    //1、身份验证
    validater(session, function (err) {
        if (err) {//身份验证失败
            log.error(err.message)
            session.send(err.message)
            session.close()
            return
        }


        //验证成功
        //2、保存用户会话
        sessions.saveSession(session)

        //3、注册消息接收器
        session.on('message', function (message) {
            onmessage(message,session)
        })

        //4、注册消息断开后置处理器
        session.on('close', function () {
            onclose(session)
        })

        //5、注册异常处理器
        session.on('error',function (err) {
            onerror(err)
        } )
    })
}


module.exports = doConnection






