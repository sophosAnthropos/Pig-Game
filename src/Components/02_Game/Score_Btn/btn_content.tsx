export const BtnContent = ({children}: {children: string}) => {
  return (
    <>
        <article 
                className={`
                        w-full h-1/3 headings sm:h-1/2 sm:pt-0
                `}
        >
            <p 
                className={`
                        scoreTxtMobile
                        
                        sm:scoreTxtLaptop sm:flex sm:justify-center sm:items-end sm:group-hover/btn:text-blue-500
                `}
            >
                    Click This
            </p>
            <p className={`scoreTxtMobile sm:scoreTxtLaptop sm:flex sm:justify-center sm:items-start sm:group-hover/btn:text-blue-500`}>
                    Saves Points
            </p>
        </article>
        <article 
                className={`
                        w-full h-1/3  sm:h-1/2 flex justify-center
                `}
        >
            <p 
                    className={`
                        scoreNumTxt scoreNumMobile headings

                        sm:w-full sm:h-full sm:flex sm:justify-center sm:items-center sm:scoreNumLaptop sm:group-hover/btn:scoreHover
                    `}
            >
                    {children}
            </p>
        </article>
    </>
  )
}

