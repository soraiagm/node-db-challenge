const db = require('../data/db-config.js');

module.exports = {
     find,
     findById,
     findTasks,
     findTasksById,
     add
}

function find() {
   return db("tasks");
}

function findById(id) {
  return db('tasks') 
      .where({ id }) 
      .first(); 
}

function findTasks() {
  return db('tasks as t')
    .join("projects as p", "p.id", "t.project_id")
    .select("p.project_name",
            "p.project_description",
            "t.task_description",
            "t.task_notes",
            "t.project_id",
            "t.id")
}

function findTasksById(id) {
  return db('tasks')
    .select('tasks.id', )
    .join()
    .where()
}

function add(task) {
    return db('tasks')
      .insert(task, 'id')
      .then(([id]) => {
        return findById(id);
      });
  }
