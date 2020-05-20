import {Entity, Column, ManyToOne, JoinColumn} from 'typeorm';
import { Common } from './common';
import { Place } from './place';
import { Sommelier } from './sommelier';

@Entity({
  name: 'RentPlaces',
})
export class RentPlace extends Common {

 @ManyToOne(type=>Place, place=>place.rentPlaces)
 @JoinColumn({
   name:'placeId',
   referencedColumnName:'id'
 })
 public place: Place;

 
 @ManyToOne(type=>Sommelier, sommelier=>sommelier.rentPlaces)
 @JoinColumn({
   name:'sommelierId',
   referencedColumnName:'id'
 })
 public sommelier: Sommelier;
}
