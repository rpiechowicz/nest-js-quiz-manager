import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entity/quiz.entity';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { Question } from './entity/question.entity';
import { Option } from './entity/option.entity';
import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  providers: [QuizService, QuestionService, OptionService],
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
})
export class QuizModule {}
