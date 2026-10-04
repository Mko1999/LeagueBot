import { Module } from '@nestjs/common';
import { FplService } from './fpl.service';
import { FplController } from './fpl.controller';

@Module({
  providers: [FplService],
  controllers: [FplController],
})
export class FplModule {}
