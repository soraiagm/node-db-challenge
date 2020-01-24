
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'rowValue1', resource_description: 'description1'},
        {id: 2, resource_name: 'rowValue2', resource_description: 'description2'},
        {id: 3, resource_name: 'rowValue3', resource_description: 'description3'}
      ]);
    });
};
