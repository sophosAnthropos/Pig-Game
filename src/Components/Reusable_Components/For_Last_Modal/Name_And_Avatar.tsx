import { useContext } from 'react';
import { DataContext } from '../../../Utilities/Context/Data_Context';

export const NamesAndAvatars =  ({children, player}: {children: JSX.Element[], player: number}): JSX.Element => {
    
    let dataRef = useContext(DataContext)

    return (
        <div className={`w-full h-[45%] flex flex-col items-center justify-center border-solid ${player === 1 ? 'border-b-4 border-solid border-fuchsia-500' : 'border-none'}`}>
            <div className='w-full h-[45%] flex'>
                <h3 className='w-1/3 h-3/4 flex items-center justify-center text-fuchsia-500 text-2xl font-bold'>
                    {player === 1 ? `PLAYER 1` : `PLAYER 2`}
                </h3>
                <form className='w-full h-4/5 flex justify-center items-center'>
                    <input
                        type="name" 
                        name="name" 
                        placeholder='Enter Any Name You Wish' 
                        onChange={(e)=>{
                                e.preventDefault
                            player === 1 ? dataRef.current.name.p1Name = `${e.target.value}` : dataRef.current.name.p2Name = `${e.target.value}`
                        }}
                        className='w-[95%] h-2/5 rounded-[50px] bg-blue-400 text-center text-fuchsia-600 font-bold outline-none border-none shadow-inner shadow-blue-700 placeholder:text-fuchsia-200'
                    />
                </form>
            </div>
            <div className='w-full h-[45%] flex flex-col items-center'>
                <div className='w-[95%] h-3/5 rounded-[50px] bg-blue-400 shadow-inner shadow-blue-700 flex justify-around items-center'>
                    {children}
                </div>
            </div>
        </div>
    )
};