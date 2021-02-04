const { User, Passport, Stamp, Country, Tag } = require("../db/models");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const updateEmail = async (id, email, newEmail) => {
  let user = await User.findOne({
    where: {
      email,
    },
  });
  if (!email) {
    user = await User.findByPk(id);
  }

  const result = await user.update({
    email: newEmail,
  });

  return result.dataValues;
};

const updatePassword = async (id, email, newPassword) => {
  let user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user) {
    user = await User.findByPk(id);
  }
  const newHashedPassword = await bcrypt.hash(newPassword, 8);
  const result = await user.update({
    hashedPassword: newHashedPassword,
  });

  return result.dataValues.hashedPassword;
};

const updateusername = async (id, name, newName) => {
  let user = await User.findOne({
    where: {
      username: name,
    },
  });
  if (!user) {
    user = await User.findByPk(id);
  }

  const myUpdate = await user.update({
    username: newName,
  });

  return myUpdate.dataValues;
};

const createNewUser = async (
  username,
  displayName,
  email,
  passwordToBeHassed
) => {
  const hashedPassword = await bcrypt.hash(passwordToBeHassed, 8);

  const newUser = await User.create({
    username,
    displayName,
    email,
    hashedPassword,
  });
  if (newUser) {
    return newUser.dataValues;
  } else {
    return Error("user not created");
  }
};
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

const getTenStamps = async (userId) => {
  let user = await findUserById(userId);
  const myMap = user.Passports.map((passport) => passport.dataValues.id);
  const res = await Stamp.findAll({
    where: {
      passport_id: {
        [Op.or]: [...myMap],
      },
    },
    limit: 10,
  });
  return res;
};

module.exports = {
  getTenStamps,
  updateEmail,
  updatePassword,
  updateusername,
  createNewUser,
  updateUserDisplayName,
  findUserById,
  findStamp,
  findOwnerId,
  getStamps,
  getUserPassports,
};
