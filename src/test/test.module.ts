import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service'; 
import { BullModule } from '@nestjs/bullmq'; 
import { TEST_QUEUE } from 'src/common/constant/queue.constant';
import { QueueModule } from 'src/queue/queue.module'; 
import { TestProcessor } from 'src/job-processor/test-processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: TEST_QUEUE,
    }),
    QueueModule,
  ],
  controllers: [TestController],
  providers: [TestService, TestProcessor],
  exports: [TestService],
})
export class TestModule {}
