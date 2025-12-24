import { Global, Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ALL_QUEUES } from 'src/common/constant/queue.constant';

@Global()
@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6380,
      },
    }),

    ...ALL_QUEUES.map((name) =>
      BullModule.registerQueue({ name }),
    ),
  ],
  exports: [BullModule],
})
export class QueueModule {}
