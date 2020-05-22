import { Entity, Column, OneToMany } from 'typeorm';
import { Common } from './common';
import { OwnPlaceRepository } from './ownPlace';
import { ReviewRepository } from './review';
import { ReservationRepository } from './reservation';

@Entity({
  name: 'Users',
})
export class UserRepository extends Common {
  @Column({ name: 'email', type: 'varchar', length: 250 })
  public email: string;

  @Column({ name: 'password', type: 'varchar', length: 100 })
  public password: string;

  @Column({ name: 'nickname', type: 'varchar', length: 100 })
  public nickname: string;

  @Column({ name: 'isAdmin', type: 'tinyint', default: 0 })
  public isAdmin: number;

  @OneToMany((type) => OwnPlaceRepository, (ownPlace) => ownPlace.user)
  public ownPlaces: OwnPlaceRepository[];

  @OneToMany((type) => ReservationRepository, (reservation) => reservation.user)
  public reservations: ReservationRepository[];

  @OneToMany((type) => ReviewRepository, (review) => review.user)
  public reviews: ReviewRepository[];
}
