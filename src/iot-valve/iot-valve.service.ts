import { Injectable } from '@nestjs/common';
import { CreateIotValveDto } from './dto/create-iot-valve.dto';
import { UpdateIotValveDto } from './dto/update-iot-valve.dto';

@Injectable()
export class IotValveService {
  create(createIotValveDto: CreateIotValveDto) {
    return 'This action adds a new iotValve';
  }

  findAll() {
    return `This action returns all iotValve`;
  }

  findOne(id: number) {
    return `This action returns a #${id} iotValve`;
  }

  update(id: number, updateIotValveDto: UpdateIotValveDto) {
    return `This action updates a #${id} iotValve`;
  }

  remove(id: number) {
    return `This action removes a #${id} iotValve`;
  }
}
