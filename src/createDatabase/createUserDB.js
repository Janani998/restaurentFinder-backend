const { userModel } = require('../connector/userConnector')
const { userData } = require('../data/userData')

const refreshAll = async () => {
    await userModel.deleteMany({})
    
    await userModel.insertMany(userData)
}
refreshAll()