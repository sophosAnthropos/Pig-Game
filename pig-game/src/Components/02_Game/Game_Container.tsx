import {useContext} from 'react';
import { DataContext } from '../00_App/App';
import { ColumnHeader } from '../Reusable_Components/For_Player_Columns/Column_Components/Column_Header';
import { TurnPoints } from '../Reusable_Components/For_Player_Columns/Column_Components/Column_Points';
import { TotalScore } from '../Reusable_Components/For_Player_Columns/Column_Components/Column_Game_Total';
import { TiDieRes } from "./Title_Die_Reset/TitleDieReset";
import { DieBtn } from "./Title_Die_Reset/Die_Btn";

export const GameContainer = () => {
  
  let {
    current: {
      name: {p1Name, p2Name}, 
      avatar: {index: {p1Index, p2Index}, 
      type: {p1Type, p2Type}}, 
      turnPoints: {p1Points, p2Points}, 
      totalScore: {p1Score, p2Score}
    }
  } = useContext(DataContext);


  return (
    <div>
      <main>
        <section>
          <ColumnHeader name={p1Name} index={p1Index} type={p1Type}/>
          <TurnPoints points={p1Points}/>
          <TotalScore score={p1Score}/>
        </section>
        <section>
          <ColumnHeader name={p2Name} index={p2Index} type={p2Type}/>
          <TurnPoints points={p2Points}/>
          <TotalScore score={p2Score}/>
        </section>
      </main>
      <section>
        <TiDieRes>
          <DieBtn/>
        </TiDieRes>
      </section>
    </div>
  )
};

