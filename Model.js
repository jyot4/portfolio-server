import mongoose, { model } from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type: String,
        required :true,
    
    },
    email:{
        type:String,
        require:true
    },
    text:{
        type:String,
        require:true
    }

})

const user = mongoose.model('ContactDetail',schema)
export default user;