//import ORM into here
//create code that will use the various ORMs with specific inputs
//export file

var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insert: function (value, cb) {
        orm.insertOne("burgers", "burger_name", value, function (res) {
            cb(res);
        });
    },
    update: function(id, cb){
        orm.updateOne("burgers", "devoured", true, "id", id, function(res){
            cb(res);
        });
    }
}