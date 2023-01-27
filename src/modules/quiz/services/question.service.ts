import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from '../dto/CreateQuestion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from '../entity/question.entity';
import { Quiz } from '../entity/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async createQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return newQuestion;
  }

  async findQuestionById(questionId: string): Promise<Question> {
    return await this.questionRepository.findOneOrFail({
      where: { id: questionId },
      relations: ['quiz', 'options'],
    });
  }
}
