import { How_To_Play } from "../Components/01_Modals/Modal_Main_Content/00_Game_Explanation/How_To_Play";
import { Select_Die } from "../Components/01_Modals/Modal_Main_Content/01_Die_Selection/Select_Die";
import { PlayersInputs } from "../Components/01_Modals/Modal_Main_Content/02_Players_Inputs/Player_Inputs";

// Interfaces for modalPhaseStates Obj, which is used to provide a set of properties to pass to the State Setter in Modal_Container TSX File.
// In Modal_Container TSX file the Obj entries will be used by the modal's btn to conditionally change the state of the modal. States are represented by phases: initial, secondary, & final.

///////////////// Phase Naming //////////////////////
// Initial Phase - modal first pops up on page load, rendering the how to play content, & the btn renders Secondary phase content.
// Secondary Phase - renders a die color selector grid, & the btn renders Final phase content. 
// Final Phase - renders 2 input fields & img arrays, & the btn passes input to gameData Ref Obj for game components & close modal.

interface modSta {
    header: string,
    main: JSX.Element,
    BtnTxt: string
}


interface modPhases {
    initial: modSta,
    secondary: modSta,
    final: modSta
}

export const modalPhaseStates: modPhases = {
    initial: {
        header: `How To Play`,
        main: <How_To_Play/>,
        BtnTxt:`Let's Go!`
    },
    secondary: {
        header: `CHOOSE A DIE`,
        main: <Select_Die/>,
        BtnTxt:`Continue`
    },
    final: {
        header: `ENTER NAME & CHOOSE AVATARS`,
        main: <PlayersInputs/>,
        BtnTxt:`Let's Play!`
    },
};

