const router = require('express').Router();
let Image = require('../models/image.model');

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// search with keyword
router.route('/:keyword').get((req, res) => {
  const regex = new RegExp(req.params.keyword, 'i')

  Image.find({title: {$regex: regex}}).then(images => res.json(images))
  .catch(err => res.status(400).json('Error: ' + err));    
});

// search by color
router.route('/').get((req, res) => {
  let colorArray = req.headers.colorarray.replace('#','');
  const bigint = parseInt(colorArray, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  Image.find(
    { colors: { $elemMatch: { "$and": [ {"rgb.0": r}, {"rgb.1": g}, {"rgb.2": b} ] } } }
  ).then(images => res.json(images))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;