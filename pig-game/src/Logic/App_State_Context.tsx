import { createContext, useState } from "react";
import {ModalContainer} from "../Components/01_Modals/Modal_Container";

export const AppStateContext = createContext<React.ComponentState>([])

export const AppContext = ({children}: {children: JSX.Element}) => {

    return (
        <AppStateContext.Provider value={useState(<ModalContainer/>)}>
            {children}
        </AppStateContext.Provider>
    )
}