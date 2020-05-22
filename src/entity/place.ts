import { Entity, Column, OneToMany } from 'typeorm';
import { Common } from './common';
import { OwnPlaceRepository } from './ownPlace';
import { RentPlaceRepository } from './rentPlace';
import { MeetingRepository } from './meeting';

@Entity({
  name: 'Places',
})
export class PlaceRepository extends Common {
  @Column({ name: 'name', type: 'varchar', length: 100 })
  public name: string;

  @Column({ name: 'location', type: 'varchar', length: 250 })
  public location: string;

  @Column({ name: 'capacity', type: 'int', default: 0 })
  public capacity: number;

  @Column({ name: 'isBusy', type: 'tinyint', default: 0 })
  public isBusy: number;

  @Column({ name: 'image', type: 'varchar', length: 500 })
  public image: string;

  @OneToMany((type) => OwnPlaceRepository, (ownPlace) => ownPlace.place)
  public ownPlaces: OwnPlaceRepository[];

  @OneToMany((type) => RentPlaceRepository, (rentPlace) => rentPlace.place)
  public rentPlaces: RentPlaceRepository[];

  @OneToMany((type) => MeetingRepository, (meeting) => meeting.place)
  public meetings: MeetingRepository[];
}
