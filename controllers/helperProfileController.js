import db from '../database'

const helperProfileController = {
    find: async (id) => {
        const helper =await db.HelperProfile.findByPk(id)
        return JSON.parse(JSON.stringify(helper))
      },
      findAll: async () => {
        const helper = await db.HelperProfile.findAll()
        return JSON.parse(JSON.stringify(helper))
      },
      create: async (data) => {
        const helper = await db.HelperProfile.create(data)
        return JSON.parse(JSON.stringify(helper))
      }
    }

/*const helperProfileController = {
  all: async () => {
    const helperProfiles = await db.HelperProfile.findAll()
    const parsedHelperProfile = JSON.parse(JSON.stringify(helperProfiles))
    return parsedHelperProfile
  },
  find: async (id) => {
    return await db.HelperProfile.findByPk(id)
  }
}*/


export default helperProfileController