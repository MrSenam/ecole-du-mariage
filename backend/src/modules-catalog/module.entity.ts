import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "../common/entities/base.entity.js";
import { Course } from "../courses/course.entity.js";

@Entity('modules')
export class ModuleEntity extends BaseEntity {
  @Column() title: string;
  @Column({ type: 'text', nullable: true }) description?: string;

  @Column({ type: 'int', unique: true })
  position: number;                     

  @Column({ default: false })
  isPublished: boolean;

  @OneToMany(() => Course, (c) => c.module)
  courses: Course[];
}