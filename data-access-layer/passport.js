const { User, Passport } = require("../db/models");

const getUserPassports = async (id) => {
   const passports = await findAll({
      where: {
         user_id = id
      }
   })
   return passports
}

module.exports = {
   getUserPassports,
}
