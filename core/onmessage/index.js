/**
 * 消息处理器
 * Created by Tristan on 2016/9/2.
 */
var sessions = require('../sessions')
var log = require('log4js').getLogger('onmessage')
var Errors = require('../error')


/**
 * 消息接收
 * @param msgStr 接收到到消息json字符串
 * @param session 用户的会话
 */
function onmessage(msgStr, session) {
    validateMessage(msgStr, function (err, message) {
        if (err) {
            session.send(err.message)
            return
        }

        sendMessage(message,session)
    })
}

/**
 * 消息格式的验证，
 * @param msg 消息的json字符串
 * @param callback 解析后的消息信息回掉
 */
function validateMessage(msg, callback) {
    var message
    try {
        message = JSON.parse(msg)
        if (typeof message.content !=='string'){
            callback(new Errors.MessageError(2050, 'content must be string type'))
            return
        }

        if (message.to===null) {
            callback(new Errors.MessageError(2051, 'message need \'to\''))
            return
        }
        if (message.toType===null) {
            callback(new Errors.MessageError(2052, 'message need \'toType\''))
            return
        }
        if (message.messageType===null){
            message.messageType='message'
        }

        if(message.time===null){
            message.time=Date.now()
        }
        callback(null, message)
    } catch (e) {
        callback(new Errors.MessageError(2050, 'message parse error'))
    }
}

/**
 * 消息发送
 * @param message 解析的消息
 * @param from 发送者的会话
 */
function sendMessage(message,from) {
    var tosession=sessions.getSession(from.clientId,message.to)
    if (!tosession){
        //这里是对方不在系统中登陆，可能出现两种情况
        //1：系统中没有这个用户，那么我们就忽略这条消息，并反馈给发送者，告诉他没有这个待接收的角色
        //2：系统中有这个用户，但是没有登陆，那么我们应该把这条消息存储起来，待改用户上线的时候，推送给该用户

        from.send('对方不在线')
        console.log('save the message')
        return
    }
    message.from=from.id
    tosession.send(JSON.stringify(message))
}

module.exports = onmessage