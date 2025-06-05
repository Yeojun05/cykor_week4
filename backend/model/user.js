const mongoose = require('mongoose');

const UserSchema = new mongoose.schema({
    name :{
        type : string,
        required : true
    },
    password :{
        type : string,
        required : true
    },
    date:{
        type:Date,
        default : Date.now
    }
})