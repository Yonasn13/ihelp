import db from "../database"

const usersController = {
    find: async (id) => {
        const user = await db.User.findByPk(id)
        return JSON.parse(JSON.stringify(user))
    },
    findAll: async () => {
        const user = await db.User.findAll()
        return JSON.parse(JSON.stringify(user))
    },
    create: async (data) => {
        const user = await db.User.create(data)
        return JSON.parse(JSON.stringify(user))
    }
}

export default usersController;