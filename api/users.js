const mongoose = require('mongoose');
const plm=require('passport-local-mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');
const userSchema=mongoose.Schema({
  username:String,
  password:String,
  secret:String,
  // category:[{
  //   type:String,
  //   default:[]
  // }],
  // datecreated:[{
  //   type:Date,
  //   default:Date.now
  // }],
  // age:Number
})

userSchema.plugin(plm)

module.exports=mongoose.model('user',userSchema);