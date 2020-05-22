import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Common } from './common';
import { PlaceRepository } from './place';
import { SommelierRepository } from './sommelier';

@Entity({
  name: 'RentPlaces',
})
export class RentPlaceRepository extends Common {
  @ManyToOne((type) => PlaceRepository, (place) => place.rentPlaces)
  @JoinColumn({
    name: 'placeId',
    referencedColumnName: 'id',
  })
  public place: PlaceRepository;

  @ManyToOne((type) => SommelierRepository, (sommelier) => sommelier.rentPlaces)
  @JoinColumn({
    name: 'sommelierId',
    referencedColumnName: 'id',
  })
  public sommelier: SommelierRepository;
}
