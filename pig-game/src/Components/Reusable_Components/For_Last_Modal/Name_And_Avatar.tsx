import React from "react";
import { pigImgArray } from "../../../Logic/Array_Of_Images";

export default function NamesAndAvatars (): JSX.Element {
    return (
        <div>
            <form>
                <input type="name" name="name"/>
            </form>
            <div>
                {pigImgArray}
            </div>
        </div>
    )
};