import { useContext } from 'react';
import { AppStateContext } from '../../../Utilities/Context/App_State_Context';
import { DataContext } from '../../../Utilities/Context/Data_Context';
import { WinnerScreen } from '../../03_Winner/Winner_Screen';

export const ScoreBtn = ({children, clickFunc}: {children: JSX.Element[], clickFunc: ()=>void}) => {

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
        <button onClick={clickFunc}>
            {children}
        </button>
    )
}