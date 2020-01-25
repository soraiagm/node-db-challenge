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

// GET RESOURCE BY ID //
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Resources.findById(id)
  .then(resource => {
    if (resource) {
      res.json(resource);
    } else {
      res.status(404).json({ message: 'Could not find the resource with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

// POST A NEW RESOURCE //
router.post('/', (req, res) => {
  const newResource = req.body;
  console.log('newResource', newResource)

  Resources.add(newResource)
  .then(resource => {
    res.status(201).json(resource);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
});


module.exports = router;