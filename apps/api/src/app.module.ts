import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FplModule } from './fpl/fpl.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FplModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
