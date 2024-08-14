import { Module } from '@nestjs/common';
import { IotValveService } from './iot-valve.service';
import { IotValveController } from './iot-valve.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IotValve } from './entities/iot-valve.entity';
import { ValveWebSocket } from './valve.websocket';

@Module({
  imports: [TypeOrmModule.forFeature([IotValve])],
  controllers: [IotValveController],
  providers: [IotValveService, ValveWebSocket],
})
export class IotValveModule {}
