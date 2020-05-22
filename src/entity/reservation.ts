import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Common } from './common';
import { UserEntity } from './user';
import { MeetingEntity } from './meeting';
import { ReviewEntity } from './review';

@Entity({
  name: 'Reservations',
})
export class ReservationEntity extends Common {
  @Column({ name: 'headcount', type: 'int', default: 0 })
  public headcount: number;

  @Column({
    name: 'createdAt',
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  public createdAt: string;

  @Column({ name: 'isAvailable', type: 'tinyint', default: 0 })
  public isAvailable: number;

  @ManyToOne((type) => UserEntity, (user) => user.reservations)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  public user: UserEntity;

  @ManyToOne((type) => MeetingEntity, (meeting) => meeting.reservations)
  @JoinColumn({ name: 'meetingId', referencedColumnName: 'id' })
  public meeting: MeetingEntity;

  @OneToMany((type) => ReviewEntity, (review) => review.reservation)
  public reviews: ReviewEntity[];
}
