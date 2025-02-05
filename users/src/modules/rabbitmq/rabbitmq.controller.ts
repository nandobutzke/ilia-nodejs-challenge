import { Controller, Get } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq.service';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';

@Controller('/transactions')
export class RabbitmqController {
  constructor(private readonly rabbitmqService: RabbitmqService) {}

  @Get()
  getUserTransactions(@ActiveUserId() userId: string) {
    return this.rabbitmqService.sendToStorage(userId);
  }
}
