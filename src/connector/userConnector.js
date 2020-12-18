const mongoURI = "mongodb://localhost:27017" + "/restaurentFinder"
let mongoose = require('mongoose');
const { userSchema } = require('../schema/userSchema')

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });

const userModel = mongoose.model('users', userSchema)


exports.userModel = userModel;