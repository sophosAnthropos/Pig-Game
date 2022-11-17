import { useContext } from 'react';
import { AppStateContext } from '../../Utilities/Context/App_State_Context';
import { DataProvider } from '../../Utilities/Context/Data_Context';
import { WinnerScreen } from '../03_Winner/Winner_Screen';
import { GameContainer } from '../02_Game/Game_Container';

export const App = () => {
  const {app: [appState]} = useContext(AppStateContext);

  return (
      <div className={`appSize  ${appState != <WinnerScreen/> ? 'bg-blue-400' : 'bg-winBg'} relative flex justify-center items-center`}>
        <DataProvider>
          <GameContainer/>
        </DataProvider>
      </div>
  );
}