import { useState, useContext } from 'react';
import { ModalHeader } from './Modal_Minor_Components/Modal_Header';
import { ModalButton } from './Modal_Minor_Components/Modal_Button';
import { modalPhaseStates } from '../../Interfaces/For_Modal_States';
import { GameContainer } from '../02_Game/Game_Container';
import { AppStateContext } from '../../Logic/Context/App_State_Context';

const {initial, secondary, final} = modalPhaseStates // modal phases for each time the modal button is clicked

export const ModalContainer = (): JSX.Element => {
  const [current, setState] = useState(initial);
  const [,setAppState] = useContext(AppStateContext) // For final modal button to close modals, pass player data, and start game
  
  const {header, main, BtnTxt} = current  //Extraction of state for use in multiple places
  
  return (
    <div>
        <header>
            <ModalHeader>
              {header}
            </ModalHeader>
        </header>
        <main>
            {main}
        </main>
        <footer>
            <ModalButton 
                onClick={()=> {
                    let stateArg; // to allow conditional argument for setState
                    current === initial ? stateArg = secondary : stateArg = final;
                    current === final ? setAppState(<GameContainer/>) : setState(stateArg);
                }}
            >
                {BtnTxt}
            </ModalButton>
        </footer>
    </div>
  )
}