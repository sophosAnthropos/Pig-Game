import { ResetBtn } from "../../Reusable_Components/Reset_Button/Reset_Button";

export const TiDieRes = ({children}: {children : JSX.Element}) => {

    return (
        <section 
            className={`
                w-1/3 h-full absolute z-[800] left-1/2 translate-x-[-50%] sm:h-[90%]
            `}
        >
            <section 
                className={`
                    w-[304%] bg-neutral-700 absolute top-[-.2%] left-[-104%] flex justify-center border-b-2 border-black

                    sm:w-full sm:h-1/4 sm:relative sm:top-0 sm:left-0 sm:bg-transparent sm:flex-col sm:border-none
                `}
            >
                <article 
                    className={`w-1/2 sm:w-full sm:h-2/3 sm:flex sm:justify-center`}
                >
                    <h1 
                        className={` 
                            flex justify-center items-center text-yellow-300 mobileH1 headings
                            
                            sm:w-1/2 sm:h-full sm:laptopH1
                        `}
                    >
                        PIG!
                    </h1>
                </article>
                <article className={`w-1/2 sm:w-full sm:h-1/3 sm:flex sm:justify-center`}>
                    <h2 
                        className={`
                            h-full oinkMobile mobileH2 flex justify-center items-center numbers

                            sm:w-full sm:h-full sm:laptopH2 sm:oinkLaptop
                        `}
                    >
                        Oink Oink!
                    </h2>
                </article>
            </section>
            <section 
                className={`
                    w-[101%] h-[17%] bg-neutral-700 absolute bottom-0 left-[-1px] flex justify-center border-t-2 border-black

                    sm:w-full sm:h-1/2 sm:relative sm:items-center sm:bg-transparent sm:border-none
                `}
            >
                {children}
            </section>
            <section 
                className={`
                    h-full flex justify-center items-end

                    sm:h-1/4 sm:items-center
                `}
            >
                <ResetBtn/>
            </section>
        </section>
    )
}