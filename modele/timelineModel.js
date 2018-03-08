var mongoose = require('mongoose')

function createModel () {
  var timelineSchema = new mongoose.Schema({
    NAME: { type: String, required: true },
    DESCRIPTION: { type: String, required: true },
    RANGE: { type: Number, min: 0, required: true },
    UNITOFTIME: { type: String, required: true },
    AUTHORID: { type: Number, min: 0, required: true },
    PRIVATE: { type: Boolean, required: true }
  })

  var timelineModel = mongoose.model('timeline', timelineSchema)
  return timelineModel
}

module.exports = {
  createModel
}
