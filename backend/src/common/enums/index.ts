
export enum Role { 
    ADMIN = 'ADMIN', 
    STUDENT = 'STUDENT' 
}

export enum RegistrationStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export enum StudentStatus {
  ACTIVE = 'ACTIVE',
  GRADUATED = 'GRADUATED',
  SUSPENDED = 'SUSPENDED',
}

export enum ProgressStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  VALIDATED = 'VALIDATED',
  TO_REPEAT = 'TO_REPEAT',
}