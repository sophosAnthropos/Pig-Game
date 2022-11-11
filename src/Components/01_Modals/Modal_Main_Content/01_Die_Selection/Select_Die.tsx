import { imgArrMaker } from '../../../../Logic/Functions/Array_Of_Images'

export const Select_Die = (): JSX.Element => {
  
    const dieImgArray: JSX.Element[] = imgArrMaker(0);

    return (
        <>
            {dieImgArray}
        </>
    )
}

