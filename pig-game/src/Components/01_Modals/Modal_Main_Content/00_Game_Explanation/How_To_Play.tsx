import React from 'react';
import Jack_Sparrow from '../../../../Assets/Images/Jack/Jack_Sparrow.png'

export default function How_To_Play(){
  return (
    <>
        <p>
            Get your TOTAL SCORE from 0️⃣ to 💯 before your opponent does.
        </p>
        <p>            
            Start of every turn: POINTS STREAK = 0️⃣.
        </p>
        <p>
            Click on the 🎲 to roll.
        </p>
        <p>
            Roll a 1️⃣: streak resets to 0️⃣ and the turn ends.
        </p>
        <p>
            Roll 2️⃣➡6️⃣: Streak increases by the amount rolled.
        </p>
        <p>
            Roll again or hold & add streak to Total Score.
        </p>
        <div>
            <img 
                src={Jack_Sparrow} 
                alt='Jack Sparrow'
            />
            <p>Savvy?</p>
        </div>
    </>
  )
}

