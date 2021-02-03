"use strict";

const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const Stamp = sequelize.define("Stamp", {
    name: {
      allowNull: false,
      type: Sequelize.STRING(20),
    },
    detailed_location: {
      allowNull: false,
      type: Sequelize.STRING(50),
    },
    passport_id: {
      type: Sequelize.INTEGER,
    },
    countries_id: {
      type: Sequelize.INTEGER,
    },
    tags_id: {
      type: DataTypes.ARRAY(sequelize.INTEGER),
    },
    dates: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.STRING,
    },
    review: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.INTEGER,
    },
    imgURL: {
      type: Sequelize.STRING,
    },
  });

  Stamp.associate = function (models) {
    Stamp.belongsTo(models.Passport, { foreignKey: "passport_id" });
    Stamp.belongsTo(models.Stamp_Tag, { foreignKey: "tags_id" });
    Stamp.belongsTo(models.Country, { foreignKey: "countries_id" });
  };
  return Stamp;
};
