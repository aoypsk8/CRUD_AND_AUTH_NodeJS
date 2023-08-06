const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    password: {
        type:String
    },
  },
  { timestams: true }
);

module.exports = mongoose.model('user',userSchema)