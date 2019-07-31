module.exports = function (sequelize, DataTypes) {
  var Truck = sequelize.define("Truck", {
    location: DataTypes.STRING,
    name: DataTypes.STRING,
    foodtype: DataTypes.STRING,
    menu: DataTypes.ARRAY,
    approved: DataTypes.BOOLEAN
  });
  return Truck;
};
