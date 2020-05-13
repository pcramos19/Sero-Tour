const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const stoppedSchema = new Schema({
    tour: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
    img: String,
    audio: String,
    title: String,
    description: String,
    location: {},
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Stopped = mongoose.model('Stopped', stoppedSchema);
module.exports = Tour;