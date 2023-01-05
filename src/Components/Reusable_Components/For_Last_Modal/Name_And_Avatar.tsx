import { useContext } from 'react';
import { DataContext } from '../../../Utilities/Context/Data_Context';

export const NamesAndAvatars =  ({children, player}: {children: JSX.Element[], player: number}): JSX.Element => {
    
    let dataRef = useContext(DataContext)

    return (
        <div 
            className={`
                w-full h-1/2 flex flex-col items-center justify-center 
                
                
                ${player === 1 ? 'sm:border-b-[3px] sm:border-fuchsia-500' : 'sm:border-none'} 
                sm:h-[45%] sm:px-4
            `}
        >
            <div 
                className={`
                    w-full h-2/5 flex flex-col items-center

                    sm:flex-row sm:items-start sm:h-[45%]
                `}
            >
                <h3 
                    className={`
                        w-2/3 h-[45%] flex items-center justify-center text-fuchsia-500 mobileH3
                        
                        sm:w-1/3 sm:h-4/5 sm:font-bold sm:laptopH3
                    `}
                >
                    {player === 1 ? `PLAYER 1` : `PLAYER 2`}
                </h3>
                <form 
                    className={`
                        w-full h-[55%] flex justify-center items-center

                        sm:h-[90%]
                    `}
                >
                    <input
                        type="name" 
                        name="name" 
                        placeholder='Enter Any Name You Wish' 
                        onChange={(e)=>{
                                e.preventDefault
                            player === 1 ? dataRef.current.name.p1Name = `${e.target.value}` : dataRef.current.name.p2Name = `${e.target.value}`
                        }}
                        className={`
                            w-full h-full text-center mobileTxtInput placeholder:nameInputMobile placeholder:text-neutral-500 outline-none border-black 
                            
                            focus:text-fuchsia-400 focus:bg-neutral-800 focus:placeholder:text-fuchsia-200
                            focus:shadow-txtInFocus focus:border-t-2 focus:border-l-2

                            sm:w-[95%] sm:h-2/5 
                            sm:rounded-[50px] sm:bg-blue-400 
                            sm:nameInputLaptop sm:text-center sm:shadow-inner sm:shadow-blue-700
                            sm:placeholder:nameInputLaptop
                            sm:placeholder:text-fuchsia-200
                        `}
                    />
                </form>
            </div>
            <div 
                className={`
                    w-full h-3/5 flex items-center justify-center 

                    sm:h-[45%]
                `}
            >
                <div 
                    className={`
                        w-full h-full bg-blue-400 grid grid-cols-5  items-center justify-items-center px-2

                        sm:w-[95%] sm:h-3/5 sm:rounded-[50px] sm:bg-blue-400 sm:shadow-inner sm:shadow-blue-700 sm:flex sm:justify-around

                        
                    `}
                >
                    {children}
                </div>
            </div>
        </div>
    )
};