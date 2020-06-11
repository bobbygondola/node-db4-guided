
exports.up = function(knex) {
   return knex.schema.createTable("cohorts", tbl => {
        tbl.increments();
        tbl.string("name", 225).notNullable().index();
        
        //foreign key cohort_id
    tbl.integer("cohorts_id").unsigned()
    .references("tracks.id")
    .onDelete("RESTRICT") //Restrict or Cascade or Set Null(slack deleted)//deletes all associated with
    .onUpdate("CASCADE")//cascade
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cohorts")
};
