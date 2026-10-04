import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FplModule } from './fpl/fpl.module';

@Module({
  imports: [FplModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
