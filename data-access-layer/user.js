const { User } = require("./db/models");
const bcrypt = require("bcryptjs");

const findUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (err) {
    console.log(err);
  }
};

const updateUserDisplayName = async (id, name, newName) => {
  let user = await User.findeOne({
    where: {
      displayName: name,
    },
  });
  if (!name) {
    user = await User.findByPk(id);
  }

  await user.update({
    displayName: newName,
  });
};
const updateusername = async (id, name, newName) => {
  let user = await User.findeOne({
    where: {
      username: name,
    },
  });
  if (!name) {
    user = await User.findByPk(id);
  }

  await user.update({
    username: newName,
  });
};
const updateEmail = async (id, email, newEmail) => {
  let user = await User.findeOne({
    where: {
      email,
    },
  });
  if (!email) {
    user = await User.findByPk(id);
  }

  await user.update({
    newEmail,
  });
};

const createNewUser = async (
  username,
  displayName,
  email,
  passwordToBeHassed
) => {
  const hashedPassword = await bcrypt(passwordToBeHassed, 8);

  return await User.create({ username, displayName, email, hashedPassword });
};

module.exports = {
  findUserById,
  updateUserDisplayName,
  createNewUser,
  updateusername,
  updateEmail,
};
