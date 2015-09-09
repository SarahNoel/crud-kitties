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

process.env.MONGOLAB_URI = 'mongodb://heroku_jgp5xkjn:j65n1bqd4sdbju2tp16cpkvo7h@ds047682.  .com:47682/heroku_jgp5xkjn';


mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/crud-kitties');
