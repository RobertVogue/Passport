const { User } = require("../db/models");
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
    email: newEmail,
  });
};
const updatePassword = async (id, email, oldPassword, newPassword) => {
  const newHashedPassword = await bcrypt(newPassword, 8);
  let user = await User.findeOne({
    where: {
      email,
    },
  });
  if (!email) {
    user = await User.findByPk(id);
  }
  const confirmPassword = await bcrypt.compare(
    oldPassword,
    user.hashedPassword,
    (err) => {
      console.log(err);
      return false;
    }
  );
  if (confirmPassword) {
    return await user.update({
      hashedPassword: newHashedPassword,
    });
  } else {
    return new Error("wrong password!");
  }
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
  updatePassword,
};
