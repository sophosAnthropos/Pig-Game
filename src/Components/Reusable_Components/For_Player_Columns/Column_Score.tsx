export const ScoreContainer = ({children, player}: {children: JSX.Element, player: number}) => {
  return (
    <section
        className={`
            scoreMobile ${player === 1 ? `left-0` : `right-0`}
            
            sm:w-full sm:scoreLaptop sm:relative sm:bg-transparent sm:flex sm:border-none
        `}
    >
        {children}
    </section>
  )
}