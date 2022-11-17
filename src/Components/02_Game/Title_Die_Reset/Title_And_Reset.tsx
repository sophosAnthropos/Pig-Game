import { ResetBtn } from "../../Reusable_Components/Reset_Button/Reset_Button";

export const TiDieRes = ({children}: {children : JSX.Element}) => {

    return (
        <>
            <section className="h-1/5">
                <article className="h-3/5 flex justify-center">
                    <h1 className="w-1/2 h-full flex justify-center items-center text-yellow-300 text-[5rem] font-bold">
                        PIG!
                    </h1>
                </article>
                <article className="h-1/3 flex justify-center">
                    <p className="w-2/3 h-full flex justify-center items-center titleTxt">
                        Oink Oink!
                    </p>
                </article>
            </section>
            <section className="h-1/2 flex justify-center items-end">
                {children}
            </section>
            <section className="h-[30%] flex flex-col justify-center items-center">
                <ResetBtn/>
                <p className="resetTxt">
                    RESET
                </p>
            </section>
        </>
    )
}