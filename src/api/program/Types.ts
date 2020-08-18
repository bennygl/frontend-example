// Interface for Country and League is somewhat superfluous, implemented as interfaces for easier future maintainability
export interface Country {
    id: string;
    label: string;
}

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
    country: Country;
    homeTeam: Team;
    awayTeam: Team;
    league: League;
    score?: [number, number];
}
