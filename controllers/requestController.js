import db from '../database'

const requestController = {
  find: async (id) => {
<<<<<<< HEAD
    const request = await db.Request.findByPk(id, {include: db.HelperProfile})
=======
    const request = await db.Request.findByPk(id, { include: { model: db.HelperProfile, include: db.User } })
>>>>>>> 467fa096ce2ff33cf40d194376d4a7257b346330
    return JSON.parse(JSON.stringify(request))
  },
  findAll: async () => {
    const request = await db.Request.findAll({ include: { model: db.HelperProfile, include: db.User } })
    return JSON.parse(JSON.stringify(request))
  },
  create: async (data) => {
    const request = await db.Request.create(data)
    return JSON.parse(JSON.stringify(request))
  }
}

export default requestController