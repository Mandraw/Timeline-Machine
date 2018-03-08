// var mongoose = require('mongoose')
// var options = options = { poolSize: 10000, replicaSet: 'rs-ds261128', keepAlive: 1, connectTimeoutMS: 30000, reconnectTries: 30, reconnectInterval: 5000}

function dbSave (content) {
  content.save(function (err) {
    if (err) {
      console.log('Save Error')
      throw err
    }
    console.log('Database Updated !')
  })
}

module.exports = {
  dbSave
}
