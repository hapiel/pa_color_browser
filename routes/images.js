const router = require('express').Router();
let Image = require('../models/image.model');

// search with keyword
router.route('/:keyword').get((req, res) => {
  const regex = new RegExp(req.params.keyword, 'i')

  Image.find({title: {$regex: regex}}).then(images => res.json(images))
  .catch(err => res.status(400).json('Error: ' + err));    
});

function hexToRgb(hex){
  hex = hex.replace('#','');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b] 
}

// search by color
router.route('/').get((req, res) => {
  let colorsString = req.headers.colorarray;
  let colorArray = colorsString.split(',');

  for (const color in colorArray) {
    console.log(hexToRgb(colorArray[color]));
  }
  
  const minPercent = 3;
  const tolerance = 3;

  Image.find(
    { colors: { $elemMatch: { "$and": [ 
      {"rgb.0": {$gte: r-tolerance, $lte: r+tolerance}}, 
      {"rgb.1": {$gte: g-tolerance, $lte: g+tolerance}}, 
      {"rgb.2": {$gte: b-tolerance, $lte: b+tolerance}}, 
      {percent: {$gte: minPercent}}] } } }
  ).then(images => res.json(images))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;