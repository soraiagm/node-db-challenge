const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

// GET ALL PROJECTS  //
router.get('/', (req, res) => {
  Projects.find()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

// GET PROJECT BY ID //
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Projects.findById(id)
  .then(project => {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

// ADD NEW PROJECT //
router.post('/', (req, res) => {
  const newProject = req.body;
  console.log('newProject', newProject);

  Projects.add(newProject)
  .then(project => {
    res.status(200).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project' });
  });
});


module.exports = router;