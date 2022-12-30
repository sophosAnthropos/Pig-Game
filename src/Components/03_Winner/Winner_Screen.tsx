import { useContext } from 'react';
import { DataContext } from '../../Utilities/Context/Data_Context';
import { ResetBtn } from '../Reusable_Components/Reset_Button/Reset_Button';

export const WinnerScreen = () => {
    const {
        current: {
            name: {p1Name, p2Name}, 
            avatar: {
                index: {p1Index, p2Index},
                type: {p1Type, p2Type}
            },
            winner, 
        }
    } = useContext(DataContext)



    let [pigIndex, pigType]: [number, string] = [0, 'standard']

    if (winner === p1Name) {
        pigIndex = p1Index;
        pigType = p1Type;
    }
    else if (winner === p2Name) {
        pigIndex = p2Index;
        pigType = p2Type;
    }

    return (
        <div
            className={`
                 h-full

                 sm:modalLaptop sm:rounded-[50px] sm:player1Column sm:flex sm:justify-center sm:items-center
            `}
        >
            <div
                className={`
                    w-full h-full bg-fuchsia-600 flex flex-col justify-end

                    sm:w-[98%] sm:h-[98%] sm:rounded-[50px] sm:absolute sm:z-[200]
                `}
            >
                <header
                    className={`
                        h-[29%]
                    `}
                >
                    <h1
                        className={`
                            h-1/2 flex justify-center items-end headings mobileH1 oinkMobile

                            sm:h-2/3 sm:winnersNameLaptop
                        `}
                    >
                        {`${winner.toUpperCase()}`}
                    </h1>
                    <h2
                        className={`
                            h-1/3 flex justify-center items-end headings winnerMobile oinkMobile text-opacity-100

                            sm:winnerLaptop sm:items-start
                        `}
                    >
                        {`IS VICTORIOUS`}
                    </h2>
                </header>
                <div
                    className={`
                        h-[40%] flex flex-col justify-center items-center
                    `}
                >
                    <img 
                        src={`../../../src/Assets/Images/winner/0${pigIndex}_${pigType}Winner.png`}

                        className={` 
                            kingPigMobile
                            sm:kingPigLaptop
                        `}
                    />
                    <p
                        className={`
                            w-full h-1/6 hailTxtMobile flex justify-center items-start headings royalColors

                            sm:hailTxtLaptop

                        `}
                    >
                        HAIL TO THE KING!
                    </p>
                </div>
                <section
                    className={`
                        h-[29%] flex justify-center items-center
                    `}
                >
                    <ResetBtn phase={2} />
                </section>    
            </div>
        </div>
    )
}