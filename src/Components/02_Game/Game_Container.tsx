import { useContext, useState, useEffect } from 'react';
import { ColumnHeader } from '../Reusable_Components/For_Player_Columns/Column_Header';
import { TurnPoints } from '../Reusable_Components/For_Player_Columns/Column_Points';
import { TiDieRes } from "./Title_Die_Reset/Title_And_Reset";
import { ScoreBtn } from './Score_Btn/Score_Btn';
import { AppStateContext } from '../../Utilities/Context/App_State_Context';
import { DataContext } from '../../Utilities/Context/Data_Context';
import { BtnContent } from './Score_Btn/btn_content';

let turn = 1;

export const GameContainer = (): JSX.Element => {

      const dataRef = useContext(DataContext);

      const [die, setDie] = useState(
            <img 
                  src={`../../../src/Assets/Images/diceFaces/${dataRef.current.die.color}/01_faceOne${dataRef.current.die.color}.png`}
                  alt={`${dataRef.current.die.color} die face value One`}
                  className={`gameDie transition ease-linear hover:shadow-inner hover:shadow-neutral-700 hover:scale-[.995] duration-100`}
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
                        className={`gameDie transition ease-linear hover:shadow-inner hover:shadow-neutral-700 hover:scale-[.995] duration-100`}
                  />
                  )    
        }

      return (
            <div className='w-[90%] h-4/5 relative sm:rounded-[50px] shadow-2xl shadow-blue-700'>
                  <main className='w-full h-full flex absolute z-100'>
                        <section className={`playerCol sm:rounded-tl-[50px] sm:rounded-bl-[50px] ${turn === 1 ? 'bg-fuchsia-300' : 'bg-fuchsia-500'}`}>
                              <ColumnHeader player={1}/>
                              <TurnPoints player={1}/>
                              <section
                                    className={`scoreCon1`}
                              >
                                    <ScoreBtn 
                                          clickFunc={()=>{
                                          setP1Score((prevVal)=>prevVal+p1Points);
                                          setP1Points(0);
                                          }}
                                          player={1}
                                    >
                                          <BtnContent>
                                                {`${p1Score}`}
                                          </BtnContent>
                                    </ScoreBtn>
                              </section>
                        </section>
                        <section className={`playerCol sm:rounded-tr-[50px] sm:rounded-br-[50px] ${turn === 2 ? 'bg-fuchsia-300' : 'bg-fuchsia-500'}`}>
                              <ColumnHeader player={2}/>
                              <TurnPoints player={2}/>
                              <section 
                                    className={`scoreCon2`}
                              >
                                    <ScoreBtn 
                                          clickFunc={()=>{
                                          setP2Score((prevVal)=>prevVal+p2Points);
                                          setP2Points(0);
                                          }}
                                          player={2}
                                    >
                                          <BtnContent>
                                                {`${p2Score}`}
                                          </BtnContent>
                                    </ScoreBtn>
                              </section>
                        </section>
                  </main>
                  <section className={`w-1/3 h-full absolute z-10 left-1/2 translate-x-[-50%]`}>
                        <TiDieRes>
                              <button 
                                    onClick={() => rollDie(Math.floor((Math.random() * 6) + 1))}
                                    className={`w-[65%] h-[90%] flex justify-center items-center bg-blue-400 rounded-2xl shadow-inner shadow-blue-700`}
                              >
                                    {die}
                              </button>
                        </TiDieRes>
                  </section>
            </div>
      )
};

