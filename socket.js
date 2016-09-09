/**
 * 系统初始化
 * Created by Tristan on 2016/9/2.
 */
var doConnection = require('./core/connection')
var log = require('log4js').getLogger('server-runtime')
function coreConnection(wss) {

    wss.on('connection', function (session) {
        doConnection(session)
    })
}
process.on('uncaughtException', function (err) {
    //打印出错误
    log.error(err);
    //打印出错误的调用栈方便调试
    log.error(err.stack)
});
module.exports.conn = coreConnection