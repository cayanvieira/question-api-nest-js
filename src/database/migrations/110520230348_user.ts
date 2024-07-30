import {Knex} from 'knex'

exports.up = function (knex :Knex) {
    return knex.schema.createTable('user', (table) => {
        table.increments("id");
        table.string('name');
        table.string("password");
    });
};
exports.down = function (knex:Knex) {
    return knex.schema.dropTable('user');
};
