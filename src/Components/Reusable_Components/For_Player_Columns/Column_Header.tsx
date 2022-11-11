
export const ColumnHeader = ({name, index, type}: {name: string, index: number, type: string}): JSX.Element => { 
    return (
        <header>
            <article>
                <h2>{name}</h2>
            </article>
            <article>
                <img src={`../../../../Assets/Images/pigIcon/0${index}_${type}PigIcon.png`} alt={`Pig face icon with ${type} like appearance`}/>
            </article>
        </header>
    )
}