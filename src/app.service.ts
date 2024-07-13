import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { [key: string]: string } {
    return {
      message: 'Hello World!',
    };
  }
}
