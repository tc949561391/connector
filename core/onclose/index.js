/**
 * 断开连接后置处理器
 * Created by Tristan on 2016/9/2.
 */
var sessionDao=require('../sessions')

function  onclose(session) {
    sessionDao.removeSession(session.clientId,session.id)
    console.log(session.id+'close')
}
module.exports=onclose