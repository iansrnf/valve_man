import { Module } from '@nestjs/common';
import { IotValveModule } from './iot-valve/iot-valve.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IotValve } from './iot-valve/entities/iot-valve.entity';

@Module({
  imports: [
    IotValveModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.20.110.135',
      username: 'postgres',
      password: 'p@ssw0rd',
      port: 5432,
      database: 'Valve_Sample',
      entities: [IotValve],
      synchronize: true,
    })]
})
export class AppModule {}
