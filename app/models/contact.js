'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ContactSchema = new Schema({
    email:{
        type:String //email of the contact
    },
    name:{
        type:String //Full name of contact
    },
    city:{
        type:String //city of contact
    },
    phoneNumber:{
        type:String //phone number 
    },
    company:{
        type:String //company of contact
    },
    createdAt:{   //At what time it is created
        type:Date,
        default: Date.now
    }
});

//compile and export the Contact model
module.exports = mongoose.model('Contact',ContactSchema);