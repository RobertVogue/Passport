const { User, Passport, Stamp, Country, Stamp_Tag } = require("../db/models");

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
  getStamps,
  getUserPassports,
};
