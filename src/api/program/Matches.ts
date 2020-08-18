import * as ProgramTypes from './Types';
import * as Leagues from './Leagues';
import * as Teams from './Teams';

const OFFSET = 30 * 60 * 1000;

export const DortmundVSBayern: ProgramTypes.Match = {
    id: 'm1',
    begin: Date.now() - OFFSET,
    country: 'Germany',
    homeTeam: Teams.Dortmund,
    awayTeam: Teams.Bayern,
    league: Leagues.Bundesliga,
    score: [3, 0]
};

export const MadridVSBarcelona: ProgramTypes.Match = {
    id: 'm2',
    begin: Date.now() + OFFSET,
    country: 'Spain',
    homeTeam: Teams.Madrid,
    awayTeam: Teams.Barcelona,
    league: Leagues.PrimeraDivision
};
