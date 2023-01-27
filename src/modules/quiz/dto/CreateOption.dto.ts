import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty()
  @Length(3, 255)
  text: string;

  @IsNotEmpty()
  questionId: string;

  @IsNotEmpty()
  isCorrect: boolean;
}
