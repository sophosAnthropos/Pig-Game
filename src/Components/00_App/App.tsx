import { useContext } from 'react';
import { AppStateContext } from '../../Logic/Context/App_State_Context';
import { DataProvider } from '../../Logic/Context/Data_Context';

export const App = () => {
  const [appState] = useContext(AppStateContext);

  return (
      <div>
        <DataProvider>
          {appState}
        </DataProvider>
      </div>
  );
}