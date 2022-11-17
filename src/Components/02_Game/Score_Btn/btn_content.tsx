export const BtnContent = ({children}: {children: string}) => {
  return (
    <>
        <article className='w-full h-1/2'>
            <p className='h-1/2 btnContent'>
                    Click This
            </p>
            <p className='h-1/2 btnContent'>
                    Saves Points
            </p>
        </article>
        <article className='w-full h-1/2 flex justify-center'>
            <p 
                    className={`w-2/5 h-full flex justify-center items-center scoreNumTxt transition ease-linear group-hover/btn:scoreNumTxtInv duration-150`}
            >
                    {children}
            </p>
        </article>
    </>
  )
}

