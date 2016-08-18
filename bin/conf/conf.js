/**
 * Created by Tristan on 16/8/19.
 */
var fs=require('fs')
var config=JSON.parse(fs.readFileSync('./bin/conf/tsconfig.json','utf-8'))
module.exports=config