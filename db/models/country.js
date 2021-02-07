"use strict";
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "Country",
    {
      name: DataTypes.STRING,
      flagUrl: DataTypes.STRING,
    },
    {}
  );
  Country.associate = function (models) {
    Country.hasMany(models.Stamp, { foreignKey: "countries_id" });
  };
  return Country;
};
