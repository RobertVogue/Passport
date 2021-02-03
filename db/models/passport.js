"use strict";
module.exports = (sequelize, DataTypes) => {
  const Passport = sequelize.define("Passport",
    {
      passport_status: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {}
  );
  Passport.associate = function (models) {
    Passport.hasMany(models.Stamp, { foreignKey: "passport_id" });
    Passport.belongsTo(models.User, { foreignKey: "user_id" });
  };
  return Passport;
};
