const { User } = require("../db/models");
const bcrypt = require("bcryptjs");

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

  const newUser = await User.create({
    username,
    displayName,
    email,
    hashedPassword,
  });
  if (newUser) {
    return newUser;
  } else {
    return Error("user not created");
  }
};

module.exports = {
  createNewUser,
  updateusername,
  updateEmail,
  updatePassword,
};
