export interface League {
    id: string;
    label: string;
}

export interface Team {
    id: string;
    label: string;
}

export interface Match {
    id: string;
    begin: number;
    country: 'Germany' | 'Spain'; // Could use a custom type if more information about country is necessary
    homeTeam: Team;
    awayTeam: Team;
    league: League;
    score?: [number, number];
}
