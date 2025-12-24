import { Module } from '@nestjs/common';
import {QueueModule} from './queue/queue.module'
import { EmailModule } from './email/email.module';
import { TestModule } from './test/test.module';
@Module({
  imports: [QueueModule, EmailModule, TestModule],
})
export class AppModule {}
