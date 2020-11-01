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
  let query = {'$and': []};
  const minPercent = 0;
  const tolerance = 5;

  for (const color in colorArray) {
    let rgb = hexToRgb(colorArray[color]);
      query['$and'].push(
        { colors: { $elemMatch: { "$and": [ 
          {"rgb.0": {$gte: rgb[0]-tolerance, $lte: rgb[0]+tolerance}}, 
          {"rgb.1": {$gte: rgb[1]-tolerance, $lte: rgb[1]+tolerance}}, 
          {"rgb.2": {$gte: rgb[2]-tolerance, $lte: rgb[2]+tolerance}}, 
          {percent: {$gte: minPercent}},
        ]}}},
      );
  }

  Image.find(query).then(images => res.json(images))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  const pjId = req.params.id

  Image.findOne({"pjId": pjId}).then(images => res.json(images))
  .catch(err => res.status(400).json('Error: ' + err));    
});

module.exports = router;