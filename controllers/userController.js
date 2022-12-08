import db from '../database'

const userController = {
<<<<<<< HEAD
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
=======
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

>>>>>>> 76b0de5e927c9ef827f2197ebc30385b4ce98d53
}

export default userController
