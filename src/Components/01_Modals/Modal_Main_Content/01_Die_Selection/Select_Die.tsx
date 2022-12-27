import { imgArrMaker } from '../../../../Utilities/Logic/Array_Of_Images'

export const Select_Die = (): JSX.Element => {
  
    const [Black, Blue, Green, Orange, Pink, Purple, Red, Yellow, Random] = imgArrMaker(0);

    return (
        <div 
            className={`
                selectDie sm:border-t-4 sm:border-l-4 sm:border-neutral-600 sm:bg-blue-400 sm:rounded-[1rem] sm:shadow-dieModEdges sm:my-3
            `}
        >
            <div className='diceRows'>
                {Black}
                {Blue}
                {Green}
            </div>
            <div className='diceRows'>
                {Orange}
                {Pink}
                {Purple}
            </div>
            <div className='diceRows'>
                {Red}
                {Yellow}
                {Random}
            </div>
        </div>
    )
}

