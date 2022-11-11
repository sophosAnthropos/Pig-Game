import React, {useContext} from 'react';
import {DataContext} from '../00_App/App';
import { ResetBtn } from '../Reusable_Components/Reset_Button/Reset_Button';

export const WinnerScreen = () => {
    const {current: {winner}} = useContext(DataContext)

    return (
        <>
            <header>
                <h1>
                    {`${winner.toUpperCase} IS VICTORIOUS`}
                </h1>
            </header>
            <div>
                
            </div>
            <section>
                <ResetBtn/>
            </section>
        </>
    )
}