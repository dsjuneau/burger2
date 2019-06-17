var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgers = {
      burgers: data
    };

    res.render("index", burgers);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req.body);
  if (req.body.burger) {
    burger.add(req.body.burger, function(result) {
      res.json({ id: result.insertId });
    });
  } else {
    res.json({ id: result.insertId });
  }
});

router.put("/api/burgers/:id", function(req, res) {
  burger.eat(req.params.id, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
