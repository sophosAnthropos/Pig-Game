let turn = 1; // provides player's turn value to switch statements in the 2 functions below

export const holdPoints = (
    p1Points: number,
    p2Points: number,
    setP1Points: React.Dispatch<React.SetStateAction<number>>, 
    setP2Points: React.Dispatch<React.SetStateAction<number>>,
    setP1Score: React.Dispatch<React.SetStateAction<number>>, 
    setP2Score: React.Dispatch<React.SetStateAction<number>>
): void => {
    switch(turn) {
        case 1:
            setP1Score((prevVal)=>prevVal+p1Points)
            setP1Points(0);
            turn = 2;
            break;
        case 2:            
            setP2Score((prevVal)=>prevVal+p2Points)
            setP2Points(0);
            turn = 1
            break;
    }

}
// This function will take accumulated points, add them to total score, reset points to 0, & end that players turn
// This is passed to each players score button onClick located in the Column_Game_Total tsx file located in the For_Player_Columns directory nested in the Reusable_Components directory.



export const dieClicked = (
    value: number, 
    color: string, 
    face: string, 
    setDie: React.Dispatch<React.SetStateAction<JSX.Element>>, 
    setP1Points: React.Dispatch<React.SetStateAction<number>>, 
    setP2Points: React.Dispatch<React.SetStateAction<number>>
): void => {
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
            src={`../../../src/Assets/Images/diceFaces/${color}/0${value}_face${face}${color}.png`}
            alt={`${color} die face value ${face}`}
        />
    )    
}
// This function will change the state of the die to render the correct face.
// It will also check the value of the rolled die to produce an action for the players points and turn.
// For a rolled value of 1 the current play is stripped of their accumulated points for that turn and their turn ends
// For values 2 through 6 the value is added to the players points & the turn will remain theirs
// This is passed to Die_Btn tsx file to be passed to the die button's onClick