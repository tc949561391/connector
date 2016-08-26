/**
 * Created by j0 on 2016/8/23.
 */
var redis = require('redis')
var publisher = redis.createClient(6379, 'localhost')


for(var i=0;i<=100;i++){
    publisher.publish("a nice channel",'message'+i)
}