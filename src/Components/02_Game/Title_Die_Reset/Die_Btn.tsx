export const DieBtn = ({children, rollDie}: {children: JSX.Element, rollDie: ()=>void}) => {
  return (
    <button
        onClick={rollDie}
        className={`
            w-[90%] bg-neutral-700 border-l-[1px] border-r-[1px] border-black

            sm:dieBtnLaptop sm:flex sm:justify-center sm:items-center sm:bg-transparent sm:rounded-2xl sm:border-none
            sm:transition sm:ease-linear sm:active:scale-95 sm:duration-[15ms]
        `}
    >
        {children}
    </button>
  )
}