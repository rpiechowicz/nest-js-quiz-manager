import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
