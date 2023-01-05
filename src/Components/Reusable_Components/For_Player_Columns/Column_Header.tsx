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


    const flexJust = (num: number) => num === 1 ? 'sm:justify-start sm:items-end' : 'sm:justify-end sm:items-end'

    return (
        <header 
            className={`
                w-full h-[30%] flex flex-col
                
                sm:h-[45%]
            `}
        >
            <article 
                className={`
                    w-full h-1/2 flex justify-center items-center 
                    
                     sm:h-[35%]
                `}
            >
                <h2 
                    className={`
                        w-[90%] headings playerNameMobile playerTxtMobile flex justify-center items-end
                        
                        sm:w-full sm:playerNames
                    `}
                >
                    {player === 1 ? p1Name : p2Name}
                </h2>
            </article>
            <article 
                className={`
                    w-full h-2/5 flex justify-center items-end 
                    
                   sm:h-[65%]
                `}
            >
                <div
                    className={`
                        w-full flex justify-center 
                        
                        sm:w-3/5 sm:h-full sm:items-end
                    `}
                >
                    <img 
                        src={`../../../../src/Assets/Images/pigIcon/0${player === 1 ? p1Index : p2Index}_${player === 1 ? p1Type : p2Type}PigIcon.png`} 

                        alt={`Pig face icon with ${player === 1 ? p1Type : p2Type} like appearance`}

                        className={`playerAvatarMobile sm:playerAvatars`}
                    />
                </div>
            </article>
        </header>
    )
}