
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'rowValue1', project_description: 'description1', completed:false},
        {id: 2, project_name: 'rowValue2', project_description: 'description2', completed:false},
        {id: 3, project_name: 'rowValue3', project_description: 'description3', completed:false}
      ]);
    });
};
