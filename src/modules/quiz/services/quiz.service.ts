import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Repository } from 'typeorm';
import { Quiz } from '../entity/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
  ) {}

  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .getMany();
  }

  async getQuizById(id: string): Promise<Quiz> {
    return await this.quizRepository.findOneOrFail({
      where: { id },
      relations: ['questions', 'questions.options'],
    });
  }

  async createNewQuiz(quiz: CreateQuizDto): Promise<Quiz> {
    return await this.quizRepository.save(quiz);
  }
}
