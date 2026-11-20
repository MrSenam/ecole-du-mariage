
import { DataSourceOptions } from 'typeorm';

export const buildDataSourceOptions = (env: NodeJS.ProcessEnv): DataSourceOptions => ({
  type: 'postgres',
  host: env.DB_HOST,
  port: Number(env.DB_PORT ?? 5432),
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  ssl: env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
  synchronize: false,
  migrationsRun: false,                   
  logging: env.NODE_ENV === 'development' ? ['error', 'warn', 'migration'] : ['error'],
});