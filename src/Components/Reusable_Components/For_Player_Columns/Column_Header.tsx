import {useContext} from 'react';
import { DataContext } from '../../../Utilities/Context/Data_Context';

export const ColumnHeader = ({player}: {player: number}): JSX.Element => { 
    let {
        current: {
            name: {p1Name, p2Name}, 
            avatar: {
                index: {p1Index, p2Index}, 
                type: {p1Type, p2Type}
            }
        }
    } = useContext(DataContext);


    return (
        <header>
            <article>
                <h2>{player === 1 ? p1Name : p2Name}</h2>
            </article>
            <article>
                <img src={`../../../../src/Assets/Images/pigIcon/0${player === 1 ? p1Index : p2Index}_${player === 1 ? p1Type : p2Type}PigIcon.png`} alt={`Pig face icon with ${player === 1 ? p1Type : p2Type} like appearance`}/>
            </article>
        </header>
    )
}