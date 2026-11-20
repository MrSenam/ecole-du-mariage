import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { User } from "../users/user.entity.js";
import { BaseEntity } from "../common/entities/base.entity.js";
import { Registration } from "../registrations/registration.entity.js";
import { ModuleEntity } from "../modules-catalog/module.entity.js";
import { StudentStatus } from "../common/enums/index.js";
import { StudentProgress } from "./student-progress.entity.js";

@Entity('students')
export class Student extends BaseEntity {
  @OneToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @OneToOne(() => Registration, { nullable: false })
  @JoinColumn()
  registration: Registration;

  @ManyToOne(() => ModuleEntity, { nullable: true })   
  currentModule: ModuleEntity | null;

  @Column({ type: 'enum', enum: StudentStatus, default: StudentStatus.ACTIVE })
  status: StudentStatus;

  @OneToMany(() => StudentProgress, (p) => p.student)
  progress: StudentProgress[];
}