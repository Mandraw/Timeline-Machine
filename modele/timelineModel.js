var mongoose = require('mongoose')
var timeline

function createModel () {
  var timelineSchema = new mongoose.Schema({
    NAME: { type: String, required: true },
    DESCRIPTION: { type: String, required: true },
    RANGE: { type: Number, min: 0, required: true },
    UNITOFTIME: { type: String, required: true },
    AUTHORID: { type: Number, min: 0, required: true },
    PRIVATE: { type: Boolean, required: true }
  })

  var TimelineModel = mongoose.model('timeline', timelineSchema)
  timeline = new TimelineModel()
}

createModel()

// this is done like this because the model need to be instanciated only one time
function returnTimeline () {
  return timeline
}

module.exports = {
  returnTimeline
}
