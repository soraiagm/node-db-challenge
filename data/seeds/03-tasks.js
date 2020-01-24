
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_description: 'rowValue1', task_notes: 'note1'},
        {id: 2, task_description: 'rowValue2', task_notes: 'note2'},
        {id: 3, task_description: 'rowValue3', task_notes: 'note3'}
      ]);
    });
};
