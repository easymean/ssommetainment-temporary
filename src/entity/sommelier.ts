import {Entity, Column, OneToMany} from 'typeorm';
import { Common } from './common';
import { RentPlace } from './rentPlace';
import { Meeting } from './meeting';

@Entity({
  name: 'Sommeliers',
})
export class Sommelier extends Common {
  
  @Column({name:'email', type:'varchar', length:250})
  public email: string;

  @Column({name:'password', type:'varchar', length:100})
  public password: string;

  @Column({name:'nickname', type:'varchar', length:100})
  public nickname: string;

  @Column({name:'career', type:'varchar', length:500})
  public career: string;

  @Column({name:'isAuthorized', type:'tinyint', default:0})
  public isAuthorized: number;

  @OneToMany(type=>RentPlace, rentPlace=>rentPlace.sommelier)
  public rentPlaces: RentPlace[];

  @OneToMany(type=>Meeting, meeting=>meeting.sommelier)
  public meetings: Meeting[];
}