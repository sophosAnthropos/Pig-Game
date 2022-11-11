import { ResetBtn } from "../../Reusable_Components/Reset_Button/Reset_Button";

export const TiDieRes = ({children}: {children : JSX.Element}) => {

    return (
        <>
            <section>
                <article>
                    <h1>
                        PIG!
                    </h1>
                </article>
                <article>
                    <p>
                        Oink Oink!
                    </p>
                </article>
            </section>
            <section>
                {children}
            </section>
            <section>
                <ResetBtn/>
            </section>
        </>
    )
}