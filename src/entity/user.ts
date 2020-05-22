import { Entity, Column, OneToMany } from 'typeorm';
import { Common } from './common';
import { ReviewEntity } from './review';
import { ReservationEntity } from './reservation';

@Entity({
  name: 'Users',
})
export class UserEntity extends Common {
  @Column({ name: 'email', type: 'varchar', length: 250 })
  public email: string;

  @Column({ name: 'password', type: 'varchar', length: 100 })
  public password: string;

  @Column({ name: 'nickname', type: 'varchar', length: 100 })
  public nickname: string;

  @Column({ name: 'isAdmin', type: 'tinyint', default: 0 })
  public isAdmin: number;

  @OneToMany((type) => ReservationEntity, (reservation) => reservation.user)
  public reservations: ReservationEntity[];

  @OneToMany((type) => ReviewEntity, (review) => review.user)
  public reviews: ReviewEntity[];
}
