/**
 * Created by j0 on 2016/9/2.
 */
var redis = require('redis')
var config = require('../../config')
var redisConn = redis.createClient(config.redis.port, config.redis.host, {})
redisConn.on('error', function () {
    console.error('redis connnected error')
})

redisConn.on('connect', function () {
        console.log('redis connected success')
    }
)

module.exports=redisConn