import { Entity, Column, OneToMany } from 'typeorm';
import { Common } from './common';
import { OwnPlace } from './ownPlace';
import { Reservation } from './reservation';

@Entity({
  name: 'Users',
})
export class User extends Common {
  @Column({ name: 'email', type: 'varchar', length: 250 })
  public email: string;

  @Column({ name: 'password', type: 'varchar', length: 100 })
  public password: string;

  @Column({ name: 'nickname', type: 'varchar', length: 100 })
  public nickname: string;

  @Column({ name: 'isAdmin', type: 'tinyint', default: 0 })
  public isAdmin: number;

  @OneToMany((type) => OwnPlace, (ownPlace) => ownPlace.user)
  public ownPlaces: OwnPlace[];

  @OneToMany((type) => Reservation, (reservation) => reservation.user)
  public reservations: Reservation[];
}
