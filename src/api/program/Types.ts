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
    hostCountry: 'Germany' | 'Spain'; // Could use a custom type if more information about host country is necessary
    homeTeam: Team;
    awayTeam: Team;
    league?: League; // League is optional as it may be a game outside regular leagues
    score?: [number, number];
}
