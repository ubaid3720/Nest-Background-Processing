import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post('send')
  async send(@Body() body: { email: string; name: string }) {
    await this.emailService.sendEmail(body.email, body.name);
    return { message: 'Job added to queue' };
  }
}
