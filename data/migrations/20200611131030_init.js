
exports.up = function(knex) {
  return knex.schema.createTable("tracks", tbl => {
      tbl.increments();
      //an index makes searching in the table by this column (name) faster
      tbl.string("name", 225).notNullable().index();

  })
  .createTable("students", tbl => {
    tbl.increments();
    //an index makes searching in the table by this column (name) faster
    tbl.string("name", 225).notNullable().index();
    tbl.string("email", 255).notNullable().index()
})
.createTable("cohort_students", tbl => {
    tbl.increments();
    //an index makes searching in the table by this column (name) faster

    //foreign key cohort_id
    tbl.integer("cohort_id").unsigned()
    .references("cohorts.id")
    .onDelete("RESTRICT") //Restrict or Cascade or Set Null(slack deleted)//deletes all associated with
    .onUpdate("CASCADE")//cascade

    tbl.integer("students_id").unsigned()
    .references("cohorts.id")
    .onDelete("RESTRICT") //Restrict or Cascade or Set Null(slack deleted)//deletes all associated with
    .onUpdate("CASCADE")//cascade

    tbl.date("joined_on");
    tbl.date("last_on")
})
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cohort_students")
  .dropTableIfExists("students")
  .dropTableIfExists("tracks")
};
