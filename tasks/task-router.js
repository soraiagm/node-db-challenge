const express = require('express');

const Tasks = require('./task-model.js');

const router = express.Router();


// GET LIST OF TASKS //
router.get('/', (req, res) => {
  Schemes.find()
  .then(tasks => {
    res.json(tasks);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks' });
  });
});


// POST NEW TASK //
router.post('/', (req, res) => {
  const newTask = req.body;

  Schemes.add(newTask)
  .then(task => {
    res.status(201).json(task);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new task' });
  });
});


module.exports = router;