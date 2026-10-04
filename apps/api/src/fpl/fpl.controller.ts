import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FplService } from './fpl.service';

@Controller('fpl')
export class FplController {
  constructor(private readonly fplService: FplService) {}

  @Get('leagues/:id')
  getLeague(@Param('id', ParseIntPipe) id: number) {
    return this.fplService.getLeagueStandings(id);
  }

  @Get('players/:id')
  getPlayer(@Param('id', ParseIntPipe) id: number) {
    return this.fplService.getPlayerDetails(id);
  }

  @Get('managers/:id')
  getManager(@Param('id', ParseIntPipe) id: number) {
    return this.fplService.getManager(id);
  }
}
