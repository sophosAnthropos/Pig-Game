import { useContext } from 'react';
import { AppStateContext } from '../../../Utilities/Context/App_State_Context';
import { DataContext } from '../../../Utilities/Context/Data_Context';
import { WinnerScreen } from '../../03_Winner/Winner_Screen';

export const ScoreBtn = ({children, clickFunc, player}: {children: JSX.Element, clickFunc: ()=>void, player: number}) => {

    let dataRef = useContext(DataContext)
    // used to set name of winner to the first to hit winning score value

    const {app:[, setAppState], p1Score: [p1Score], p2Score: [p2Score]} = useContext(AppStateContext)
    // passed to win conditions below.
    
    if ((p1Score >= 50 && p2Score < 50) || (p2Score >= 50 && p1Score < 50) ) {
        if(p1Score >= 50) dataRef.current.winner = dataRef.current.name.p1Name;
        if(p2Score >= 50) dataRef.current.winner = dataRef.current.name.p2Name;
        setAppState(<WinnerScreen/>);
    }

    return (  
        <div 
            className={`
                sm:w-full sm:h-full sm:flex sm:justify-center sm:items-start
            `}
        >
            <button
                onClick={clickFunc}
                className={`
                    w-full

                    sm:group/btn sm:scoreBtn sm:p-1 sm:flex sm:flex-col sm:justify-center sm:items-center sm:border-[5px] sm:border-neutral-700 sm:rounded-3xl sm:bg-neutral-500 sm:transition sm:ease-linear sm:hover:bg-yellow-200 sm:hover:scale-[.98] sm:duration-150
                `}
            >
                {children}
            </button>
        </div>  
    )
}