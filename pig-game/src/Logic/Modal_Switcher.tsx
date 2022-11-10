import How_To_Play from "../Components/01_Modals/Modal_Main_Content/00_Game_Explanation/How_To_Play";
import Select_Die from "../Components/01_Modals/Modal_Main_Content/01_Die_Selection/Select_Die";
import PlayersInputs from "../Components/01_Modals/Modal_Main_Content/02_Players_Inputs/Player_Inputs";


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

