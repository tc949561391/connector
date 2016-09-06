/**
 * Created by j0 on 2016/9/2.
 */
var hashmap=require('hashmap')
var log=require('log4js').getLogger('server-init')

var  sessions=new hashmap()
log.info('sessionsmap is init')

module.exports=sessions

