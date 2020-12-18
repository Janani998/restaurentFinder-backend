const { restaurentModel } = require('../connector/restaurentConnector')
const { restaurentData } = require('../data/restaurentData')

const refreshAll = async () => {
    await restaurentModel.deleteMany({})
    
    await restaurentModel.insertMany(restaurentData)
}
refreshAll()