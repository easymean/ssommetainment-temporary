import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class Common {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
  })
  public id: number;

  @Column({
    name: 'status',
    type: 'tinyint',
    default: 0,
  })
  public status: number;
}
