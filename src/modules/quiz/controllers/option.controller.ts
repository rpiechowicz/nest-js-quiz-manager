import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';
import { CreateOptionDto } from '../dto/CreateOption.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Option } from '../entity/option.entity';

@ApiTags('Option')
@Controller('question/option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({ type: Option })
  @ApiBadRequestResponse()
  async saveOptionToQuestion(@Body() createOption: CreateOptionDto) {
    const question = await this.questionService.findQuestionById(
      createOption.questionId,
    );

    const option = await this.optionService.createOption(
      createOption,
      question,
    );

    return { question, option };
  }
}
