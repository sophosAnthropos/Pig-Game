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
                <button>
                    <img src="../../../Assets/Images/controlIcons/resetIcon.png" alt="Nuclear mushroom cloud representing the ultimate reset"/>
                </button>
            </section>
        </>
    )
}