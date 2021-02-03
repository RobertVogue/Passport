const { name } = require("faker");
const { User } = require("./db/models");

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

// const findAllStampsFromUser = async (id) => {
//   const user = await User.findByPk(id);
//   const allStamps;
// };

module.exports = {
  findUserById,
  updateUserDisplayName,
};
