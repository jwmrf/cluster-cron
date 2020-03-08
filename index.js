'use strict'
const cluster = require('cluster')
module.exports = function oneCluster(){
    if(!cluster.worker || cluster.worker.id == 1){
        return true
    }else{
        return false
    }
}