const { Stamp } = require("../db/models");

const findStamp = async (id) => {
  const stamp = await Stamp.findByPk(id);
  return stamp;
};

const findOwnerId = async (stampId) => {
  const stamp = await Stamp.findByPk(stampId, {
    include: { Passport },
  });
  const userId = await stamp.user_id;

  return userId;
};

// const handleAsync = async (cb1, cb2) => {
//   try {
//     const res1 = await cb1(2);
//     const res2 = await cb2(2);

//     console.log(res1, res2);
//   } catch (err) {
//     console.log(err);
//   }
// };

// handleAsync(findStamp, findOwnerId);
module.exports = {
  findStamp,
  findOwnerId,
};
