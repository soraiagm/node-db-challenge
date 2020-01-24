const db = require('../data/db-config.js');

module.exports = {
     find,
     findById,
     add
}

function find() {
   return db("projects");
}

function findById(id) {
    return db('projects') 
        .where({ id }) 
        .first(); 
}

function add(project) {
    return db('projects')
      .insert(project)
      .then(ids => {
        return getById(ids[0]);
      });
  }

