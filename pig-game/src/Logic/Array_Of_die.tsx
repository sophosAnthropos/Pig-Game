export default function () {

    const dieColorArray: string[] = ['Black', 'Blue', 'Green', 'Orange', 'Pink', 'Purple', 'Red', 'Yellow', 'Random'];

    const dieImgArray: Array<JSX.Element> = dieColorArray.map<JSX.Element>((color: string) => 
        <img
             src={`../src/Assets/Images/diceFaces/${color}/01_faceOne${color}.png`} 
             alt={`Face with a value of one from a ${color} die`} 
             key={`${color}${String(dieColorArray.indexOf(color))}`}
        />
    )

    return dieImgArray
}