const express = require('express');

const TaskRouter = require('./tasks/task-router.js');
const ProjectRouter = require('./projects/project-router.js');
const ResourceRouter = require('./resources/resource-router.js');

const server = express();

server.use(express.json());
server.use('/api/tasks', TaskRouter);
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);

server.get('/', (req, res) => {
    res.json({message: "Testing if my API is working"});
});

module.exports = server;