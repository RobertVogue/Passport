const { Stamp, Passport, Country, Tag } = require("../db/models");

const findStamp = async (stampId) => {
  const stamp = await Stamp.findByPk(stampId, {
    include: [Passport, Country, Tag],
  });

  return stamp.dataValues;
};

const findOwnerId = async (stampId) => {
  const stamp = await Stamp.findByPk(stampId, {
    include: [Passport],
  });
  const userId = await stamp.user_id;

  return userId;
};

// handleAsync(findStamp, findOwnerId);
module.exports = {
  // getAllStamps,
  findStamp,
  findOwnerId,
};
