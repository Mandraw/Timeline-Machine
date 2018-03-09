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
        var timeline = timelineModel.returnTimeline()

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
    }, err => { throw err }
    )
}

// Test Line
// createTimeline('LotR', 'La timeline de LotR', 10000, 'ans', '23', false)

module.exports = {
  createTimeline
}
