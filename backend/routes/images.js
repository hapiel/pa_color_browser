const router = require('express').Router();
let Image = require('../models/image.model');

// search with keyword
router.route('/:keyword').get((req, res) => {
  const regex = new RegExp(req.params.keyword, 'i')

  Image.find({title: {$regex: regex}}).then(images => res.json(images))
  .catch(err => res.status(400).json('Error: ' + err));    
});

module.exports = router;