import { turnStyles } from "../../../Utilities/Types/Types_And_Inits"

export const Column = ({children, player, yourTurn: {turn, backGround}}: {children: JSX.Element[], player: number, yourTurn: turnStyles}) => {

  return (
    <section
        className={`
          w-[1/2] h-full ${turn}
          
          ${player === 1 ? `sm:rounded-tl-[60px] sm:rounded-bl-[60px]` : `sm:rounded-tr-[60px] sm:rounded-br-[60px]`} 
          sm:w-[48%] sm:h-[90%] sm:flex sm:justify-center sm:items-center
            
        `}
    >
      <div
          className={`
              h-full ${backGround} flex justify-start

              sm:w-[97%] sm:h-[98%] sm:relative sm:z-[600]
              ${player === 1 ? `sm:rounded-tl-[50px] sm:rounded-bl-[50px]` : `sm:rounded-tr-[50px] sm:rounded-br-[50px] sm:justify-end`}
          `}
      >

        <div
            className={`
                h-full sm:w-3/5 sm:min-w-[240px] flex flex-col
            `}
        >
          
          {children}

        </div>

      </div>
    </section>
  )
}