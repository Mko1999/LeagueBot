import { Injectable, NotFoundException } from '@nestjs/common';

const FPL_BASE_URL = 'https://fantasy.premierleague.com/api';

@Injectable()
export class FplService {
  async getLeagueStandings(leagueId: number): Promise<unknown> {
    const response = await fetch(
      `${FPL_BASE_URL}/leagues-classic/${leagueId}/standings/`,
    );
    if (response.status === 404) {
      throw new NotFoundException(`League with ID ${leagueId} not found`);
    }
    if (!response.ok) {
      throw new Error(
        `Failed to fetch league standings: ${response.statusText}`,
      );
    }
    return response.json();
  }

  async getPlayerDetails(playerId: number): Promise<unknown> {
    const response = await fetch(
      `${FPL_BASE_URL}/element-summary/${playerId}/`,
    );
    if (response.status === 404) {
      throw new NotFoundException(`Player with ID ${playerId} not found`);
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch player details: ${response.statusText}`);
    }
    return response.json();
  }
}
