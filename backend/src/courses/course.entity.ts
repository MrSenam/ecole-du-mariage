import { Entity, Column, ManyToOne, Unique } from "typeorm";
import { BaseEntity } from "../common/entities/base.entity.js";
import { ModuleEntity } from "../modules-catalog/module.entity.js";

@Entity('courses')
@Unique(['module', 'position'])
export class Course extends BaseEntity {
  @ManyToOne(() => ModuleEntity, (m) => m.courses, { onDelete: 'CASCADE', nullable: false })
  module: ModuleEntity;

  @Column() title: string;

  @Column({ type: 'text' })
  content: string;                      

  @Column({ type: 'int' })
  position: number;

  @Column({ default: false })
  isPublished: boolean;
}