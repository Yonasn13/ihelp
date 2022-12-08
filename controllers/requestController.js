import db from '../database'

const requestController = {
  find: async (id) => {
    const request = await db.Request.findByPk(id)
    return JSON.parse(JSON.stringify(request))
  },
  findAll: async () => {
    const request = await db.Request.findAll()
    return JSON.parse(JSON.stringify(request))
  },
  create: async (data) => {
    const request = await db.Request.create(data)
    return JSON.parse(JSON.stringify(request))
  }
}

export default requestController