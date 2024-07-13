import { Injectable } from '@nestjs/common';
import { LoggerService } from './utils/logger/logger.service';

@Injectable()
export class AppService {
  constructor(private readonly logger: LoggerService) {}
  getHello(): { [key: string]: string } {
    this.logger.info('Hello World!');
    return {
      message: 'Hello World!',
    };
  }
}
