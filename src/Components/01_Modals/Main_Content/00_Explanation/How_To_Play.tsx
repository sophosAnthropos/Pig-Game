import Jack_Sparrow from '../../../../Assets/Images/Jack/Jack_Sparrow.png'

export const How_To_Play = (): JSX.Element => {
  return (
    <div className={`w-full h-full px-5`}>
        <ul className={`w-full h-4/5 pl-4 pt-6 list-disc`}>
            <li className={`h2PTxt h2PList`}>
                Get your TOTAL SCORE from 0️⃣ to 💯 before your opponent does.
            </li>
            <li className={`h2PTxt h2PList`}>            
                Start of every turn: POINTS STREAK = 0️⃣.
            </li>
            <li className={`h2PTxt h2PList`}>
                Click on the 🎲 to roll.
            </li>
            <li className={`h2PTxt h2PList`}>
                Roll a 1️⃣: streak resets to 0️⃣ and the turn ends.
            </li>
            <li className={`h2PTxt h2PList`}>
                Roll 2️⃣➡6️⃣: Streak increases by the amount rolled.
            </li>
            <li className={`h2PTxt h2PList`}>
                Roll again or hold & add streak to Total Score.
            </li>
        </ul>
        <div className={`flex justify-center items-start w-full h-1/5`}>
            <p 
                className={`
                    w-1/4 h-1/2 text-white h2PTxt flex justify-center items-center border-blue-400 rounded-t-3xl rounded-bl-3xl  border-solid border-4 bg-stone-800 bg-opacity-80

                    sm:w-1/6
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

