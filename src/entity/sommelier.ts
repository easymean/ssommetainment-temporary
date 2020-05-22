import { Entity, Column, OneToMany } from 'typeorm';
import { Common } from './common';
import { UsePlaceEntity } from './usePlace';
import { MeetingEntity } from './meeting';
import { OwnPlaceEntity } from './ownPlace';

@Entity({
  name: 'Sommeliers',
})
export class SommelierEntity extends Common {
  @Column({ name: 'email', type: 'varchar', length: 250 })
  public email: string;

  @Column({ name: 'password', type: 'varchar', length: 100 })
  public password: string;

  @Column({ name: 'nickname', type: 'varchar', length: 100 })
  public nickname: string;

  @Column({ name: 'career', type: 'varchar', length: 500 })
  public career: string;

  @Column({ name: 'isAuthorized', type: 'tinyint', default: 0 })
  public isAuthorized: number;

  @OneToMany((type) => UsePlaceEntity, (usePlace) => usePlace.sommelier)
  public usePlaces: UsePlaceEntity[];

  @OneToMany((type) => OwnPlaceEntity, (ownPlace) => ownPlace.sommelier)
  public ownPlaces: OwnPlaceEntity[];

  @OneToMany((type) => MeetingEntity, (meeting) => meeting.sommelier)
  public meetings: MeetingEntity[];
}
