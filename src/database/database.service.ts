import { Injectable } from '@nestjs/common';
import { knex } from 'knex';
import config from './config';

@Injectable()
export class DatabaseService {
    private knex
    constructor() {
        this.knex = knex(config.development);
    }
    getKnex() {
        return this.knex;
    }
    async onModuleDestroy() {
        await this.knex.destroy();
    }
}
