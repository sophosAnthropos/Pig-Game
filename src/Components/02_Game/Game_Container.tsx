import { useContext } from 'react';
import { DataContext } from '../../Logic/Context/Data_Context';
import { ColumnHeader } from '../Reusable_Components/For_Player_Columns/Column_Header';
import { TurnPoints } from '../Reusable_Components/For_Player_Columns/Column_Points';
import { TotalScore } from '../Reusable_Components/For_Player_Columns/Column_Game_Total';
import { TiDieRes } from "./Title_Die_Reset/Title_And_Reset";
import { DieBtn } from "./Title_Die_Reset/Die_Btn";
import { dataRefTypes } from '../../Interfaces/For_Data_Ref';
import { DPSProvider } from '../../Logic/Context/Die_Points_Scores';

export const GameContainer = (): JSX.Element => {
  
  let {
    current: {
      name: {p1Name, p2Name}, 
      avatar: {index: {p1Index, p2Index}, 
      type: {p1Type, p2Type}}
    }
  }: React.MutableRefObject<dataRefTypes> = useContext(DataContext);


  return (
    <div>
      <DPSProvider>
        <main>
          <section>
            <ColumnHeader name={p1Name} index={p1Index} type={p1Type}/>
            <TurnPoints player={1}/>
            <TotalScore player={1}/>
          </section>
          <section>
            <ColumnHeader name={p2Name} index={p2Index} type={p2Type}/>
            <TurnPoints player={2}/>
            <TotalScore player={2}/>
          </section>
        </main>
        <section>
          <TiDieRes>
            <DieBtn/>
          </TiDieRes>
        </section>
      </DPSProvider>
    </div>
  )
};

