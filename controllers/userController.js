import db from '../database'

const userController = {
  find: async (id) => {
    const user = await db.User.findByPk(id)
    return JSON.parse(JSON.stringify(user))
  },
  findAll: async () => {
    const users = await db.User.findAll()
    return JSON.parse(JSON.stringify(users))
  },
  create: async (data) => {
    const user = await db.User.create(data)
    return JSON.parse(JSON.stringify(user))
  }

}

export default userController
