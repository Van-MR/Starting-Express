var mongoose = require('mongoose')

const heroSchema = mongoose.Schema({
  name:String,
  age:String,
  sex:String,
  address:String,
  dowhat:String,
  imgArr:[],
  favorite:String,
  explain:String
},{collection:'myhero'})

const Hero = module.exports =  mongoose.model('hero',heroSchema);
