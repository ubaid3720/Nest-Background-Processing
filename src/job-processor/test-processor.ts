import { WorkerHost, Processor } from '@nestjs/bullmq';
import { TEST_QUEUE } from '../common/constant/queue.constant';
import { Job } from 'bullmq';

@Processor(TEST_QUEUE)
export class TestProcessor extends WorkerHost {
     async process(job: Job) {
    console.log(
      `➡️ Job ${job.id}, attempt ${job.attemptsMade + 1}`,
    );

    throw new Error('Force fail');
  }
}