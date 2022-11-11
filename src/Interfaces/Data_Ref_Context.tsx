// The interface & Obj are to keep app tsx file dry & concise. 

// dataRefTypes interface provides the type to gameDataRef Obj below, & the type in app tsx file's createContext<React.MutableRefObject<type>>
// gameDataRef Obj below is destructured in both app tsx file's init values for createContext({current: {...IN HERE}}), & in the useRef({...IN HERE})


export interface dataRefTypes {
    value: string,
    name: {
        p1Name: string,
        p2Name: string,
    },
    avatar: {
        index: {
            p1Index: number,
            p2Index: number,
        },
        type: {
            p1Type: string,
            p2Type: string,
        },
    },
    turnPoints: {
        p1Points: number,
        p2Points: number,
    },
    totalScore: {
      p1Score: number,
      p2Score: number,
    },
    die: {
        color: string,
        value: number,
        face: string,
    },
    winner: string,
    Arrays: {
        dieColors: Array<string>,
        avatars: Array<string>
    }
}

export const gameDataRef: dataRefTypes = {
    value: "",
    name: {
        p1Name: `Player 1`,
        p2Name: `Player 2`
      },
      avatar: {
        index: {
          p1Index: 0,
          p2Index: 0
        },
        type: {
          p1Type: `standard`,
          p2Type: `standard`
        }
      },
      turnPoints: {
        p1Points: 0,
        p2Points: 0
      },
      totalScore: {
        p1Score: 0,
        p2Score: 0
      },
      die: {
        color: `Black`,
        value: 1,
        face: `One`
      },
      winner: `Player`,
      Arrays: {
        dieColors: ['Black', 'Blue', 'Green', 'Orange', 'Pink', 'Purple', 'Red', 'Yellow', 'Random'],
        avatars: [`standard`, `demon`, `fire`, `ice`, `earth`, `shadow`, `ghost`, `iron`, `robo`, `mystery`]
      }
}