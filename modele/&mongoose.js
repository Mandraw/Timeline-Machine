var mongoose = require('mongoose')
var dblogin = require('./login.json')
var DB


function dbConnect() {

    options =  { poolSize : 100 , replicaSet : "rs-ds261128", keepAlive: 1, connectTimeoutMS: 30000, reconnectTries: 30, reconnectInterval: 5000}

    mongoose.connect(dblogin.db.two, function(err,database) {
        if (err) {
            console.log("Connection error")
            throw err 
        }
    })
    console.log("Connection to the database is OK")
}


function connectionTest() {
    dbConnect()
    mongoose.connection.close()
}


function dbSave(content) {
    content.save(function (err) {
        if (err) { 
            console.log("Save Error")
            throw err 
        }
        console.log('Database Updated !') 
    })
}



module.exports = {
    connectionTest,
    dbSave,
    dbConnect
}
