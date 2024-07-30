import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class UserService {
    private databaseService:DatabaseService
    private knex:any

    constructor() {
        this.databaseService = new DatabaseService
        this.knex = this.databaseService.getKnex();
    }

    async create(data:any): Promise<any>  {

        const user = await this.knex('user')
            .insert({
            name: data.name
        }, ['id', 'name']);
        return await this.knex('progress')
            .insert({
            user_id: user[0].id,
            level: 1,
            consecutive_hits: 0
        }, ['id']);
    }
}
