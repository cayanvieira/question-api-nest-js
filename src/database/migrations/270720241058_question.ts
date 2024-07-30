import {Knex} from 'knex'
exports.up = function (knex:Knex) {
    return knex.schema.createTable('question', (table) => {
        table.increments("id");
        table.integer('level');
        table.string('text');
        table.string('answer');
        table.string('alternatives');
    });
};
exports.down = function (knex:Knex) {
    return knex.schema.dropTable('question');
};
