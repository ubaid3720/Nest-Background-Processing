import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { TEST_QUEUE } from '../common/constant/queue.constant';


@Injectable()
export class TestService {
  constructor(
    @InjectQueue(TEST_QUEUE)
    private readonly testQueue: Queue,
  ) {}

  async addTestJob() {
    const job = await this.testQueue.add(
      'test-job',
      {
        message: 'Hello BullMQ',
        time: new Date(),
      },
    //   {
    //     removeOnComplete: true,
    //   },
    );

    return job;
  }
}
