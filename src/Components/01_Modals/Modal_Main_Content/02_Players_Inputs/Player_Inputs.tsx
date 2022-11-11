import { NamesAndAvatars } from "../../../Reusable_Components/For_Last_Modal/Name_And_Avatar";
import { p1PigImgArray, p2PigImgArray } from "../../../../Logic/Array_Of_Images";

export const PlayersInputs = (): JSX.Element => {
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