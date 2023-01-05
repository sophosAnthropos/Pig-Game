import Jack_Sparrow from '../../../../Assets/Images/Jack/Jack_Sparrow.png'

export const How_To_Play = (): JSX.Element => {
  return (
    <div className={`w-full h-full `}>
        <ul className={`h-4/5 pl-[1.4rem] pt-3 list-disc sm:pl-7 sm:pr-1`}>
            <li className={`h2PTxtMobile h2PList sm:h2PTxtLaptop `}>
                Get your TOTAL SCORE from 0️⃣ to 
                <span className={`h2PTxtMobile text-red-700 font-bold`}> 50 </span> 
                before your opponent does.
            </li>
            <li className={`h2PTxtMobile h2PList sm:h2PTxtLaptop`}>            
                Start of every turn: POINTS STREAK = 0️⃣.
            </li>
            <li className={`h2PTxtMobile h2PList sm:h2PTxtLaptop`}>
                Click on the 🎲 to roll.
            </li>
            <li className={`h2PTxtMobile h2PList sm:h2PTxtLaptop`}>
                Roll a 1️⃣: streak resets to 0️⃣ and the turn ends.
            </li>
            <li className={`h2PTxtMobile h2PList sm:h2PTxtLaptop`}>
                Roll 2️⃣➡6️⃣: Streak increases by the amount rolled.
            </li>
            <li className={`h2PTxtMobile h2PList sm:h2PTxtLaptop`}>
                Roll again or hold & add streak to Total Score.
            </li>
        </ul>
        <div className={`flex justify-center items-start w-full h-1/5`}>
            <p 
                className={`
                    w-1/4 h-1/2 text-white h2PTxtMobile flex justify-center items-center border-blue-400 rounded-t-3xl rounded-bl-3xl  border-solid border-4 bg-stone-800 bg-opacity-80

                    sm:w-1/5 sm:h2PTxtLaptop
                `}
            >
                Savvy?
            </p>
            <img 
                className={`h-full`}
                src={Jack_Sparrow} 
                alt='Jack Sparrow'
            />
        </div>
    </div>
  )
}

