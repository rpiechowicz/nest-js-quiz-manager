import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOptionDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(2, 255)
  text: string;

  @ApiProperty()
  @IsNotEmpty()
  questionId: string;

  @ApiProperty()
  @IsNotEmpty()
  isCorrect: boolean;
}
