import { useContext } from 'react';
import { dpsContext } from '../../../Logic/Context/Die_Points_Scores';

export const TurnPoints = ({player}: {player: number}): JSX.Element => {
    const {p1Points: [p1Points], p2Points: [p2Points] } = useContext(dpsContext)
    return (
        <section>
            <p>
                {`${player === 1 ? p1Points : p2Points}`}
            </p>
        </section>
    )
} // Displays points depending on player turn