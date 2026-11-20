import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { buildDataSourceOptions } from './config/database.config.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
      serviceId: 'backend',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        ...buildDataSourceOptions({
          NODE_ENV: config.getOrThrow('NODE_ENV'),
          DB_HOST: config.getOrThrow('DB_HOST'),
          DB_PORT: String(config.getOrThrow<number>('DB_PORT')),
          DB_USERNAME: config.getOrThrow('DB_USERNAME'),
          DB_PASSWORD: config.getOrThrow('DB_PASSWORD'),
          DB_DATABASE: config.getOrThrow('DB_DATABASE'),
          DB_SSL: String(config.get<boolean>('DB_SSL')),
        }),
        autoLoadEntities: true,
        retryAttempts: 5,
        retryDelay: 3000,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
