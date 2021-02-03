try {
  const { User } = require("./db/models");
  const findUserById = async (id) => {
    const user = User.findByPk(id);
    return user;
  };
} catch (err) {
  console.log(err);
}

module.exports = {
  findUserById,
};
