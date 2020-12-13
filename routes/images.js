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

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// GET IMAGE DETAILS
router.route('/:id').get((req, res) => {
  const id = parseInt(req.params.id);
  Image.findOne({pjId: id}).then(images => res.json(images))
  .catch(err => res.status(400).json('Error: ' + err));    
});

// GET RELATING ARTWORKS
router.route('/:id/relatingworks').get((req, res) => {
  let colorObject = JSON.parse(req.headers.colorarray);
  const tolerance = 2;
  const minPercent = 0.15;
  let page = 1;
  let query = {'$and': []};

  for (const color in colorObject) {
    let rgb = colorObject[color].rgb;
        query['$and'].push(
          { colors: { $elemMatch: { "$and": [ 
            {"rgb.0": {$gte: rgb[0]-tolerance, $lte: rgb[0]+tolerance}}, 
            {"rgb.1": {$gte: rgb[1]-tolerance, $lte: rgb[1]+tolerance}}, 
            {"rgb.2": {$gte: rgb[2]-tolerance, $lte: rgb[2]+tolerance}}, 
            {percent: {$gte: minPercent}},
          ]}}},
      );
  }

  if(query['$and'].length){
    Image.find(query).skip((page-1)*10).limit(100).sort({pjId: -1}).then(images => res.json(images))
    .catch(err => res.status(400).json('Error: ' + err));
  }
});

// BUILD QUERY
router.route('/').get((req, res) => {
  let colorString = req.headers.colorarray;
  let keyword = req.headers.keyword;
  let author = req.headers.author;
  let colorMin = req.headers.colormin;
  let colorMax = req.headers.colormax;
  let sizeType = req.headers.sizetype;
  let height = req.headers.height;
  let width = req.headers.width;
  let beforeDate = req.headers.beforedate;
  let afterDate = req.headers.afterdate;
  let animation = req.headers.animation;
  let transparency = req.headers.transparency;
  let tolerance = req.headers.tolerance;
  let query = {'$and': []};
  let page = 1;

  // KEYWORD TITLE || DESCRIPTION
  if(keyword !== "undefined" && keyword){
    let keywordArray = keyword.split(/[ ,]+/);
    keywordArray = keywordArray.map(function(word){return new RegExp("\\b" + word + "\\b", "i")});
    query['$and'].push({ $or: [ {title: {$all: keywordArray}}, {desc: {$all: keywordArray}} ]});
  }

  // AUTHOR
  if(author !== "undefined" && author){
    author = new RegExp(req.headers.author, 'i');
    query['$and'].push({author: {$regex: author}});
  }

  // COLOR COUNT
  if((colorMin !== "undefined" && colorMin) && (colorMax !== "undefined" && colorMax)){
    query['$and'].push({colorCount: {$gte: colorMin, $lte: colorMax}});
  }else if(colorMin !== "undefined" && colorMin){
    query['$and'].push({colorCount: {$gte: colorMin}});
  }else if(colorMax !== "undefined" && colorMax){
    query['$and'].push({colorCount: {$lte: colorMax}});
  }

  // SIZE
  if((height !== "undefined" && height) && (width !== "undefined" && width)){
    if(sizeType === 'min'){
      query['$and'].push({ $and: [ {'height': {$gte: height} }, {'width': {$gte: width} } ]});
    }else if(sizeType === 'max'){
      query['$and'].push({ $and: [ {'height': {$lte: height} }, {'width': {$lte: width} } ]});
    }else if(sizeType == "equal"){
      query['$and'].push({ $and: [ {'height': {$eq: height} }, {'width': {$eq: width} } ]});
    }
  }else if(height !== "undefined" && height){
    if(sizeType === 'min'){
      query['$and'].push({'height': {$gte: height}});
    }else if(sizeType === 'max'){
      query['$and'].push({'height': {$lte: height}});
    }else if(sizeType == "equal"){
      query['$and'].push({'height': {$eq: height}});
    }
  }else if(width !== "undefined" && width){
    if(sizeType === 'min'){
      query['$and'].push({'width': {$gte: width}});
    }else if(sizeType === 'max'){
      query['$and'].push({'width': {$lte: width}});
    }else if(sizeType == "equal"){
      query['$and'].push({'width': {$eq: width}});
    }
  }
  
  // DATE
  if((beforeDate !== "undefined" && beforeDate) && (afterDate !== "undefined" && afterDate)){
    query['$and'].push({date: {$lte: beforeDate, $gte: afterDate}});
  }else if((beforeDate !== "undefined" && beforeDate)){
    query['$and'].push({date: {$lte: beforeDate}});
  }else if((afterDate !== "undefined" && afterDate)){
    query['$and'].push({date: {$gte: afterDate}});
  }

  //animation
  if(animation !== "undefined" && animation){
    if(animation){
      console.log(animation);
    }else{
      console.log(animation);
    }
  }

  //transparency
  if(transparency !== "undefined" && transparency){
    if(transparency === 'true'){
      query['$and'].push({trans: {$eq: true}});
    }else{
      query['$and'].push({trans: {$eq: false}});
    }
  }

  if(colorString){
    let colorArray = colorString.split(',');
    colorArray = colorArray.filter(onlyUnique);
    if (tolerance === "undefined"){
      tolerance = 2 * colorArray.length + 5;
      if (tolerance > 25){
        tolerance = 25;
      }
    } else {
      tolerance = parseInt(tolerance);
    }
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

module.exports = router;