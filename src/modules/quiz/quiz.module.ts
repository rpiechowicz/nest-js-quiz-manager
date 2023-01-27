import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entity/quiz.entity';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { Question } from './entity/question.entity';

@Module({
  controllers: [QuizController, QuestionController],
  providers: [QuizService, QuestionService],
  imports: [TypeOrmModule.forFeature([Quiz, Question])],
})
export class QuizModule {}
