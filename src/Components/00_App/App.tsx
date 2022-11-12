import { useContext } from 'react';
import { AppStateContext } from '../../Utilities/Context/App_State_Context';
import { DataProvider } from '../../Utilities/Context/Data_Context';

export const App = () => {
  const {app: [appState]} = useContext(AppStateContext);

  return (
      <div>
        <DataProvider>
          {appState}
        </DataProvider>
      </div>
  );
}