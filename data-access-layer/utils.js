const { User, Passport, Stamp, Country, Tag } = require("../db/models");
const updateUserDisplayName = async (id, name, newName) => {
  let user = await User.findOne({
    where: {
      displayName: name,
    },
  });
  if (!name) {
    user = await User.findByPk(id);
  }

  const myUpdate = await user.update({
    displayName: newName,
  });

  return myUpdate.dataValues;
};

const findUserById = async (id) => {
  const user = await User.findByPk(id, {
    include: [Passport],
  });
  return user.dataValues;
};

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

  const userId = stamp.dataValues.Passport.dataValues.user_id;
  const user = await findUserById(userId);

  return user.dataValues;
};
const getStamps = async (userId) => {
  // returns an array of visited stamps
  const user = await User.findByPk(userId, {
    include: Passport,
  });

  const [data] = user.dataValues.Passports;

  const passportId = data.dataValues.id;

  const stamps = await Stamp.findAll({
    where: {
      passport_id: passportId,
    },
  });
  const idArray = stamps.map((stamp) => stamp.id);
  return idArray;
};

const getUserPassports = async (id) => {
  // returns users passport ID
  const passports = await Passport.findAll({
    where: {
      user_id: id,
    },
  });
  const results = passports.map((passport) => {
    const { dataValues } = passport;
    return dataValues.id;
  });
  return results;
};

module.exports = {
  updateUserDisplayName,
  findUserById,
  findStamp,
  findOwnerId,
  getStamps,
  getUserPassports,
};
