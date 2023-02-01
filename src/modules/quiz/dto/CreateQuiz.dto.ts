import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuizDto {
  @ApiProperty()
  @IsNotEmpty({
    message: 'The quiz should have a title',
  })
  @Length(3, 255)
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(3)
  description: string;
}
