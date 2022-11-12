import { useContext } from 'react';
import { AppStateContext } from '../../../Utilities/Context/App_State_Context';

export const TurnPoints = ({player}: {player: number}): JSX.Element => {
    const {p1Points: [p1Points], p2Points: [p2Points] } = useContext(AppStateContext)
    return (
        <section>
            <p>
                {`${player === 1 ? p1Points : p2Points}`}
            </p>
        </section>
    )
} // Displays points depending on player turn