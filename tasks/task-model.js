const db = require('../data/db-config.js');

module.exports = {
     find,
     add
}

function find() {
   return db("tasks");
}

function add(task) {
    return db('tasks')
      .insert(task)
      .then(ids => {
        return getById(ids[0]);
      });
  }
