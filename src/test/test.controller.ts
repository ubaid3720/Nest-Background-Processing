import { Controller, Post, Body } from '@nestjs/common';
import { TestService} from './test.service';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Post('send')
  async send(@Body() body: { name: string }) {
    await this.testService.addTestJob();
    return { message: 'Job added to queue' };

    }
    }
