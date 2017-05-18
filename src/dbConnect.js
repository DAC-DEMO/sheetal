/**
 * Reference : 
 *  https://carlosrymer.com/cleanly-destroying-database-connections-using-bluebird-js-22048249dbab
 */
var Promise = require('bluebird');
var mysql = require('mysql');

var config = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "DAC2017"
};
var connection = mysql.createConnection(config);

function getConnection() {

    // OPTION 1
    return Promise.try(function() {
        return Promise.promisifyAll(mysql.createConnection(config))
    }).disposer(function(connection, promise) {
        connection.end();
        console.log("CONNECTION ENDS");
    });;

    // OPTION 2
    /*return Promise.try(() => Promise.promisifyAll(mysql.createConnection(config)))
        .disposer(connection => connection.end());*/
};

function readAll() {
    var sql = "SELECT * FROM POST ORDER BY ID DESC";

    Promise.using(getConnection(), function(connection) {
        return connection.queryAsync(sql);
    }).then(function(results) {
        console.log(results);
    });
};


readAll();