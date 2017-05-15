var express = require('express');
var router = express.Router();
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

module.exports = router;