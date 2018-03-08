var mongoose = require('mongoose')
var timelineModel = require('./timelineModel')
var db = require('./&mongoose')
var dblogin = require('./login.json')

function createTimeline (name, description, range, unitOfTime, authorId, privated) {
  mongoose.connect(dblogin.db.one, function (err, database) {
    if (err) {
      console.log('Connection error')
      throw err
    }
  })
    .then(
      () => {
        var TimelineModel = timelineModel.createModel()
        var timeline = new TimelineModel()

        timeline.NAME = name
        timeline.DESCRIPTION = description
        timeline.RANGE = range
        timeline.UNITOFTIME = unitOfTime
        timeline.AUTHORID = authorId
        timeline.PRIVATE = privated

        db.dbSave(timeline)
      },
      err => { throw err }
    ).then(() => {
      mongoose.connection.close()
    })
}

module.exports = {
  createTimeline
}
