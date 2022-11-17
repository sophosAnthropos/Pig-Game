import Jack_Sparrow from '../../../../Assets/Images/Jack/Jack_Sparrow.png'

export const How_To_Play = (): JSX.Element => {
  return (
    <>
        <ul className='w-full h-4/5 border-solid'>
            <li className='paraEl'>
                Get your TOTAL SCORE from 0️⃣ to 💯 before your opponent does.
            </li>
            <li className='paraEl'>            
                Start of every turn: POINTS STREAK = 0️⃣.
            </li>
            <li className='paraEl'>
                Click on the 🎲 to roll.
            </li>
            <li className='paraEl'>
                Roll a 1️⃣: streak resets to 0️⃣ and the turn ends.
            </li>
            <li className='paraEl'>
                Roll 2️⃣➡6️⃣: Streak increases by the amount rolled.
            </li>
            <li className='paraEl'>
                Roll again or hold & add streak to Total Score.
            </li>
        </ul>
        <div className='flex justify-center items-start w-full h-1/5'>
            <p className='w-1/6 h-1/2 text-blue-400 text-2xl font-bold flex justify-center items-center border-blue-400 rounded-t-3xl rounded-bl-3xl  border-solid border-4 bg-stone-800 bg-opacity-70'>Savvy?</p>
            <img 
                className='h-full'
                src={Jack_Sparrow} 
                alt='Jack Sparrow'
            />
        </div>
    </>
  )
}

