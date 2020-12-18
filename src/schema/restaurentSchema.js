const mongoose = require('mongoose');
const restaurentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    locality : {
        type : String,
        required : true
    },
    cusines : {
        type : Array,
        required : true
    },
    dishes : [{
        name : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        }
     }],
    streetName : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    }
})

exports.restaurentSchema = restaurentSchema;  