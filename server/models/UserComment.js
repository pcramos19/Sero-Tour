const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userCommentSchema = new Schema({
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  relatedTo:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: String,
  description: String
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const UserComment = mongoose.model('UserComment', userCommentSchema);
module.exports = UserComment;