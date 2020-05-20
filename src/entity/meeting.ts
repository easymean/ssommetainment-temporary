import {Entity, Column, OneToMany, ManyToOne, JoinColumn} from 'typeorm';
import { Common } from './common';
import { Reservation } from './reservation';
import { Place } from './place';
import { Sommelier } from './sommelier';

@Entity({
  name: 'Meetings',
})
export class Meeting extends Common {

  @Column({name:'capacity', type:'int', default:0})
  public capacity: number;

  @Column({name:'pay', type:'int', default:0})
  public pay: number;
  
  @Column({name:'startAt', type:'timestamp',nullable:false, default: () => 'CURRENT_TIMESTAMP'})
  public startAt: string;

  @Column({name:'endAt', type:'timestamp', nullable:false, default: () => 'CURRENT_TIMESTAMP'})
  public endAt: string;

  @Column({name:'info', type:'text'})
  public email: string;

  @Column({name:'description', type:'text'})
  public password: string;

  @Column({name:'isAvailable', type:'tinyint', default:0})
  public isAvailable: number;

  @OneToMany(type=>Reservation, reservation=> reservation.meeting)
  public reservations: Reservation[];

  @ManyToOne(type=>Place, place=>place.meetings)
  @JoinColumn({name: 'placeID', referencedColumnName:'id'})
  public place: Place

  @ManyToOne(type=>Sommelier, sommelier=>sommelier.meetings)
  @JoinColumn({name: 'sommelierID', referencedColumnName:'id'})
  public sommelier: Sommelier
}