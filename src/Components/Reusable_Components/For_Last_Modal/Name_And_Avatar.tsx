import { useContext } from 'react';
import { DataContext } from '../../../Logic/Context/Data_Context';

export const NamesAndAvatars =  ({children, player}: {children: JSX.Element[], player: string}): JSX.Element => {
    
    let {current: {name: {p1Name, p2Name}}} = useContext(DataContext)

    return (
        <div>
            <div>
                <h3>
                    {player}
                </h3>
            </div>
            <form>
                <input
                    type="name" 
                    name="name" 
                    placeholder='Enter Any Name You Choose' 
                    onChange={(e)=>{
                            e.preventDefault
                        player === `PLAYER 1` ? p1Name = e.target.value : p2Name = e.target.value
                    }}
                />
            </form>
            <div>
                {children}
            </div>
        </div>
    )
};