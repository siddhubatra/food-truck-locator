var express = require("express");

var router = express.Router();

var trucks = require("../models/foodTruck.js");

router.get("/", function(req, res) {
  trucks.selectLocations(function(data) {
    var hbsObject = {
      locations: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/addtruck", function(req, res) {
  trucks.selectLocations(function(data) {
    var hbsObject = {
      locations: data
    };
    console.log(hbsObject);
    res.render("add-truck", hbsObject);
  });
});

router.get("/:location", function(req, res) {
  var condition = "location = " + '"' + req.params.location + '"';
  console.log("condition", condition);
  trucks.selectTrucks(
    condition,    
    function(data) {
    var hbsObject = {
      trucks: data
    };
    console.log(hbsObject);
    res.render("all-trucks", hbsObject);
  });
});

router.get("/:location/:truck", function(req, res) {
  var condition = "location = " + '"' + req.params.location + '"';
  console.log("condition", condition);
  trucks.selectTrucks(
    condition,    
    function(data) {
    var hbsObject = {
      menu: data
    };
    console.log(hbsObject);
    res.render("specific-truck", hbsObject);
  });
});

/* router.post("/api/burgers", function(req, res) {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
}); */

// Export routes for server.js to use.
module.exports = router;
