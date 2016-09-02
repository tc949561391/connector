/**
 * Created by j0 on 2016/9/2.
 */
var doConnection = require('./core/connection')
function coreConnection(wss) {
    wss.on('connection', function (session) {
        doConnection(session)
    })
}
process.on('uncaughtException', function (err) {
    //打印出错误
    console.log(err);
    //打印出错误的调用栈方便调试
    console.log(err.stack)
});
module.exports.conn = coreConnection