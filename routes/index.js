var express = require('express')
var CRUD = require('../modele/CRUDTimeline')
var router = express.Router()

/* GET home page. */
router.get('/addTimeline', function (req, res, next) {
  res.render('addTimeline')
})
  .get('/visualizeOne', function (req, res, next) {
    var timeline = CRUD.getTimeline(req.query.id)
    res.render('index', { timeline: timeline })
  })
  .get('/:page', function (req, res, next) {
    res.render('index', { page: req.params.page })
  })
  .get('/', function (req, res, next) {
    res.render('index')
  })

module.exports = router
