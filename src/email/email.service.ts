import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { EMAIL_QUEUE } from '../common/constant/queue.constant';

@Injectable()
export class EmailService {
  constructor(
    @InjectQueue(EMAIL_QUEUE)
    private readonly emailQueue: Queue,
  ) {}

  async sendEmail(email: string, name: string) {
    await this.emailQueue.add('send-email', {
      email,
      name,
    });
  }
}
