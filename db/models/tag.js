"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Tag.associate = function (models) {
    Tag.hasMany(models.Stamp, { foreignKey: "tags_id" });
  };
  return Tag;
};
