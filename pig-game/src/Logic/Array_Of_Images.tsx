


const dieColorArray: string[] = ['Black', 'Blue', 'Green', 'Orange', 'Pink', 'Purple', 'Red', 'Yellow', 'Random'];

const avatarsArray: string[] = [`standard`, `demon`, `fire`, `ice`, `earth`, `shadow`, `ghost`, `iron`, `robo`, `mystery`];


const imgArrMaker = (arrToMap: string[] ) => // takes in one of the two arrays above to provide a map to
    arrToMap.map((type: string, index: number, arr: string[]) => //
        <img
            src={`../../src/Assets/Images/${arr === dieColorArray ? `diceFaces/${type}/01_faceOne${type}.png` : `pigIcon/0${index}_${type}PigIcon.png` }`}
            alt={`${arr === dieColorArray ? `Face with a value of one from a ${type} die` : `Pig with a ${type} appearance`}`}
            key={`${type}${index}`}
        />
    )
        
export const dieImgArray = imgArrMaker(dieColorArray);
export const pigImgArray = imgArrMaker(avatarsArray);