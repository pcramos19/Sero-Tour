const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const tourSchema = new Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    img: { type: String, default: 'https://madridsecreto.co/wp-content/uploads/2019/10/shutterstock_507446725-1.jpg' },
    audio: String,
    title: String,
    rates: Number, //se puede hardcodear y no media la media para empezar
    description: String,
    languages:[{type: String, enum: ["Espanol","Ingles","Frances","Aleman"], default: "Espanol"}],
    duration: Number,
    location: {},
    comments: [],
    route: []
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;