import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { QuestionService } from './question.service';
import { Question } from './entity/question.entity';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}
  @Post('/')
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    return this.questionService.createQuestion(question);
  }
}
