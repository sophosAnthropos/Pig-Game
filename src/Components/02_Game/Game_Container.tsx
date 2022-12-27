import { useContext, useState } from 'react';
import { ColumnHeader } from '../Reusable_Components/For_Player_Columns/Column_Header';
import { TurnPoints } from '../Reusable_Components/For_Player_Columns/Column_Points';
import { TiDieRes } from "./Title_Die_Reset/Title_And_Reset";
import { ScoreBtn } from './Score_Btn/Score_Btn';
import { AppStateContext } from '../../Utilities/Context/App_State_Context';
import { DataContext } from '../../Utilities/Context/Data_Context';
import { BtnContent } from './Score_Btn/btn_content';
import { Column } from '../Reusable_Components/For_Player_Columns/Column';
import { ScoreContainer } from '../Reusable_Components/For_Player_Columns/Column_Score';
import { DieBtn } from './Title_Die_Reset/Die_Btn';
import { dieClick, scoreClick } from '../../Utilities/Logic/Score_And_Die_Click';






let turn = 1;
let face = `One Two Three Four Five Six`.split(' ')




export const GameContainer = (): JSX.Element => {

      const dataRef = useContext(DataContext);




      const [die, setDie] = useState(
            <img 
                  src={`../../../src/Assets/Images/diceFaces/${dataRef.current.die.color}/01_faceOne${dataRef.current.die.color}.png`}
                  alt={`${dataRef.current.die.color} die face value One`}
                  className={`gameDie`}
            />
      );




      const {
            p1Points: [p1Points, setP1Points], 
            p2Points: [p2Points, setP2Points], 
            p1Score: [p1Score, setP1Score], 
            p2Score: [p2Score, setP2Score],
            p1Turn: [playerOne, setP1Turn],
            p2Turn: [playerTwo , setP2Turn],
      } = useContext(AppStateContext);




      return (
            <div className='fullContainers flex sm:gameLaptop'>
                        
                  <Column player={1} yourTurn={playerOne} >
                        <ColumnHeader player={1}/>
                        <TurnPoints player={1}/>
                        <ScoreContainer player={1}>
                              <ScoreBtn 
                                    clickFunc={() => {
                                          scoreClick(1, setP1Score, setP1Turn, setP2Turn, setP1Points, p1Points);
                                          turn = 2
                                    }}
                                    player={1}
                              >
                                    <BtnContent>
                                          {`${p1Score}`}
                                    </BtnContent>
                              </ScoreBtn>
                        </ScoreContainer>
                  </Column>
                  
                  <Column player={2} yourTurn={playerTwo} >
                        <ColumnHeader player={2}/>
                        <TurnPoints player={2}/>
                        <ScoreContainer player={2}>
                              <ScoreBtn 
                                    clickFunc={() => {
                                          scoreClick(2, setP2Score, setP1Turn, setP2Turn, setP2Points, p2Points);
                                          turn = 1
                                    }}
                                    player={2}
                              >
                                    <BtnContent>
                                          {`${p2Score}`}
                                    </BtnContent>
                              </ScoreBtn>
                        </ScoreContainer>
                  </Column>

                  <TiDieRes>
                        <DieBtn 
                              rollDie={() => {
                                    turn = dieClick(
                                          Math.floor((Math.random() * 6) + 1), 
                                          turn, 
                                          setP1Points, 
                                          setP2Points, 
                                          setP1Turn, 
                                          setP2Turn, 
                                          setDie, 
                                          dataRef.current.die.color, 
                                          face
                                    )
                              }}
                        >
                              {die}
                        </DieBtn>
                  </TiDieRes>

            </div>
      )
};

