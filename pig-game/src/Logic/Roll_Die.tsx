export const clicked = (rand: number, color: string, face: string, callBack: React.Dispatch<React.SetStateAction<JSX.Element>>) => {
    const dieFaces = `One Two Three Four Five Six`.split(' ');
    callBack( 
        <img 
            src={`../../../Assets/Images/diceFaces/${color}/0${rand}_face${dieFaces[rand]}${color}.png`}
            alt={`${color} die face value ${dieFaces[rand]}`}
        />
    )
    
}