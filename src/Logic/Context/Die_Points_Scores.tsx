import { createContext, useState, useContext } from "react";
import { DataContext } from './Data_Context'

interface stateTypes {
    die: [JSX.Element, React.Dispatch<React.SetStateAction<JSX.Element>>],
    p1Points: [number, React.Dispatch<React.SetStateAction<number>>],
    p2Points: [number, React.Dispatch<React.SetStateAction<number>>],
    p1Score: [number, React.Dispatch<React.SetStateAction<number>>]
    p2Score: [number, React.Dispatch<React.SetStateAction<number>>]
}

export const dpsContext = createContext<stateTypes>({
    die: [<div/>, (v)=>v], 
    p1Points: [0, (v)=>v], 
    p2Points: [0, (v)=>v],  
    p1Score: [0, (v)=>v], 
    p2Score: [0, (v)=>v] 
});


export const DPSProvider = ({children}: {children: JSX.Element[]}): JSX.Element => {
    
    let {current: {die: {color}}} = useContext(DataContext)
    const [die, setDie] = useState(
        <img 
            src={`../../src/Assets/Images/diceFaces/${color}/01_faceOne${color}.png`}
            alt={`${color} die face value One`}
        />
    );
    const [p1Points, setP1Points] = useState(0);
    const [p2Points, setP2Points] = useState(0);
    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);


    return (
        <dpsContext.Provider value={{
            die: [die, setDie], 
            p1Points: [p1Points, setP1Points], 
            p2Points: [p2Points, setP2Points], 
            p1Score: [p1Score, setP1Score], 
            p2Score: [p2Score, setP2Score]
            }}
        >
            {children}
        </dpsContext.Provider>
    )
}