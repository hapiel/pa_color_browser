const router = require('express').Router();
let Image = require('../models/image.model');

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
  let colorString = req.headers.colorarray;
  let keyword = req.headers.keyword;
  let author = req.headers.author;
  let query = {'$and': []};
  let page = 1;

  if(keyword !== "undefined" && keyword){
    let keywordArray = keyword.split(/[ ,]+/);
    keywordArray = keywordArray.map(function(word){return new RegExp("\\b" + word + "\\b")});
    query['$and'].push({ $or: [ {title: {$all: keywordArray}}, {desc: {$all: keywordArray}} ]});
  }
  if(author !== "undefined" && author){
    author = new RegExp(req.headers.author, 'i');
    query['$and'].push({author: {$regex: author}});
  }
  if(colorString){
    let colorArray = colorString.split(',');
    colorArray = colorArray.filter(onlyUnique);
    console.log(colorArray.length);
    let tolerance = 2 * colorArray.length + 5;
    const minPercent = 0.1;

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
  }

  if(query['$and'].length){
    Image.find(query).skip((page-1)*10).limit(100).sort({pjId: -1}).then(images => res.json(images))
    .catch(err => res.status(400).json('Error: ' + err));
  }
});

router.route('/:id').get((req, res) => {
  const id = parseInt(req.params.id);
  Image.findOne({pjId: id}).then(images => res.json(images))
  .catch(err => res.status(400).json('Error: ' + err));    
});

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

module.exports = router;