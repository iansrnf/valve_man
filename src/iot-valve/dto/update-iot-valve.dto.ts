import { PartialType } from '@nestjs/mapped-types';
import { CreateIotValveDto } from './create-iot-valve.dto';

export class UpdateIotValveDto extends PartialType(CreateIotValveDto) {}
