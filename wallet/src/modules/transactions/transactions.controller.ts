import { Controller } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateTransactionDto } from 'src/shared/@types/User';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @MessagePattern('list-transactions')
  async list(@Payload() userId: string) {
    console.log({ userId });

    const transactions = await this.transactionsService.findAllByUserId(userId);

    return transactions;
  }

  @MessagePattern('create-transaction')
  async create(@Payload() createTransactionDto: CreateTransactionDto) {
    const transaction = await this.transactionsService.create(
      createTransactionDto.userId,
    );

    return transaction;
  }
}
