import { useContext } from 'react';
import { DataContext } from '../../Utilities/Context/Data_Context';
import { ResetBtn } from '../Reusable_Components/Reset_Button/Reset_Button';

export const WinnerScreen = () => {
    const dataRef = useContext(DataContext)

    return (
        <>
            <header>
                <h1>
                    {`${dataRef.current.winner.toUpperCase()} IS VICTORIOUS`}
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