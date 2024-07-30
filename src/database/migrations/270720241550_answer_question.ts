import {Knex} from 'knex'
exports.up = function (knex) {
    return knex.schema.createTable('answer_question', (table) => {
        table.increments("id");
        table.integer("user_id");
        table.foreign('user_id').references('user.id');
        table.integer("question_id");
        table.foreign('question_id').references('question.id');
        table.boolean("already");
        ;
    });
};
exports.down = function (knex:Knex) {
    return knex.schema.dropTable('answer_question');
};
