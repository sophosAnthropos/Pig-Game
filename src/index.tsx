import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './Components/00_App/App';
import reportWebVitals from './reportWebVitals';
import { AppContext } from './Utilities/Context/App_State_Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContext>
      <App /> 
    </AppContext>
  </React.StrictMode>
); // app component is in app.tsx under components dir


reportWebVitals();
