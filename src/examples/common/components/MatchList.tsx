import React, {useEffect} from 'react';
import * as ProgramTypes from '../../../api/program/Types';
import Match from '../../common/components/Match';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NoMatches = styled.div``;

const RELOAD_INTERVAL = 1000 * 60;

interface Props {
    matches: ProgramTypes.Match[];
    getMatches: () => void;
}

const MatchList: React.FC<Props> = ({matches, getMatches}) => {
    /**
     * In my opinion the most elegant solution to cover reloading of all examples (redux+hoc, context+hook/consumer) at once
     * In a real project this should probably occur top->down instead of the displaying component
     */
    useEffect(() => {
        const reloadTimer = setInterval(() => getMatches(), RELOAD_INTERVAL);
        return () => clearInterval(reloadTimer);
    });

    return (
        <Container>
            {matches.length === 0 ? (
                <NoMatches>No matches available</NoMatches>
            ) : (
                matches.map((match: ProgramTypes.Match) => <Match key={match.id} match={match} />)
            )}

            <button onClick={getMatches}>Get/Update Matches</button>
        </Container>
    );
};

export default MatchList;
