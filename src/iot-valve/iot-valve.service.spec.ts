import { Test, TestingModule } from '@nestjs/testing';
import { IotValveService } from './iot-valve.service';

describe('IotValveService', () => {
  let service: IotValveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IotValveService],
    }).compile();

    service = module.get<IotValveService>(IotValveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
