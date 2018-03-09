var mongoose = require('mongoose')
var returntimeline = require('./timelineModel')
var db = require('./&mongoose')
var dblogin = require('./login.json')
var timeline = returntimeline.returnTimeline()
var TimelineModel = returntimeline.returnTimelineModel()

// Saves Timeline to MongoDB
function createTimeline (name, description, range, unitOfTime, authorId, privated) {
  mongoose.connect(dblogin.db.one, (err, database) => {
    if (err) {
      console.log('Connection error')
      throw err
    }
  })
    .then(
      () => {
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

// Queries timeline object
function findTimelineById (id) {
  return new Promise((resolve, reject) => {
    TimelineModel.findById(id, (err, timeline) => {
      if (err) {
        reject(err)
      }
      resolve(timeline)
    })
  })
}

// waits for ^ and returns the timeline
async function getTimeline (id) {
  try {
    var tl = await findTimelineById(id)
    return tl.AUTHORID
  } catch (error) {
    console.log(error)
  }
}

// Test Lines
// createTimeline('LotR', 'La timeline de LotR', 10000, 'ans', '23', false)

module.exports = {
  createTimeline,
  findTimelineById,
  getTimeline
}
