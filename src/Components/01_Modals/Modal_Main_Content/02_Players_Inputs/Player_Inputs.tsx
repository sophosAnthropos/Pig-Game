import { NamesAndAvatars } from "../../../Reusable_Components/For_Last_Modal/Name_And_Avatar";
import { imgArrMaker } from "../../../../Logic/Functions/Array_Of_Images";

export const PlayersInputs = (): JSX.Element => {

    const p1PigImgArray: JSX.Element[] = imgArrMaker(1);
    const p2PigImgArray: JSX.Element[] = imgArrMaker(2);

    return (
        <>
            <NamesAndAvatars player={`PLAYER 1`}>
                {p1PigImgArray}
            </NamesAndAvatars>
            <NamesAndAvatars player={`PLAYER 2`}>
                {p2PigImgArray}
            </NamesAndAvatars>
        </>
    )
}