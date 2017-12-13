var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/table', function(req, res, next) {
    res.render('table');
});

router.get('/image', function(req, res, next) {
    res.render('image');
});

module.exports = router;