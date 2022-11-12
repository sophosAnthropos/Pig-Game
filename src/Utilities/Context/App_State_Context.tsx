import { createContext, useState } from "react";
import { ModalContainer } from "../../Components/01_Modals/Modal_Container";
import { appAndModalStates, aMSObjDestruct, modalPhaseStates } from "../Types/Types_And_Inits";
import { GameContainer } from "../../Components/02_Game/Game_Container";

const {initial, secondary, final} = modalPhaseStates;

export const AppStateContext = createContext<appAndModalStates>({...aMSObjDestruct}) 
// context provided to index.tsx, used to pass state to app.tsx & setState to btn components (when clicked: modal > game > winnerScreen). 

export const AppContext = ({children}: {children: JSX.Element}): JSX.Element => {
    const [appState, setAppState] = useState(<ModalContainer/>);
    // setAppState is passed to: 
            // onClick function down below in provider
            // players' total score btn's located in the scoreBtn.tsx in the game dir, & then:
            // it's passed to DieBtn_and_ScoreBtn.tsx, located in logic dir under the utilities dir 
    
    const [current, setModalState] = useState(initial);
    // setModalState passed to onClick function down below in the provider.
    
    const [p1Points, setP1Points] = useState(0);
    const [p2Points, setP2Points] = useState(0);
    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);

    return (
        <AppStateContext.Provider value={{
            app: [appState, setAppState], 
            modal: [current, setModalState],
            p1Points: [p1Points, setP1Points], 
            p2Points: [p2Points, setP2Points], 
            p1Score: [p1Score, setP1Score], 
            p2Score: [p2Score, setP2Score], 
            onClick: () => {
                let stateArg; // to allow conditional argument for setModalState to change to next phase
                current === initial ? stateArg = secondary : stateArg = final;
                current === final ? setAppState(<GameContainer/>) : setModalState(stateArg);
            }
        }}>
            {children}
        </AppStateContext.Provider>
    ) // the provider is set in the index.tsx
}