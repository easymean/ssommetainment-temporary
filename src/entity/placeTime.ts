import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Common } from './common';
import { PlaceEntity } from './place';

@Entity({
  name: 'PlaceTimes',
})
export class PlaceTimeEntity extends Common {
  @Column({
    name: 'startAt',
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  public startAt: string;

  @Column({
    name: 'endAt',
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  public endAt: string;

  @ManyToOne((type) => PlaceEntity, (place) => place.placeTimes)
  @JoinColumn({ name: 'placeId', referencedColumnName: 'id' })
  public place: PlaceEntity;
}
