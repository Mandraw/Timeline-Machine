var mongoose = require('mongoose')
var timelineModel = require('./timelineModel')
var db = require('./&mongoose')

function createTimeline(name, description, range, unitOfTime, authorId, private){
    db.dbConnect()
    
    timelineModel = timelineModel.createModel()
    var timeline = new timelineModel()

    timeline.NAME = name
    timeline.DESCRIPTION = description
    timeline.RANGE = range
    timeline.UNITOFTIME = unitOfTime
    timeline.AUTHORID = authorId
    timeline.PRIVATE = private

    db.dbSave(timeline)
    
    mongoose.connection.close()
}

module.exports = {
    createTimeline
}