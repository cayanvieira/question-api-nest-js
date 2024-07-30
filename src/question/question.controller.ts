import { Controller,Post, Body } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
    private questionService:QuestionService

    constructor() {
        this.questionService = new QuestionService;
    }

    @Post()
    async fetch(@Body() data:any ): Promise<any>  {
        return await this.questionService.fetchQuestion(data);
    }

    @Post('answer')
    async toAnswer(@Body() data:any ): Promise<any> {
        return await this.questionService.answerQuestion(data);
    }
}
