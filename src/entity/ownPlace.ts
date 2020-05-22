import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Common } from './common';
import { PlaceEntity } from './place';
import { SommelierEntity } from './sommelier';

@Entity({
  name: 'OwnPlaces',
})
export class OwnPlaceEntity extends Common {
  @ManyToOne((type) => PlaceEntity, (place) => place.ownPlaces)
  @JoinColumn({
    name: 'placeId',
    referencedColumnName: 'id',
  })
  public place: PlaceEntity;

  @ManyToOne((type) => SommelierEntity, (sommelier) => sommelier.ownPlaces)
  @JoinColumn({
    name: 'sommelierId',
    referencedColumnName: 'id',
  })
  public sommelier: SommelierEntity;
}
