import db from '../database'

const helperProfileController = {
  find: async (id) => {
<<<<<<< HEAD
    const helper = await db.HelperProfile.findByPk(id, {include: db.User})
=======
    const helper = await db.HelperProfile.findByPk(id, { include: db.Request })
>>>>>>> 467fa096ce2ff33cf40d194376d4a7257b346330
    return JSON.parse(JSON.stringify(helper))
  },
  findByUser: async (userId) => {
    const helper = await db.HelperProfile.findOne( { where: {UserId: userId}, include: db.Request})
    return JSON.parse(JSON.stringify(helper))
  },
  findUser: async (userId) => {
    const helper = await db.HelperProfile.findOne({ where: { UserId: userId}, include: db.User})
    return JSON.parse(JSON.stringify(helper))
  },
  findAll: async () => {
    const helper = await db.HelperProfile.findAll({include: db.User})
    return JSON.parse(JSON.stringify(helper))
  },
  create: async (data) => {
    const helper = await db.HelperProfile.create(data)
    return JSON.parse(JSON.stringify(helper))
  }
}

export default helperProfileController