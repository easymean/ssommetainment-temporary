import {Entity, Column, ManyToOne, JoinColumn} from 'typeorm';
import { Common } from './common';
import { User } from './user';
import { Meeting } from './meeting';

@Entity({
  name: 'Reservations',
})
export class Reservation extends Common {
  
  @Column({name:'headcount', type:'int', default:0})
  public headcount: number;
  
  @Column({name:'createdAt', type:'timestamp',nullable:false, default: () => 'CURRENT_TIMESTAMP'})
  public createdAt: string;

  @Column({name:'isAvailable', type:'tinyint', default:0})
  public isAvailable: number;

  @ManyToOne(type=>User, user=> user.reservations)
  @JoinColumn({name: 'userId', referencedColumnName:'id'})
  public user: User;

  @ManyToOne(type=>Meeting, meeting=> meeting.reservations)
  @JoinColumn({name: 'meetingId', referencedColumnName:'id'})
  public meeting: Meeting;

}