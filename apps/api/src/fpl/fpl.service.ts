import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// Naming: "player" = a footballer (FPL calls it "element"),
// "manager" = a person playing FPL (FPL calls it "entry").
@Injectable()
export class FplService {
  private readonly baseUrl: string;
  constructor(private readonly configService: ConfigService) {
    this.baseUrl = this.configService.get<string>(
      'FPL_BASE_URL',
      'https://fantasy.premierleague.com/api',
    );
  }

  getLeagueStandings(leagueId: number): Promise<unknown> {
    return this.fetchFpl(
      `/leagues-classic/${leagueId}/standings/`,
      `League ${leagueId}`,
    );
  }

  getPlayerDetails(playerId: number): Promise<unknown> {
    return this.fetchFpl(`/element-summary/${playerId}/`, `Player ${playerId}`);
  }

  getManager(managerId: number): Promise<unknown> {
    return this.fetchFpl(`/entry/${managerId}/`, `Manager ${managerId}`);
  }

  private async fetchFpl(path: string, resourceName: string): Promise<unknown> {
    const response = await fetch(`${this.baseUrl}${path}`);

    if (response.status === 404) {
      throw new NotFoundException(`${resourceName} not found`);
    }
    if (!response.ok) {
      throw new Error(
        `FPL API request ${path} failed: ${response.status} ${response.statusText}`,
      );
    }
    return response.json();
  }
}
