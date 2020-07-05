'use strict'
const cluster = require('cluster')
module.exports = function oneCluster(id = 1){
    if(!cluster.worker || cluster.worker.id == id){
        return true
    }else{
        return false
    }
}