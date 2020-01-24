exports.up = function(knex) {
    return knex.schema

    // projects table //
    .createTable('projects', tbl => {
      tbl
        .increments('id');// for id //
      tbl
        .string('project_name', 128)
        .unique()
        .notNullable();
      tbl
        .string('project_description', 255);
      tbl 
        .boolean('completed')
        .notNullable()
        .defaultTo(0);
    })

    // tasks table //
    .createTable('tasks', tbl => {
      tbl
        .increments('id');
      tbl
        .string('task_description', 255)
        .notNullable();
      tbl
        .string('task_notes', 255);
      tbl
        .boolean('completed')
        .notNullable()
        .defaultTo(false);

      tbl
        .integer('project_id')
        .notNullable()
        .references('id')
        .inTable('projects')
      })

      // resources table //
    .createTable('resources', tbl => {
        tbl
          .increments('id');
        tbl
          .string('resource_name', 128)
          .unique()
          .notNullable();
        tbl
          .string('resource_description', 255)


    .createTable('project-resources', tbl => {
        tbl
          .integer('project_id')
          .notNullable()
          .references('id')
          .inTable('resources')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl
          .integer('resource_id')
          .notNullable()
          .references('id')
          .inTable('project')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');

      })  
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('project-resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks');
};