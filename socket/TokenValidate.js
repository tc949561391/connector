/**
 * Created by Tristan on 16/8/20.
 */
var urlParse=require('url')
var auther=function (socket) {

    var httprequest=socket.upgradeReq
    var url=httprequest.url;
    var params=urlParse.parse(url,true).query



    return true

}
module.exports=auther