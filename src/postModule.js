var express = require('express');
var router = express.Router();
var multer = require('multer');

var upload = multer({ dest: 'uploads/' })
var postModuleDB = require('./postModuleDB');

router.post("/", function(req, res) {
    var inputData = req.body;
    postModuleDB.createPost(inputData);

    res.json({ 'operation': true });
});

router.get("/", function(req, res) {
    postModuleDB.readAllPost(function(err, data) {
        res.json(data);
    });
});


router.post("/temp", upload.single('avatar'), function(req, res, next) {
    res.json(req.body);
});

module.exports = router;