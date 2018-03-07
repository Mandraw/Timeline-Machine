var mongoose = require('mongoose')

function dbConnect() {
    mongoose.connect('mongodb://localhost/timeline-machine', function(err) {
        if (err) { 
            console.log("connection err")
            throw err
        }
    })
    console.log("connection succesfull")
}

var timelineSchema = new mongoose.Schema({
    NAME : { type : String, required : true },
    RANGE : { type : Number, required : true },
    UNITOFTIME : { type : String, required : true },
    AUTHORID : { type : Number, required : true }
})

var timelineModel = mongoose.model('timeline', timelineSchema)

function createTimeline(name, range, unitOfTime, authorId){
    var timeline = new timelineModel()

    timeline.NAME = name
    timeline.RANGE = range
    timeline.UNITOFTIME = unitOfTime
    timeline.AUTHORID = authorId
    
    dbConnect()

    timeline.save(function (err) {
        if (err) {
            console.log("Save error")
            throw err
        }
        console.log('Commentaire ajouté avec succès !');
    })

    mongoose.connection.close();
}

createTimeline("LotR",10000,"ans",23)