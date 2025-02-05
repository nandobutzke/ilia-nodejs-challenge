import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TransactionType } from 'src/shared/@types/TransactionType';
import { TransactionSchema } from 'src/shared/database/schemas/transaction.schema';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel('Transaction')
    private readonly transactionModel: Model<typeof TransactionSchema>,
  ) {}

  async create(userId: string) {
    const transaction = await this.transactionModel.create({
      user_id: userId,
      amount: 200,
      type: TransactionType.CREDIT,
    });

    return transaction.save();
  }

  async findAllByUserId(userId: string) {
    const transactions = await this.transactionModel
      .find()
      .where({ user_id: userId })
      .exec();

    return transactions;
  }
}
