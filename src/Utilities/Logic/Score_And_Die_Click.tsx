import { setJSX, setNumber, setTurnStyles } from "../Types/Types_And_Inits";
// Type interfaces



const yourTurnBG = 'bg-fuchsia-300';
const waitingBG = 'bg-fuchsia-500';
const p1TurnStyle = 'player1Column';
const p2TurnStyle = 'player2Column';
const p1WaitingStyle = 'notP1Turn';
const p2WaitingStyle = 'notP2Turn';





export const dieClick = (rand: number, turn: number, setP1Points: setNumber, setP2Points: setNumber, setP1Turn: setTurnStyles, setP2Turn: setTurnStyles, setDie: setJSX, color: string, face: string[]): number => {

    let nextTurn: number = turn;

    switch(turn) {
        case 1:
              if(rand === 1) {
                    setP1Turn({turn: p1WaitingStyle, backGround: waitingBG});
                    setP2Turn({turn: p2TurnStyle, backGround: yourTurnBG})
                    setP1Points(0);
                    nextTurn = 2
              }
              else {
                    setP1Points((prevPoints)=>prevPoints+rand);
              }
              break;
        case 2:
              if(rand === 1) {
                    setP2Turn({turn: p2WaitingStyle, backGround: waitingBG})
                    setP1Turn({turn: p1TurnStyle, backGround: yourTurnBG});
                    setP2Points(0);
                    nextTurn = 1
              }
              else {
                    setP2Points((prevPoints)=>prevPoints+rand);
              }
              break;
        }
  
        setDie( 
            <img 
                src={`../../../src/Assets/Images/diceFaces/${color}/0${rand}_face${face[(rand-1)]}${color}.png`}
                alt={`${color} die face value ${face[(rand-1)]}`}
                className={`gameDie`}
            />
        ) 
        
        return nextTurn
}




export const scoreClick = (player: number, setScore: setNumber, setP1Turn: setTurnStyles, setP2Turn: setTurnStyles, setPoints: setNumber, points: number) => {
    if (player === 1) {
        setP1Turn({turn: p1WaitingStyle, backGround: waitingBG});
        setP2Turn({turn: p2TurnStyle, backGround: yourTurnBG});
        setScore((prevVal)=>prevVal+points);
        setPoints(0);
    } 
    else {
        setP2Turn({turn: p2WaitingStyle, backGround: waitingBG});
        setP1Turn({turn: p1TurnStyle, backGround: yourTurnBG});
        setScore((prevVal)=>prevVal+points);
        setPoints(0);
    }
}