import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class QuestionService    {
    private databaseService:DatabaseService
    private knex
    constructor() {
        this.databaseService = new DatabaseService;
        this.knex = this.databaseService.getKnex();
    }
    async fetchQuestion(data) {
        const answeredQuestions = [];
        let questionToResolve;
        const progress = await this.knex('progress')
            .where('progress.user_id', data.user_id)
            .first();
        if (progress.consecutive_hits >= 5) {
            const upTo = await this.knex('progress')
                .where('progress.user_id', data.user_id)
                .update({
                level: Number(data.user_level) + 1,
                consecutive_hits: 0
            }, ['level']);
            return `Parabéns voce foi para o level ${upTo[0].level}`;
        }
        await this.knex('answer_question')
            .select('question.id')
            .where('answer_question.user_id', data.user_id)
            .rightJoin('question', 'question.id', 'answer_question.question_id')
            .then(data => {
            data.forEach(element => {
                answeredQuestions.push(element.id);
            });
        });
        questionToResolve = await this.knex('question')
            .select('question.id', 'question.text', 'question.alternatives')
            .whereNotIn('question.id', answeredQuestions)
            .where('question.level', data.user_level);
        questionToResolve = questionToResolve.map((element) => ({
            ...element,
            alternatives: JSON.parse(element.alternatives)
        }));
        if (!questionToResolve[0]) {
            let wrongQuestionToResolve = await this.knex('answer_question')
                .select('question.id', 'question.text', 'question.alternatives')
                .where('answer_question.user_id', data.user_id)
                .where('answer_question.already', false)
                .rightJoin('question', 'question.id', 'answer_question.question_id');
            wrongQuestionToResolve = wrongQuestionToResolve.map((element) => ({
                ...element,
                alternatives: JSON.parse(element.alternatives)
            }));
            if (!wrongQuestionToResolve[0]) {
                const upTo = await this.knex('progress')
                    .where('progress.user_id', data.user_id)
                    .update({
                    level: Number(data.user_level) + 1
                }, ['level']);
                return `Parabéns voce foi para o level ${upTo[0].level}`;
            }
            return wrongQuestionToResolve[Math.trunc(Math.random() * wrongQuestionToResolve.length)];
        }
        return questionToResolve[Math.trunc(Math.random() * questionToResolve.length)];
    }
    async answerQuestion(data) {
        const progressPromise = this.knex('progress')
            .select('level', 'consecutive_hits')
            .where('progress.user_id', data.user.id)
            .first();
        const questionPromise = this.knex('question')
            .select('answer')
            .where('question.id', data.question.id)
            .first();
        const [progress, question] = await Promise.all([
            progressPromise,
            questionPromise
        ]);
        const questionAlreadyAnswered = await this.verifyIfAlreadyAnswered(data.user.id, data.question.id);
        let insertAlreadyQuestionPromise;
        if (data.question.answer === question.answer) {
            const updateConsecutiveHitsPromise = this.knex('progress')
                .where('progress.user_id', data.user.id)
                .update({
                consecutive_hits: Number(progress.consecutive_hits) + 1
            });
            if (questionAlreadyAnswered) {
                insertAlreadyQuestionPromise = this.knex('answer_question')
                    .update({
                    user_id: data.user.id,
                    question_id: data.question.id,
                    already: true
                }, ['id']);
            }
            else {
                insertAlreadyQuestionPromise = this.knex('answer_question')
                    .insert({
                    user_id: data.user.id,
                    question_id: data.question.id,
                    already: true
                }, ['id']);
            }
            await Promise.all([
                updateConsecutiveHitsPromise,
                insertAlreadyQuestionPromise
            ]);
            return 'Parabéns voce acertou a questão.';
        }
        else {
            this.knex('progress')
                .where('progress.user_id', data.user.id)
                .update({
                consecutive_hits: 0
            });
            if (questionAlreadyAnswered) {
                insertAlreadyQuestionPromise = await this.knex('answer_question')
                    .update({
                    user_id: data.user.id,
                    question_id: data.question.id,
                    already: false
                }, ['id']);
            }
            else {
                insertAlreadyQuestionPromise = await this.knex('answer_question')
                    .insert({
                    user_id: data.user.id,
                    question_id: data.question.id,
                    already: false
                }, ['id']);
            }
            return 'Infelizmente você errou, mas podera tentar acertar uma outra hora.';
        }
    }
    async verifyIfAlreadyAnswered(user_id, question_id) {
        return await this.knex('answer_question')
            .where('user_id', user_id)
            .where('question_id', question_id)
            .then(data => data[0] ? true : false);
    }
}
