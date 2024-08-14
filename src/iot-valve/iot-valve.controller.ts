import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IotValveService } from './iot-valve.service';
import { CreateIotValveDto } from './dto/create-iot-valve.dto';
import { UpdateIotValveDto } from './dto/update-iot-valve.dto';

@Controller('iot-valve')
export class IotValveController {
  constructor(private readonly iotValveService: IotValveService) {}

  @Post()
  create(@Body() createIotValveDto: CreateIotValveDto) {
    return this.iotValveService.create(createIotValveDto);
  }

  @Get()
  findAll() {
    return this.iotValveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iotValveService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIotValveDto: UpdateIotValveDto) {
    return this.iotValveService.update(+id, updateIotValveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iotValveService.remove(+id);
  }
}
