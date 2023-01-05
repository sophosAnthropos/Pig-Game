import { useContext } from 'react';
import { AppStateContext } from '../../Utilities/Context/App_State_Context';
import { DataProvider } from '../../Utilities/Context/Data_Context';
import { ModalContainer } from '../01_Modals/Modal_Container';
import { GameContainer } from '../02_Game/Game_Container';
import { WinnerScreen } from '../03_Winner/Winner_Screen';

export const App = () => {
  const {app: [appState]} = useContext(AppStateContext);

  return (
      <div 
        className={`
            fullContainersMobile 
            
            sm:fullContainersLaptop sm:appLaptop
          `}
      >
        <DataProvider>
          {appState}
        </DataProvider>
      </div>
  );
}