import {useContext} from 'react';
import { DataContext } from '../Components/00_App/App';
import { selected } from './Selectors_Clicked';

const imgArrMaker = (option: number ): Array<JSX.Element> => { // pass in 1 of 2 arrays, returns array of jsx img elements for selectors in modal.
    
    let {current: {avatar:{index:{p1Index, p2Index}, type: {p1Type, p2Type}}, die:{color}, Arrays: {dieColors, avatars}}} = useContext(DataContext);
    // Arrays value for conditional mapping.
    // Indexes, types, & die.color passed to onclick to record user input


    return (option === 0 ? dieColors : avatars).map((appearance: string, num: number, arr: string[]) => 
        <img
            src={`../../src/Assets/Images/${arr === dieColors ? `diceFaces/${appearance}/01_faceOne${appearance}.png` : `pigIcon/0${num}_${appearance}PigIcon.png` }`}

            alt={`${arr === dieColors ? `Face with a value of one from a ${appearance} die` : `Pig with a ${appearance} appearance`}`}

            key={`${appearance}${num}`}

            onClick={()=>selected(option, appearance, num, color, p1Index, p1Type, p2Index, p2Type)}
        />
    )
}
        
export const dieImgArray: JSX.Element[] = imgArrMaker(0);
export const p1PigImgArray: JSX.Element[] = imgArrMaker(1);
export const p2PigImgArray: JSX.Element[] = imgArrMaker(2);