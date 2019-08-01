var orm = require("../config/orm.js");

var trucks = {
  selectLocations: function(cb) {
    orm.selectLocations("trucks", function(res) {
      cb(res);
    });
  },

  selectTrucks: function(condition, cb) {
    orm.selectTrucks("trucks", condition, function(res) {
      cb(res);
    });
  },
/*   updateOne: function(objColVals, condition, cb) {
    orm.updateOne("trucks", objColVals, condition, function(res) {
      cb(res);
    });
  } */
};

// Export the database functions for the controller (catsController.js).
module.exports = trucks;
