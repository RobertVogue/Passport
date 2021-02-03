const { Stamp, Passport } = require("../db/models");

const findStamp = async (id) => {
  const stamp = await Stamp.findOne({
    where: {
      id,
    },
  });
};

module.exports = {
  findStamp,
};
