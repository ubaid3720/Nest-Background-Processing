import { WorkerHost, Processor } from '@nestjs/bullmq';
import { TEST_QUEUE } from '../common/constant/queue.constant';
import { Job } from 'bullmq';

@Processor(TEST_QUEUE)
export class TestProcessor extends WorkerHost {
    async process(job: Job) {
        console.log('🧪 Test job received:', job.data);

        await new Promise(res => setTimeout(res, 60000));

        console.log('✅ Test job completed:', job.data.name);

    }
}