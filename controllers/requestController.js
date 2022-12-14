import db from '../database'

const requestController = {
  find: async (id) => {
    const request = await db.Request.findByPk(id, { include: { model: db.HelperProfile, include: db.User } })
    return JSON.parse(JSON.stringify(request))
  },
  findAllUser: async (id) => {
    const request = await db.Request.findAll({ where: {UserId: id }, include: { model: db.HelperProfile, include: db.User } })
    return JSON.parse(JSON.stringify(request))
  },
  findAll: async () => {
    const request = await db.Request.findAll({ include: { model: db.HelperProfile, include: db.User } })
    return JSON.parse(JSON.stringify(request))
  },

  findAllUser: async (id) => {
    const request = await db.Request.findAll({ where: {UserId: id }, include: { model: db.HelperProfile, include: db.User } })
    return JSON.parse(JSON.stringify(request))
  },

  create: async (data) => {
    console.log(data)
    const { HelperProfileId, UserId, message} = data
    const request = await db.Request.create({ HelperProfileId, UserId, message})
    return JSON.parse(JSON.stringify(request))
  }
}

export default requestController