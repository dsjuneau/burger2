var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  add: function(burger, cb) {
    orm.insertOne("burgers", burger, function(res) {
      cb(res);
    });
  },
  eat: function(id, cb) {
    orm.updateOne("burgers", id, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
