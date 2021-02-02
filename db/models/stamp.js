'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stamp = sequelize.define('Stamp', {
    name: DataTypes.STRING
  }, {});
  Stamp.associate = function(models) {
  };
  return Stamp;
};
