import { Controller, Get, Post } from '@nestjs/common';

@Controller('/section03')
export class Section03Controller {
  @Get('/messages')
  listMessages(): string {
    return 'Get messages';
  }

  @Post('/message')
  createMessage(): string {
    return 'Create Message';
  }

  @Get('/:id')
  getMessage(): string {
    return 'Message with id';
  }
}
