const express = require('express');

const TaskRouter = require('./tasks/task-router.js');
const ProjectRouter = require('./projects/project-router.js');

const server = express();

server.use(express.json());
server.use('/api/tasks', TaskRouter);
server.use('/api/projects', ProjectRouter);

server.get('/', (req, res) => {
    res.json({message: "Testing if my API is working"});
});

module.exports = server;