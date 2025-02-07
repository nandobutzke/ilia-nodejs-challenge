import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionsModule } from './modules/wallet/wallet.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
