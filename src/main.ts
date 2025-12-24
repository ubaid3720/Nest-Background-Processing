import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupBullBoard } from './queue/bull-board';
import { getQueueToken } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { ALL_QUEUES } from './common/constant/queue.constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
// Retrieve all queues
  const queues: Queue[] = ALL_QUEUES.map((name) =>
    app.get<Queue>(getQueueToken(name)),
  );

  setupBullBoard(app.getHttpAdapter().getInstance(), queues);

  await app.listen(3000);
}
bootstrap();
