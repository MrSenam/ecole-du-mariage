import { Entity, Column, Index, ManyToOne } from "typeorm";
import { BaseEntity } from "../common/entities/base.entity.js";
import { RegistrationStatus } from "../common/enums/index.js";
import { User } from "../users/user.entity.js";

@Entity('registrations')
export class Registration extends BaseEntity {
  @Column() firstName: string;
  @Column() lastName: string;
  @Column() church:string;

  @Index({ unique: true, where: `"status" IN ('PENDING','ACCEPTED')` })
  @Column()
  email: string;                        

  @Column({ nullable: true }) phone?: string;
  @Column({ type: 'date', nullable: true }) birthDate?: string;

  @Column({ select: false })
  passwordHash: string;

  @Column({ type: 'enum', enum: RegistrationStatus, default: RegistrationStatus.PENDING })
  status: RegistrationStatus;

  @Column({ type: 'text', nullable: true })
  rejectionReason?: string;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  reviewedBy?: User;

  @Column({ type: 'timestamptz', nullable: true })
  reviewedAt?: Date;
}