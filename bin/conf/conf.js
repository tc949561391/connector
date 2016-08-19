/**
 * Created by Tristan on 16/8/19.
 */
var fs = require('fs')


var config
if (process.env.USERNAME == 'root') {
    config= JSON.parse(fs.readFileSync('./bin/conf/server.json', 'utf-8'))
}else {
    config=JSON.parse(fs.readFileSync('./bin/conf/develop.json','utf-8'))
}
module.exports = config