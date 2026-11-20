
import { Column, Entity, JoinColumn, ManyToOne, Index} from "typeorm";
import { User } from "../users/user.entity.js";
import { BaseEntity } from "../common/entities/base.entity.js";
import { ModuleEntity } from "../modules-catalog/module.entity.js";
import { Student } from "./student.entity.js";
import { ProgressStatus } from "../common/enums/index.js";

@Entity('student_progress')
@Index(['student', 'module', 'attempt'], { unique: true })
export class StudentProgress extends BaseEntity {
  @ManyToOne(() => Student, (s) => s.progress, { onDelete: 'CASCADE' })
  student: Student;

  @ManyToOne(() => ModuleEntity, { nullable: false })
  module: ModuleEntity;

  @Column({ type: 'enum', enum: ProgressStatus, default: ProgressStatus.IN_PROGRESS })
  status: ProgressStatus;

  @Column({ type: 'int', default: 1 })
  attempt: number;

  @Column({ type: 'timestamptz', default: () => 'now()' })
  startedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  endedAt?: Date;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  decidedBy?: User;
}