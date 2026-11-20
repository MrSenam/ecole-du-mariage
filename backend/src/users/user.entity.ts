import { Entity, Column } from "typeorm";
import { BaseEntity } from "../common/entities/base.entity.js";
import { Role } from "../common/enums/index.js";

@Entity('users')
export class User extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column({ select: false })        
  passwordHash: string;

  @Column({ type: 'enum', enum: Role })
  role: Role;

  @Column({ default: true })
  isActive: boolean;
}