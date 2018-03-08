var mongoose = require('mongoose')
var dblogin = require('./login.json')

function dbConnect() {

    mongoose.connect(dblogin.db.one, function(err) {
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
