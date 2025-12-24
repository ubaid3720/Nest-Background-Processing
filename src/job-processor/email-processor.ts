import { Processor, WorkerHost } from "@nestjs/bullmq";
import { EMAIL_QUEUE } from "../common/constant/queue.constant";
import { Job } from "bullmq";

@Processor(EMAIL_QUEUE)
export class EmailProcessor extends WorkerHost {
  async process(job: Job){
    console.log('📧 Email job received:', job.data);

    await new Promise(res => setTimeout(res, 60000));

    console.log('✅ Email sent to:', job.data.email);
  }
} 