import { useContext } from 'react';
import { dpsContext } from '../../../Logic/Context/Die_Points_Scores';
import { holdPoints } from '../../../Logic/Functions/Roll_Die';


export const TotalScore = ({player}: {player: number}): JSX.Element => {

    const {
        p1Points: [p1Points, setP1Points], 
        p2Points: [p2Points, setP2Points], 
        p1Score: [p1Score, setP1Score], 
        p2Score: [p2Score, setP2Score]
    } = useContext(dpsContext); 
    // states from context that will be passed into the holdPoints function located below in onClick. 
    // these will allow the holdPoints function to add accumulated points to total score, reset points to 0, & switch player turns.
    
    return (
        <section>
            <button onClick={()=>holdPoints(
                p1Points, 
                p2Points, 
                setP1Points, 
                setP2Points, 
                setP1Score, 
                setP2Score
            )}>
                <article>
                    <p>
                        Click This = Save Points
                    </p>
                </article>
                <article>
                    <p>
                        {`${player === 1 ? p1Score : p2Score}`}
                    </p>
                </article>
            </button>
        </section>
    )
}