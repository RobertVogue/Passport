'use strict';
module.exports = (sequelize, DataTypes) => {
  const Passport = sequelize.define('Passport', {
    passport_status: DataTypes.STRING
  }, {});
  Passport.associate = function(models) {
    Passport.hasMany(models.Stamp, {foreignKey: 'passport_id'})
  };
  return Passport;
};
