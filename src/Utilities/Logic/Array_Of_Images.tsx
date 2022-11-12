import { useContext } from 'react';
import { DataContext } from '../Context/Data_Context';

export const imgArrMaker = (option: number ): Array<JSX.Element> => { 
        
    const dataRef = useContext(DataContext);

    return (option === 0 ? dataRef.current.Arrays.dieColors : dataRef.current.Arrays.avatars)
        .map((appearance: string, num: number, arr: string[]) => 
            <img
                src={`../../src/Assets/Images/${arr === dataRef.current.Arrays.dieColors ? `diceFaces/${appearance}/01_faceOne${appearance}.png` : `pigIcon/0${num}_${appearance}PigIcon.png` }`}

                alt={`${arr === dataRef.current.Arrays.dieColors ? `Face with a value of one from a ${appearance} die` : `Pig with a ${appearance} appearance`}`}

                key={`${appearance}${num}`}

                onClick={() => {
                    switch (option) {
                        case 0:
                            appearance === 'Random' ? 
                            dataRef.current.die.color = dataRef.current.Arrays.dieColors[Math.floor(Math.random()*9)] :
                            dataRef.current.die.color = appearance
                            break;
                        case 1:
                            dataRef.current.avatar.index.p1Index = num
                            dataRef.current.avatar.type.p1Type = appearance
                            break;
                        case 2:
                            dataRef.current.avatar.index.p2Index = num
                            dataRef.current.avatar.type.p2Type = appearance
                            break;
                    }
                }}
            />
    )
}
// this function is passed to Modal_Main_Content directory, one to the die selection and twice to the player inputs