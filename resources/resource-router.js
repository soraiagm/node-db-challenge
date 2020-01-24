const express = require('express');

const Resources = require('./resource-model.js');

const router = express.Router();

// GET ALL RESOURCES //
router.get('/', (req, res) => {
  Resources.find()
  .then(resources => {
    res.json(resources);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

// POST A NEW RESOURCE //
router.post('/', (req, res) => {
  const newResource = req.body;

  Resources.add(newResource)
  .then(resource => {
    res.status(201).json(resource);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
});


module.exports = router;