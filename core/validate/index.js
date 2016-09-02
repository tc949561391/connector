/**
 * Created by j0 on 2016/9/2.
 */
var query=require('querystring')
var url=require('url')
function validater(session,callback) {
    var params=query.parse(url.parse(session.upgradeReq.url).query);
    if (!params.access_token){
        callback(new Error('access_token no found'))
        return
    }
    callback(new Error('未知'))
}
module.exports=validater
