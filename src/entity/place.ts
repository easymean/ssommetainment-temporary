import { Entity, Column, OneToMany } from 'typeorm';
import { Common } from './common';
import { UsePlaceEntity } from './usePlace';
import { MeetingEntity } from './meeting';
import { PlaceTimeEntity } from './placeTime';
import { OwnPlaceEntity } from './ownPlace';

@Entity({
  name: 'Places',
})
export class PlaceEntity extends Common {
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

  @OneToMany((type) => UsePlaceEntity, (usePlace) => usePlace.place)
  public usePlaces: UsePlaceEntity[];

  @OneToMany((type) => OwnPlaceEntity, (ownPlace) => ownPlace.place)
  public ownPlaces: OwnPlaceEntity[];

  @OneToMany((type) => MeetingEntity, (meeting) => meeting.place)
  public meetings: MeetingEntity[];

  @OneToMany((type) => PlaceTimeEntity, (placeTime) => placeTime.place)
  public placeTimes: PlaceTimeEntity[];
}
