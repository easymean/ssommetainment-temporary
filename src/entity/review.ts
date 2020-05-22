import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Common } from './common';
import { UserRepository } from './user';
import { ReservationRepository } from './reservation';

@Entity({
  name: 'Reviews',
})
export class ReviewRepository extends Common {
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

  @ManyToOne((type) => UserRepository, (user) => user.reviews)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  public user: UserRepository;

  @ManyToOne(
    (type) => ReservationRepository,
    (reservation) => reservation.reviews,
  )
  @JoinColumn({ name: 'reservationId', referencedColumnName: 'id' })
  public reservation: ReservationRepository;
}
