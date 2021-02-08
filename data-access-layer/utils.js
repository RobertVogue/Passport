const { User, Passport, Stamp, Country, Tag } = require("../db/models");
const db = require("../db/models");
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
  const Array = stamps.map((stamp) => stamp);
  return Array;
};

const getUserPassports = async (id) => {
  const passports = await Passport.findAll({
    where: {
      user_id: id,
    },
  });
  const results = passports.map((passport) => {
    const { dataValues } = passport;
    return dataValues;
  });
  // console.log(results);
  return results;
};
const getVisitedPassports = async (id) => {
  const passports = await Passport.findAll({
    where: {
      user_id: id,
      passport_status: "Visited",
    },
  });
  const results = passports.map((passport) => {
    const { dataValues } = passport;
    return dataValues;
  });
  const [data] = results;
  // console.log(data);
  return data;
};
const getGoingToPassports = async (id) => {
  const passports = await Passport.findAll({
    where: {
      user_id: id,
      passport_status: "Want to visit",
    },
    include: [Stamp],
  });
  const results = passports.map((passport) => {
    const { dataValues } = passport;
    return dataValues;
  });
  const [data] = results;
  // console.log(data);
  return data;
};
const getLocalPassports = async (id) => {
  const passports = await Passport.findAll({
    where: {
      user_id: id,
      passport_status: "Near By",
    },
  });
  const results = passports.map((passport) => {
    const { dataValues } = passport;
    return dataValues;
  });
  const [data] = results;
  // console.log(data);
  return data;
};

const get100Stamps = async (userId) => {
  let user = await findUserById(userId);
  let passportIds = await getUserPassports(userId);
  const myMap = user.Passports.map((passport) => passport.dataValues.id);
  const res = await Stamp.findAll({
    limit: 100,
  });
  const results = res.map((result) => result.dataValues);
  return results;
};

const createTag = async (name) => {
  const newTag = await Tag.create({ name });
  if (newTag) {
    return newTag.dataValues;
  } else {
    return Error("tag not created");
  }
};

const createStamp = async (
  name,
  detailed_location,
  passport_id,
  countries_id,
  tags_id,
  dates, //"12-12-12:01-02-13"
  price,
  review,
  rating
) => {
  const stamp = await Stamp.create({
    name,
    detailed_location,
    passport_id,
    countries_id,
    tags_id,
    dates,
    price,
    review,
    rating,
  });
  if (stamp) {
    return stamp.dataValues;
  } else {
    return Error("tag not created");
  }
};

const getComments = async (userId) => {
  const stamps = await getStamps(userId);
  const res = stamps.map((data) => data.dataValues.review);
  // console.log(res);
  return res;
};

const getTags = async () => {
  const tags = await Tag.findAll();
  const data = tags.map((tag) => tag.dataValues);
  return data;
};
const getUsersTags = async (id) => {
  const passports = await Passport.findAll({
    where: {
      user_id: id,
    },
    include: [Stamp],
  });
  const results = passports.map((passport) => {
    const { dataValues } = passport;
    return dataValues.Stamps;
  });
  // console.log(results);

  let stamps = results.flat();
  const tagsIds = stamps.map((stamp) => {
    const data = stamp.dataValues;
    const { tags_id } = data;
    return tags_id;
  });
  const tags = await Tag.findAll({
    where: {
      [Op.and]: [{ id: tagsIds }],
    },
  });
  const tagData = tags.map((tag) => tag.dataValues);
  console.log(tagData);
  return tagData;
};

const getCountries = async (id) => {
  const countries = await Country.findByPk(id);

  return countries;
};

const getTopCountriesIds = async (user_id) => {
  let arr = [];
  const countryIds = [];

  const passports = await getUserPassports(user_id);
  const ids = passports.map((passport) => passport.id);

  for (let i = 1; i < 196; i++) {
    let stamps = await Stamp.findAll({
      where: {
        countries_id: i,
        passport_id: ids,
      },
      include: [Country],
    });
    arr.push(stamps);
  }

  arr.forEach(async (stamps) => {
    // const stamp = stamp;
    if (stamps.length) {
      let [Stamp] = stamps;
      let id = Stamp.countries_id;
      countryIds.push(id);
    }
  });
  return countryIds;
};

const topWantToVisit = async () => {
  const topCountries = await Stamp.findAll({
    where: { rating: 10 },
    include: [
      {
        model: Passport,
        where: { passport_status: "Want to visit" },
      },
      {
        model: Country,
      },
    ],
  });
  const countryObj = {};

  const countryNames = topCountries.map((data) => {
    return data.Country.dataValues.name;
  });

  countryNames.forEach((country) => {
    if (countryObj[country]) {
      countryObj[country]++;
    } else {
      countryObj[country] = 1;
    }
  });

  let countriesArr = Object.entries(countryObj)
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[0]);
  return countriesArr.splice(0, 10);
};

const topVisited = async () => {
  const topCountries = await Stamp.findAll({
    where: { rating: 10 },
    include: [
      {
        model: Passport,
        where: { passport_status: "Visited" },
      },
      {
        model: Country,
      },
    ],
  });
  const countryObj = {};

  const countryNames = topCountries.map((data) => {
    return data.Country.dataValues.name;
  });

  countryNames.forEach((country) => {
    if (countryObj[country]) {
      countryObj[country]++;
    } else {
      countryObj[country] = 1;
    }
  });

  let countriesArr = Object.entries(countryObj)
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[0]);
  return countriesArr.splice(0, 10);
};

const topNearBy = async () => {
  const topCountries = await Stamp.findAll({
    where: { rating: 10 },
    include: [
      {
        model: Passport,
        where: { passport_status: "Near By" },
      },
      {
        model: Country,
      },
    ],
  });
  const countryObj = {};

  const countryNames = topCountries.map((data) => {
    return data.Country.dataValues.name;
  });

  countryNames.forEach((country) => {
    if (countryObj[country]) {
      countryObj[country]++;
    } else {
      countryObj[country] = 1;
    }
  });

  let countriesArr = Object.entries(countryObj)
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[0]);
  return countriesArr.splice(0, 10);
};

module.exports = {
  get100Stamps,
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
  getUsersTags,
  createTag,
  createStamp,
  getLocalPassports,
  getGoingToPassports,
  getVisitedPassports,
  getComments,
  getTags,
  topWantToVisit,
  topVisited,
  topNearBy,
};
