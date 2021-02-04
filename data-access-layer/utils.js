const { User, Passport, Stamp, Country, Tag } = require("../db/models");
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
  const user = await User.findByPk(userId, {
    include: [Passport],
  });

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
  findStamp,
  findOwnerId,
  getStamps,
  getUserPassports,
};
