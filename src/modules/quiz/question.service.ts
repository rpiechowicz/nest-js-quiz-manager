import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entity/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question) private quizRepository: Repository<Question>,
  ) {}

  async createQuestion(question: CreateQuestionDto): Promise<Question> {
    return await this.quizRepository.save(question);
  }
}
