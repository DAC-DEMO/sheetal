var express = require('express');
var router = express.Router();
var postModuleDB = require('./postModuleDB');

router.post("/", function(req, res) {
    var inputData = req.body;
    postModuleDB.createPost(inputData);

    res.json({ 'operation': true });
});

module.exports = router;