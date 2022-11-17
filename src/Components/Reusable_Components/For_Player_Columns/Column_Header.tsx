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
        <header 
            className={`w-full h-[45%] flex flex-col ${player === 1 ? 'justify-start' : 'justify-end'} items-center`}>
            <article 
                className={`w-full h-[30%] flex ${player === 1 ? 'justify-start' : 'justify-end'} items-center`}>
                <h2 
                    className='pNames pTxt flex justify-center items-center'>{player === 1 ? p1Name : p2Name}</h2>
            </article>
            <article 
                className={`w-4/5 h-[70%] flex ${player === 1 ? 'justify-start' : 'justify-end'} items-center`}>
                <img 
                    src={`../../../../src/Assets/Images/pigIcon/0${player === 1 ? p1Index : p2Index}_${player === 1 ? p1Type : p2Type}PigIcon.png`} 
                    alt={`Pig face icon with ${player === 1 ? p1Type : p2Type} like appearance`}
                    className={`w-2/5`}
                />
            </article>
        </header>
    )
}