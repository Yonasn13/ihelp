import db from "../database"

const helperController = {
    find: async (id) => {
        const helper = await db.Helper.findByPk(id)
        return JSON.parse(JSON.stringify(helper))
    },
    findAll: async () => {
        const helper = await db.Helper.findAll()
        return JSON.parse(JSON.stringify(helper))
    },
    create: async (data) => {
        const helper = await db.Helper.create(data)
        return JSON.parse(JSON.stringify(helper))
    }
}

export default helperController;

