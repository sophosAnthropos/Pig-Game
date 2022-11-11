import { createContext, useRef } from 'react';
import { dataRefTypes, gameDataRef } from '../../Interfaces/For_Data_Ref';

export const DataContext = createContext<React.MutableRefObject<dataRefTypes>>({current: {...gameDataRef}});

export const DataProvider = ({children}: {children: JSX.Element}) => {

    let gameData = useRef({...gameDataRef});

    return (
        <DataContext.Provider value={gameData}>
            {children}
        </DataContext.Provider>
    )
}