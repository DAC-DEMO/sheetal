var mysql = require('mysql');
var config = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "DAC2017"
};

module.exports = {
    "createPost": function(inputData) {
        var connection = mysql.createConnection(config);
        connection.connect();
        var sql = `INSERT INTO POST
                        (POST_TYPE,POST,PATH_OF_POST,LIKE_COUNT,DISLIKE_COUNT,SUPER_LIKE_COUNT)
                        VALUES(?,?,?,?,?,?)`;

        var param = [inputData.POST_TYPE, inputData.POST, inputData.PATH_OF_POST, 0, 0, 0];

        connection.query(sql, param, function(err, data) {
            if (!err) {
                console.log(data);
            }
            connection.end();
        });
    },

    "readAllPost": function(callback) {
        var connection = mysql.createConnection(config);
        connection.connect();
        var sql = "SELECT * FROM POST ORDER BY ID DESC";

        connection.query(sql, function(err, data) {
            if (!err) {
                console.log(data);
            }

            callback(err, data);

            connection.end();
        });
    }
};