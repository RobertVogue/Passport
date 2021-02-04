"use strict";
module.exports = (sequelize, DataTypes) => {
  const Stamp = sequelize.define("Stamp", {
    name: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    detailed_location: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    passport_id: {
      type: DataTypes.INTEGER,
    },
    countries_id: {
      type: DataTypes.INTEGER,
    },
    tags_id: {
      type: DataTypes.INTEGER,
    },
    dates: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    review: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    imgURL: {
      type: DataTypes.STRING,
    },
  });
  Stamp.associate = function (models) {
    Stamp.belongsTo(models.Passport, { foreignKey: "passport_id" });
    Stamp.belongsTo(models.Tag, { foreignKey: "tags_id" });
    Stamp.belongsTo(models.Country, { foreignKey: "countries_id" });
  };
  return Stamp;
};
