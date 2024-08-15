import { InjectRepository } from '@nestjs/typeorm';
import { MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { IotValve } from './entities/iot-valve.entity';
import { Repository } from 'typeorm';

@WebSocketGateway()
export class ValveWebSocket {
  constructor(@InjectRepository(IotValve) private readonly valveRepository: Repository<IotValve>) {}
  @SubscribeMessage('newMessage')
  async onNewMessage(@MessageBody() input: IotValve) {
    console.log(input);
    const valveList = await this.valveRepository.find();
    if (valveList) {
      if (valveList.length == 0) {
        //save first angle
        const myValve = new IotValve();
        Object.assign(myValve, input);
        await this.valveRepository.save(myValve);
      } else {
        let myValve = new IotValve();
        valveList.forEach((e) => {
          myValve = e;
        });
        Object.assign(myValve, input);
        await this.valveRepository.save(myValve);
      }
    } else {
      const myValve = new IotValve();
      Object.assign(myValve, input);
      await this.valveRepository.save(myValve);
    }
    return input;
  }
}
