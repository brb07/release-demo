import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThoughtsModule } from './thoughts/thoughts.module';

@Module({
  imports: [ThoughtsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
