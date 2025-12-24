import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { EmailService } from './email.service';
import { EmailProcessor } from '../job-processor/email-processor';
import { EmailController } from './email.controller';
import { EMAIL_QUEUE } from '../common/constant/queue.constant';

@Module({
  imports: [
    BullModule.registerQueue({
      name: EMAIL_QUEUE,
    }),
  ],
  providers: [EmailService, EmailProcessor],
  controllers: [EmailController],
})
export class EmailModule {}
