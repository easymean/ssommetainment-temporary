import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Common } from './common';
import { UserEntity } from './user';
import { ReservationEntity } from './reservation';

@Entity({
  name: 'Reviews',
})
export class ReviewEntity extends Common {
  @Column({ name: 'rate', type: 'int', default: 0 })
  public rate: number;

  @Column({
    name: 'createdAt',
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  public createdAt: string;

  @Column({ name: 'description', type: 'text' })
  public description: number;

  @ManyToOne((type) => UserEntity, (user) => user.reviews)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  public user: UserEntity;

  @ManyToOne((type) => ReservationEntity, (reservation) => reservation.reviews)
  @JoinColumn({ name: 'reservationId', referencedColumnName: 'id' })
  public reservation: ReservationEntity;
}
