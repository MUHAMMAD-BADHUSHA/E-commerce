const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String}
        
    
})
module.export=mongoose.Model('users',userSchema)
