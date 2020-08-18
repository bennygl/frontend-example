import * as React from 'react';
import styled from 'styled-components';
import * as ProgramTypes from '../../../api/program/Types';
import * as DateFormat from '../../../utils/DateFormat';

export const MINUTE_SYMBOL = String.fromCharCode(8242);

interface Props {
    match: ProgramTypes.Match;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    min-width: 400px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Time = styled.div`
    margin-right: 10px;
`;

const Team = styled.div``;

const Score = styled.div``;

const MatchTime: React.FC<Props> = ({match}) => {
    const now = Date.now();
    if (match.begin < now) {
        return <Time>{`${DateFormat.milliSecondsToFullMinutes(now - match.begin)}${MINUTE_SYMBOL}`}</Time>;
    } else {
        return <Time>{`${DateFormat.timestampToDate(match.begin)} ${DateFormat.timestampToTime(match.begin)}`}</Time>;
    }
};

const Match: React.FC<Props> = ({match}) => {
    return (
        <Container>
            <Row>
                <h3>{match.country}</h3>
                <h4>{match.league && match.league.label}</h4>
            </Row>
            <Row>
                <MatchTime match={match} />
                {match.score && <Score>{match.score.join(':')}</Score>}
            </Row>
            <Row>
                <Team>{match.homeTeam.label}</Team>
                <Team>{match.awayTeam.label}</Team>
            </Row>
        </Container>
    );
};

export default Match;
