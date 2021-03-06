import {Entity, Column} from 'typeorm';
import { Common } from './common';

@Entity({
  name: 'Users',
})
export class User extends Common {
  
  @Column({name:'email', type:'varchar', length:250})
  public email: string;

  @Column({name:'password', type:'varchar', length:100})
  public password: string;

  @Column({name:'nickname', type:'varchar', length:100})
  public nickname: string;

  @Column({name:'isAdmin', type:'tinyint', default:0})
  public isAdmin: number;

}