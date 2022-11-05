import React, {useState} from 'react';
import Modal_Container from '../01_Modals/Modal_Container';

export default function App(): JSX.Element {
  const [displaying , setDisplay] = useState(<Modal_Container></Modal_Container>)

  return (
      <div>
        {displaying}
      </div>
  );
}