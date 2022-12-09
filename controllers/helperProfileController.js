import db from '../database'


const helperProfileController = {
  find: async (id) => {
    const helper = await db.HelperProfile.findByPk(id, {include: db.User})
    console.log('helper', JSON.parse(JSON.stringify(helper)))
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