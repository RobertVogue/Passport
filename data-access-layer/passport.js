const { User, Passport } = require("../db/models");

const getUserPassports = async (id) => {
   const passports = await Passport.findAll({
      where: {
         user_id = id
      }
   })
   return passports
}

const getUserPassportSV = async (id) => {
      const passport = await Passport.findOne({
      where: {
         user_id = id,
         passport_status = "Visited"
      }
   })
return passport
}
const getUserPassportSWT = async (id) => {
      const passport = await Passport.findOne({
      where: {
         user_id = id,
         passport_status = "Want to visit"
      }
   })
return passport
}
const getUserPassportSNB = async (id) => {
      const passport = await Passport.findOne({
      where: {
         user_id = id,
         passport_status = "Near By"
      }
   })
return passport
}


module.exports = {
   getUserPassports,
   getUserPassportSV,
   getUserPassportSWT,
   getUserPassportSNB
}
