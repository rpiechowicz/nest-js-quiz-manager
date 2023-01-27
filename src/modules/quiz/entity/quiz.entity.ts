import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './question.entity';

@Entity('quizes')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({})
  title: string;

  @Column({})
  description: string;

  @Column({
    default: 1,
  })
  isActive: boolean;

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
