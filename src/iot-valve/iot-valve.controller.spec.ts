import { Test, TestingModule } from '@nestjs/testing';
import { IotValveController } from './iot-valve.controller';
import { IotValveService } from './iot-valve.service';

describe('IotValveController', () => {
  let controller: IotValveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IotValveController],
      providers: [IotValveService],
    }).compile();

    controller = module.get<IotValveController>(IotValveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
