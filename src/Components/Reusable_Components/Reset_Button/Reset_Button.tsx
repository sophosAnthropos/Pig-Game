import { useContext } from 'react';
import { DataContext } from '../../../Utilities/Context/Data_Context';
import { AppStateContext } from '../../../Utilities/Context/App_State_Context';
import { ModalContainer } from '../../01_Modals/Modal_Container';
import { modalPhaseStates } from '../../../Utilities/Types/Types_And_Inits';


export const ResetBtn = (): JSX.Element => {

    const dataRef = useContext(DataContext);

    const { app: [,setAppState], modal: [, setModalState], p1Points: [, setP1Points], p2Points: [, setP2Points], p1Score: [, setP1Score], p2Score: [, setP2Score] } = useContext(AppStateContext);

    const { secondary } = modalPhaseStates

    return (
        <button
            onClick={()=> {
                setAppState(<ModalContainer/>);
                setModalState(secondary);
                setP1Points(0);
                setP2Points(0);
                setP1Score(0);
                setP2Score(0);
                dataRef.current = {
                      name: {
                            p1Name: `Player 1`,
                            p2Name: `Player 2`
                      },
                      avatar: {
                            index: {
                                  p1Index: 0,
                                  p2Index: 0
                            },
                            type: {
                                  p1Type: `standard`,
                                  p2Type: `standard`
                            }
                      },
                      die: {
                            color: `Black`,
                            value: 1,
                            face: `One`
                      },
                      winner: `Player`,
                      Arrays: {
                            dieColors: ['Black', 'Blue', 'Green', 'Orange', 'Pink', 'Purple', 'Red', 'Yellow', 'Random'],
                            avatars: [`standard`, `demon`, `fire`, `ice`, `earth`, `shadow`, `ghost`, `iron`, `robo`, `mystery`]
                      }
                };
            }}
        >
            <img src="../../../../src/Assets/Images/controlIcons/resetIcon.png" alt="Nuclear mushroom cloud representing the ultimate reset"/>
        </button>
    )
}