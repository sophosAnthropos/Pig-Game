import React, {useState} from 'react';
import Modal_Header from './Modal_Header';
import How_To_Play from './Modal_Main_Content/00_Game_Explanation/How_To_Play';
import Select_Die from './Modal_Main_Content/01_Die_Selection/Select_Die';
import Modal_Button from './Modal_Button';

export default function Modal_Container(): JSX.Element {

  const [header, setheader] = useState<string>("How to play");
  const [main, setMain] = useState<JSX.Element>(<How_To_Play/>);
  const [btnTxt, setBtnTxt] = useState<string>("Let's Go!");

  function onClick (): any {
    setheader(()=>"CHOOSE THE DIE");
    setMain((): JSX.Element =><Select_Die/>);
    setBtnTxt((): string => "Continue")
  }

  return (
    <div>
      <header>
        <Modal_Header>
          {header}
        </Modal_Header>
      </header>
      <main>
        {main}
      </main>
      <footer>
        <Modal_Button onClick={onClick}>
          {btnTxt}
        </Modal_Button>
      </footer>
    </div>
  )
}