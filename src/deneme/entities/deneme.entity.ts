import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Deneme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;
}
