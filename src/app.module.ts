import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { QuestionService } from './question/question.service';
import { QuestionController } from './question/question.controller';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [DatabaseModule, UserModule, QuestionModule],
  controllers: [AppController, UserController, QuestionController],
  providers: [AppService, QuestionService],
})
export class AppModule {}
