import { useContext } from 'react';
import { DataContext } from '../../../Logic/Context/Data_Context';
import { dieClicked } from '../../../Logic/Functions/Roll_Die';
import { dpsContext } from '../../../Logic/Context/Die_Points_Scores';

export const DieBtn = () => {
    let {current: {die: {color, value, face}}} = useContext(DataContext);
    let {die: [die,setDie], p1Points: [, setP1Points], p2Points: [, setP2Points]} = useContext(dpsContext)

    
    const rollDie = (rand: number) => {
        dieClicked(value = rand, color, face = `One Two Three Four Five Six`.split(' ')[(rand-1)], setDie, setP1Points, setP2Points)
    }
    
    return (
        <button onClick={() => rollDie(Math.floor((Math.random() * 6) + 1))}>
            {die}
        </button>
    )
}


// const [die, setDie] = useState(
//     <img 
//         src={`../../../../src/Assets/Images/diceFaces/${color}/01_faceOne${color}.png`}
//         alt={`${color} die face value One`}
//     />
// );