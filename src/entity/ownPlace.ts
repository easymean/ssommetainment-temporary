import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PlaceRepository } from './place';
import { Common } from './common';
import { UserRepository } from './user';

@Entity({
  name: 'OwnPlaces',
})
export class OwnPlaceRepository extends Common {
  @ManyToOne((type) => PlaceRepository, (place) => place.ownPlaces)
  @JoinColumn({
    name: 'placeId',
    referencedColumnName: 'id',
  })
  public place: PlaceRepository;

  @ManyToOne((type) => UserRepository, (user) => user.ownPlaces)
  @JoinColumn({
    name: 'userId',
    referencedColumnName: 'id',
  })
  public user: UserRepository;
}
