'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING
  }, {});
  Country.associate = function(models) {
    Country.belongsTo(models.Stamp, {foreignKey: 'countries_id'})
  };
  return Country;
};
