import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entity/quiz.entity';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { Question } from './entity/question.entity';

@Module({
  controllers: [QuizController, QuestionController],
  providers: [QuizService, QuestionService],
  imports: [TypeOrmModule.forFeature([Quiz, Question])],
})
export class QuizModule {}
