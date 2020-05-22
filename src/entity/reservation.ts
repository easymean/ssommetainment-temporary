import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Common } from './common';
import { UserRepository } from './user';
import { MeetingRepository } from './meeting';
import { ReviewRepository } from './review';

@Entity({
  name: 'Reservations',
})
export class ReservationRepository extends Common {
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

  @ManyToOne((type) => UserRepository, (user) => user.reservations)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  public user: UserRepository;

  @ManyToOne((type) => MeetingRepository, (meeting) => meeting.reservations)
  @JoinColumn({ name: 'meetingId', referencedColumnName: 'id' })
  public meeting: MeetingRepository;

  @OneToMany((type) => ReviewRepository, (review) => review.reservation)
  public reviews: ReviewRepository[];
}
