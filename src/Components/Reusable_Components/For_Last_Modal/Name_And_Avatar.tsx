import { useContext } from 'react';
import { DataContext } from '../../../Utilities/Context/Data_Context';

export const NamesAndAvatars =  ({children, player}: {children: JSX.Element[], player: number}): JSX.Element => {
    
    let dataRef = useContext(DataContext)

    return (
        <div>
            <div>
                <h3>
                    {player === 1 ? `PLAYER 1` : `PLAYER 2`}
                </h3>
            </div>
            <form>
                <input
                    type="name" 
                    name="name" 
                    placeholder='Enter Any Name You Wish' 
                    onChange={(e)=>{
                            e.preventDefault
                        player === 1 ? dataRef.current.name.p1Name = `${e.target.value}` : dataRef.current.name.p2Name = `${e.target.value}`
                    }}
                />
            </form>
            <div>
                {children}
            </div>
        </div>
    )
};