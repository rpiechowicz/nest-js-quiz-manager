import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 255)
  question: string;

  @ApiProperty()
  @IsNotEmpty()
  quizId: string;
}
