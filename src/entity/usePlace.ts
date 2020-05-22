import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Common } from './common';
import { PlaceEntity } from './place';
import { SommelierEntity } from './sommelier';

@Entity({
  name: 'UsePlaces',
})
export class UsePlaceEntity extends Common {
  @ManyToOne((type) => PlaceEntity, (place) => place.usePlaces)
  @JoinColumn({
    name: 'placeId',
    referencedColumnName: 'id',
  })
  public place: PlaceEntity;

  @ManyToOne((type) => SommelierEntity, (sommelier) => sommelier.usePlaces)
  @JoinColumn({
    name: 'sommelierId',
    referencedColumnName: 'id',
  })
  public sommelier: SommelierEntity;
}
