import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('/transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  list(@ActiveUserId() userId: string) {
    return this.transactionsService.listUserTransactions(userId);
  }

  @Post()
  create(
    @ActiveUserId() userId: string,
    @Body() createTransactionDto: CreateTransactionDto,
  ) {
    return this.transactionsService.createUserTransaction(
      userId,
      createTransactionDto,
    );
  }
}
