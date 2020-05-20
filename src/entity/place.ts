import { Entity, Column, OneToMany } from 'typeorm';
import { Common } from './common';
import { OwnPlace } from './ownPlace';
import { RentPlace } from './rentPlace';
import { Meeting } from './meeting';

@Entity({
  name: 'Places',
})
export class Place extends Common {
  @Column({ name: 'location', type: 'varchar', length: 250 })
  public location: string;

  @Column({ name: 'capacity', type: 'int', default: 0 })
  public capacity: number;

  @Column({ name: 'isBusy', type: 'tinyint', default: 0 })
  public isBusy: number;

  @OneToMany((type) => OwnPlace, (ownPlace) => ownPlace.place)
  public ownPlaces: OwnPlace[];

  @OneToMany((type) => RentPlace, (rentPlace) => rentPlace.place)
  public rentPlaces: RentPlace[];

  @OneToMany((type) => Meeting, (meeting) => meeting.place)
  public meetings: Meeting[];
}
