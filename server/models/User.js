const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  img: { type: String, default: 'https://i.stack.imgur.com/l60Hf.png' },
  name: String,
  email: String,
  description: String,
  fav: [],
  historic: [],
  toursCreated: [],
  comments: [],
  // rol: {type: String, enum: ["User", "Guide"], default: "User"}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
