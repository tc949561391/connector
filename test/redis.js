/**
 * Created by j0 on 2016/8/23.
 */
var redis=require('redis')
var sub=redis.createClient(6379,'localhost')

var msg_count = 0;

sub.on("message", function (channel, message) {
    msg_count++
    console.log(msg_count)
    console.log("sub channel " + channel + ": " + message);
});

sub.subscribe("a nice channel");






