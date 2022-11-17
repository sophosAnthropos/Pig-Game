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
        <div className={`w-[42%] h-full flex ${player === 1 ?'justify-end' : 'justify-start'} items-center`}>
            <button
                onClick={clickFunc}
                className={`group/btn w-3/4 h-[90%] p-3 flex flex-col justify-center items-center border-[15px] border-blue-400 rounded-3xl bg-neutral-500 transition ease-linear hover:bg-yellow-200 hover:scale-[.98] duration-150`}
            >
                {children}
            </button>
        </div>  
    )
}