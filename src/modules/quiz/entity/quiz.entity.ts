import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './question.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('quizes')
export class Quiz extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({})
  title: string;

  @ApiProperty()
  @Column({})
  description: string;

  @ApiProperty()
  @Column({
    default: 1,
  })
  isActive: boolean;

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
