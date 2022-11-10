export const TotalScore = ({score}: {score: number}) => {
    return (
        <section>
            <div>
                <article>
                    <p>
                        Click This = Save Points
                    </p>
                </article>
                <article>
                    <p>
                        {`${score}`}
                    </p>
                </article>
            </div>
        </section>
    )
}