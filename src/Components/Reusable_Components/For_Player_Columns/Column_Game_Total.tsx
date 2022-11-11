import { useContext } from 'react';
import { dpsContext } from '../../../Logic/Die_Points_Scores';
import { held } from '../../../Logic/Roll_Die';


export const TotalScore = ({player}: {player: number}): JSX.Element => {

    const {
        p1Points: [p1Points, setP1Points], 
        p2Points: [p2Points, setP2Points], 
        p1Score: [p1Score, setP1Score], 
        p2Score: [p2Score, setP2Score]
    } = useContext(dpsContext);
    
    return (
        <section>
            <button onClick={()=>held(
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