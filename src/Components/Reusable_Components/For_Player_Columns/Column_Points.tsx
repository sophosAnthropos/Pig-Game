import { useContext } from 'react';
import { AppStateContext } from '../../../Utilities/Context/App_State_Context';

export const TurnPoints = ({player}: {player: number}): JSX.Element => {
    const {p1Points: [p1Points], p2Points: [p2Points] } = useContext(AppStateContext)
    return (
        <section 
            className={`
                h-2/5 flex
                
                sm:justify-center sm:items-center sm:h-[27.5%]
            `}
        >
            <p 
                className={`
                    w-full h-full headings text-[6rem] playerTxtMobile flex justify-center items-center
                    
                    sm:w-1/2 sm:items-center sm:pointsLaptop
                `}
            >
                {`${player === 1 ? p1Points : p2Points}`}
            </p>
        </section>
    )
} // Displays points depending on player turn