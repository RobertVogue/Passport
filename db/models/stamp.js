"use strict";
module.exports = (sequelize, DataTypes) => {
  const Stamp = sequelize.define(
    "Stamp",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Stamp.associate = function (models) {
    Stamp.belongsTo(models.Passport, { foreignKey: "passport_id" });
    Stamp.belongsTo(models.Stamp_Tag, { foreignKey: "tags_id" });
    Stamp.belongsTo(models.Country, { foreignKey: "countries_id" });
  };
  return Stamp;
};
