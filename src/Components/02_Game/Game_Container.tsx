import { useContext, useState, useEffect } from 'react';
import { ColumnHeader } from '../Reusable_Components/For_Player_Columns/Column_Header';
import { TurnPoints } from '../Reusable_Components/For_Player_Columns/Column_Points';
import { TiDieRes } from "./Title_Die_Reset/Title_And_Reset";
import { ScoreBtn } from './Score_Btn/Score_Btn';
import { AppStateContext } from '../../Utilities/Context/App_State_Context';
import { DataContext } from '../../Utilities/Context/Data_Context';

let turn = 1;

export const GameContainer = (): JSX.Element => {

      const dataRef = useContext(DataContext);

      const [die, setDie] = useState(
            <img 
                  src={`../../../src/Assets/Images/diceFaces/${dataRef.current.die.color}/01_faceOne${dataRef.current.die.color}.png`}
                  alt={`${dataRef.current.die.color} die face value One`}
            />
      );

      let {p1Points: [p1Points, setP1Points], p2Points: [p2Points, setP2Points], p1Score: [p1Score, setP1Score], p2Score: [p2Score, setP2Score]} = useContext(AppStateContext);

     useEffect(()=>{ if (turn === 1 && p1Points === 0) turn = 2 }, [p1Points]);

     useEffect(()=>{ if (turn === 2 && p2Points === 0) turn = 1 }, [p2Points]);
      
      let face = `One Two Three Four Five Six`.split(' ')

      const rollDie = (rand: number) => {
            switch(turn) {
                  case 1:
                        if(rand === 1) {
                              setP1Points(0);
                        }
                        else {
                              setP1Points((prevPoints)=>prevPoints+rand);
                        }
                        break;
                  case 2:
                        if(rand === 1) {
                              setP2Points(0);
                        }
                        else {
                              setP2Points((prevPoints)=>prevPoints+rand);
                        }
                        break;
                  }
            
                  setDie( 
                  <img 
                        src={`../../../src/Assets/Images/diceFaces/${dataRef.current.die.color}/0${rand}_face${face[(rand-1)]}${dataRef.current.die.color}.png`}
                        alt={`${dataRef.current.die.color} die face value ${face[(rand-1)]}`}
                  />
                  )    
        }

      return (
      <div>
            <main>
                  <section>
                        <ColumnHeader player={1}/>
                        <TurnPoints player={1}/>
                        <section>
                              <ScoreBtn clickFunc={()=>{
                                    setP1Score((prevVal)=>prevVal+p1Points);
                                    setP1Points(0);
                              }}>
                                    <article>
                                          <p>
                                                Click This = Save Points
                                          </p>
                                          </article>
                                          <article>
                                          <p>
                                                {`${p1Score}`}
                                          </p>
                                          </article>
                              </ScoreBtn>
                        </section>
                  </section>
                  <section>
                        <ColumnHeader player={2}/>
                        <TurnPoints player={2}/>
                        <section>
                              <ScoreBtn clickFunc={()=>{
                                    setP2Score((prevVal)=>prevVal+p2Points);
                                    setP2Points(0);
                              }}>
                                    <article>
                                          <p>
                                                Click This = Save Points
                                          </p>
                                          </article>
                                          <article>
                                          <p>
                                                {`${p2Score}`}
                                          </p>
                                          </article>
                              </ScoreBtn>
                        </section>
                  </section>
            </main>
            <section>
                  <TiDieRes>
                        <button onClick={() => rollDie(Math.floor((Math.random() * 6) + 1))}>
                              {die}
                        </button>
                  </TiDieRes>
            </section>
      </div>
      )
};

