var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Kitty = new Schema(
  {
    name: String,
    gender: String,
    age: Number,
    favoriteFood: String
  }
);

mongoose.model('kitties', Kitty);

mongoose.connect('mongodb://localhost/crud-kitties');
