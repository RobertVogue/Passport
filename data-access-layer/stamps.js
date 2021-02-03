const { Stamp, Passport } = require("../db/models");

const findStamp = async (id) => {
  const stamp = await Stamp.findOne({
    where: {
      id,
    },
  });
};

const findOwnerId = async (stampId) => {
   const passportItsIn = await Stamp.findOne({
      where: {
         id = stampId
      },
      include: {
         Passport
      }
   })
   const userId = await passportItsIn.user_id

   return userId
}
module.exports = {
  findStamp,
  findOwnerId
};
