import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Place } from './place';
import { Common } from './common';
import { User } from './user';

@Entity({
  name: 'OwnPlaces',
})
export class OwnPlace extends Common {
  @ManyToOne((type) => Place, (place) => place.ownPlaces)
  @JoinColumn({
    name: 'placeId',
    referencedColumnName: 'id',
  })
  public place: Place;

  @ManyToOne((type) => User, (user) => user.ownPlaces)
  @JoinColumn({
    name: 'userId',
    referencedColumnName: 'id',
  })
  public user: User;
}
