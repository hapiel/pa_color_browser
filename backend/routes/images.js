const router = require('express').Router();
let Image = require('../models/image.model');

router.route('/').get((req, res) => {
    Image.findById('5f8864ebc391ea6bb25a350e')
      .then(images => res.json(images))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;