import { createContext, useRef } from 'react';
import { gDRContext, gameDataRef } from '../Types/Types_And_Inits';

// gDRContext is the type for the created context below.
export const DataContext = createContext<gDRContext>({current: { name: {p1Name: ``, p2Name: ``}, avatar: {index: {p1Index: 0, p2Index: 0}, type: {p1Type: ``, p2Type: ``}},  die: {color: ``, value: 1, face: ``}, winner: ``, Arrays: {dieColors: [''], avatars: [``]}
}});

export const DataProvider = ({children}: {children: JSX.Element}) => {

    let gameData = useRef({...gameDataRef}); // gameDataRef is an object for destructuring, located in for_Data_ref tsx file in interfaces directory, and it is just used to pre-map the entries used in this gameData refObj.

    return (
        <DataContext.Provider value={gameData}>
            {children}
        </DataContext.Provider>
    )
} // provider is passed to app tsx file under the components directory