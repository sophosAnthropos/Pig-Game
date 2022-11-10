import {useContext, useState} from 'react';
import { DataContext } from "../../00_App/App";
import { clicked } from '../../../Logic/Roll_Die';

export const DieBtn = () => {
    let {current: {die: {color, value, face}}} = useContext(DataContext);

    const [die, setDie] = useState(
        <img 
            src={`../../../Assets/Images/diceFaces/${color}/01_faceOne${color}.png`}
            alt={`${color} die face value One`}
        />
    );
    
    const dieFaces = `One Two Three Four Five Six`.split(' ');

    const rollDie = (rand: number) => {
        value = rand;
        face = dieFaces[rand];
        clicked(rand, color, face, setDie)
    }

    return (
        <button onClick={() => rollDie(Math.floor((Math.random() * 6) + 1))}>
            {die}
        </button>
    )
}