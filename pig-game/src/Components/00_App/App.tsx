import {createContext, useContext, useRef} from 'react';
import { AppStateContext } from '../../Logic/App_State_Context';

export const DataContext = createContext<React.MutableRefObject<any>>({current: {}})

export const App = () => {
  
  const [appState] = useContext(AppStateContext);


  let gameData = useRef({
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
    }
  });

  return (
      <div>
        <DataContext.Provider value={gameData}>
          {appState}
        </DataContext.Provider>
      </div>
  );
}