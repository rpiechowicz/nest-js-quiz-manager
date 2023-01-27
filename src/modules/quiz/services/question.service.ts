import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from '../dto/CreateQuestion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from '../entity/question.entity';
import { Quiz } from '../entity/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question) private quizRepository: Repository<Question>,
  ) {}

  async createQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.quizRepository.save({
      question: question.question,
    });

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return newQuestion;
  }
}
