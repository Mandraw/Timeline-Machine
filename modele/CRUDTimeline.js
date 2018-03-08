var mongoose = require('mongoose')
var timelineModel = require('./timelineModel')
var db = require('./&mongoose')

function createTimeline (name, description, range, unitOfTime, authorId, privated) {
  db.dbConnect()

  var TimelineModel = timelineModel.createModel()
  var timeline = new TimelineModel()

  timeline.NAME = name
  timeline.DESCRIPTION = description
  timeline.RANGE = range
  timeline.UNITOFTIME = unitOfTime
  timeline.AUTHORID = authorId
  timeline.PRIVATE = privated

  db.dbSave(timeline)

  mongoose.connection.close()
}

module.exports = {
  createTimeline
}
