import { createContext, useState } from "react";
import {ModalContainer} from "../Components/01_Modals/Modal_Container";

export const AppStateContext = createContext<[JSX.Element, React.Dispatch<React.SetStateAction<JSX.Element>>]>([<div/>, (v)=>v])

export const AppContext = ({children}: {children: JSX.Element}): JSX.Element => {

    const [appState, setAppState] = useState(<ModalContainer/>);
    
    return (
        <AppStateContext.Provider value={[appState, setAppState]}>
            {children}
        </AppStateContext.Provider>
    )
}