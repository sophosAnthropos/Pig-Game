import { useContext } from 'react';
import { AppStateContext } from '../../Utilities/Context/App_State_Context';


export const ModalContainer = (): JSX.Element => {

  const {modal: [current], onClick} = useContext(AppStateContext) 
  // onClick for btn below to switch modal phases, close modal, pass player data, and start game
  
  const {header, main, BtnTxt} = current  
  //Extraction of state for use in JSX body below
  
  return (
    <div>
        <header>
            <h2>
              {header}
            </h2>
        </header>
        <main>
            {main}
        </main>
        <footer>
            <button 
                onClick={onClick}
            >
                {BtnTxt}
            </button>
        </footer>
    </div>
  )
}