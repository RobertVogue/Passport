'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stamp_Tag = sequelize.define('Stamp_Tag', {
    name: DataTypes.STRING
  }, {});
  Stamp_Tag.associate = function(models) {
    Stamp_Tag.belongsTo(models.Stamp, {foreignKey: 'tags_id'})
  };
  return Stamp_Tag;
};
