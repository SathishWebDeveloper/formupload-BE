const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserListSchema = new Schema({
  name : {
    type : String, 
    required : true
  } , 
   age : {
    type : Number,
    required : true
   },
   education : {
    type : [String],
    required : true
   },
   image : {
    type : String,
    required:true
   }
})

const User = mongoose.model('alluser', UserListSchema);
module.exports = User;
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const ProductSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   }
// });

// const Product = mongoose.model('product', ProductSchema);
// module.exports = Product;