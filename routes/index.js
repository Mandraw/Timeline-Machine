var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/addTimeline', function (req, res, next) {
  res.render('addTimeline')
})
  .get('/:page', function (req, res, next) {
    res.render('index', { page: req.params.page })
  })
  .get('/', function (req, res, next) {
    res.render('index')
  })

module.exports = router
