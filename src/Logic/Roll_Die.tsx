

let turn = 1;
let dieValue: number;

export const held = (
    p1Points: number,
    p2Points: number,
    setP1Points: React.Dispatch<React.SetStateAction<number>>, 
    setP2Points: React.Dispatch<React.SetStateAction<number>>,
    setP1Score: React.Dispatch<React.SetStateAction<number>>, 
    setP2Score: React.Dispatch<React.SetStateAction<number>>
) => {
    switch(turn) {
        case 1:
            if(dieValue === 1) {
                setP1Points(0);
                turn = 2;
            }
            else {
                setP1Score((prevVal)=>prevVal+p1Points)
                setP1Points(0);
            }
            break;
        case 2:
            if(dieValue === 1) {
                setP2Points(0);
                turn = 1;
            }
            else {
                setP2Score((prevVal)=>prevVal+p2Points)
                setP2Points(0);
            }
            break;
    }

}


export const clicked = (
    value: number, 
    color: string, 
    face: string, 
    setDie: React.Dispatch<React.SetStateAction<JSX.Element>>, 
    setP1Points: React.Dispatch<React.SetStateAction<number>>, 
    setP2Points: React.Dispatch<React.SetStateAction<number>>
): void => {
    dieValue = value
    switch(turn) {
        case 1:
            if(value === 1) {
                setP1Points(0);
                turn = 2;
            }
            else {
                setP1Points((prevPoints)=>prevPoints+value);
            }
            break;
        case 2:
            if(value === 1) {
                setP2Points(0);
                turn = 1;
            }
            else {
                setP2Points((prevPoints)=>prevPoints+value);
            }
            break;
    }

    setDie( 
        <img 
            src={`../../../Assets/Images/diceFaces/${color}/0${value}_face${face}${color}.png`}
            alt={`${color} die face value ${face}`}
        />
    )



   
    
}