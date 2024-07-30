import {Knex} from 'knex'
exports.up = function (knex:Knex) {
    return knex.schema.createTable('progress', (table) => {
        table.increments("id");
        table.integer("user_id");
        table.foreign('user_id').references('user.id');
        table.integer('level');
        table.integer('consecutive_hits');
    });
};
exports.down = function (knex:Knex) {
    return knex.schema.dropTable('progress');
};
