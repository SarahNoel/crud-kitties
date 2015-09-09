var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Kitty = mongoose.model('kitties');

// GET all kitties
router.get('/kitties', function(req, res, next){
  Kitty.find(function(error, kitties){
  res.json(kitties);
  });
});


// GET one kitty
router.get('/kitty/:id', function(req, res, next){
  var query = {'_id':req.params.id};
  Kitty.findOne(query, function(error, kitty){
    res.json(kitty);
  });
});


// POST- make new kitty
router.post('/kitties', function(req, res, next){
  new Kitty(req.body)
  .save(function(err, kitty){
  res.json({message:'Kitty added!'});
  });
});


// UPDATE one kitty
router.put('/kitty/:id', function(req, res, next){
  var query = {'_id':req.params.id};
  var update = req.body;
  var options = {new: true};
  Kitty.findOneAndUpdate(query, update, options, function(error, kitty){
    res.json(kitty);
  });
});


// DELETE one kitty
router.delete('/kitty/:id', function(req, res, next){
  var query = {'_id': req.params.id};
  Kitty.findOneAndRemove(query, function(error, kitty){
    res.json({message:'kitty deleted'});
  });
});



module.exports = router;
