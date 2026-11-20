
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { buildDataSourceOptions } from './database.config.js';


export default new DataSource({
  ...buildDataSourceOptions(process.env),
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
});