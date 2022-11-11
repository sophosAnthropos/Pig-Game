import React, { createContext, useContext, useRef } from 'react';
import { AppStateContext } from '../../Logic/App_State_Context';
import { dataRefTypes, gameDataRef } from '../../Interfaces/Data_Ref_Context';

export const DataContext = createContext<React.MutableRefObject<dataRefTypes>>({current: {...gameDataRef}})

export const App = () => {
  
  const [appState] = useContext(AppStateContext);

  let gameData = useRef({...gameDataRef});

  return (
      <div>
        <DataContext.Provider value={gameData}>
          {appState}
        </DataContext.Provider>
      </div>
  );
}