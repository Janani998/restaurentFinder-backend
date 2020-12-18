const mongoURI = "mongodb://localhost:27017" + "/restaurentFinder"
let mongoose = require('mongoose');
const { restaurentSchema } = require('../schema/restaurentSchema')

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });

const restaurentModel = mongoose.model('restaurents', restaurentSchema)


exports.restaurentModel = restaurentModel;