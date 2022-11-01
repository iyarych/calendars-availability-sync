import { hrtime } from 'node:process';
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: any, response: any, next: () => void) {
    const startAt = hrtime.bigint();
    const { ip, method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';

    response.on('finish', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');
      const responseTimeMs = Number(hrtime.bigint() - startAt) / 1000000;
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${responseTimeMs.toFixed(
          3,
        )} ms ${contentLength} - ${userAgent} ${ip}`,
      );
    });

    next();
  }
}
