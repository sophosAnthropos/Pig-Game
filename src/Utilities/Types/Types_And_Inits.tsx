import React from "react";
import { How_To_Play } from "../../Components/01_Modals/Main_Content/00_Explanation/How_To_Play";
import { Select_Die } from "../../Components/01_Modals/Main_Content/01_Die_Selection/Select_Die";
import { PlayersInputs } from "../../Components/01_Modals/Main_Content/02_Players_Inputs/Player_Inputs";



// these types dry up components with possible repeated types as well as avoid having to keep typing common ones
export type jsxStates = [JSX.Element, React.Dispatch<React.SetStateAction<JSX.Element>>];
export type stringStates = [string, React.Dispatch<React.SetStateAction<string>>];
export type numberStates = [number, React.Dispatch<React.SetStateAction<number>>];
export type boolStates = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
export type setJSX = React.Dispatch<React.SetStateAction<JSX.Element>>;
export type setString = React.Dispatch<React.SetStateAction<string>>;
export type setNumber = React.Dispatch<React.SetStateAction<number>>;
export type setBool = React.Dispatch<React.SetStateAction<boolean>>;
export type customJsxComp = () => JSX.Element;



// The interface dataRefTypes, type gDRContext, & gameDataRef Obj are to keep Data_Context.tsx dry & concise. 
// dataRefTypes interface provides the type to gameDataRef Obj below, & the type for gDRContext
export interface dataRefTypes {
    name: {
        p1Name: string,
        p2Name: string,
    },
    avatar: {
        index: {
            p1Index: number,
            p2Index: number,
        },
        type: {
            p1Type: string,
            p2Type: string,
        },
    },
    die: {
        color: string,
        value: number,
        face: string,
    },
    winner: string,
    Arrays: {
        dieColors: Array<string>,
        avatars: Array<string>
    },    
}

// gameDataRef Obj is destructured in Data_Context.tsx initial values for the useRef({...IN HERE})
export const gameDataRef: dataRefTypes = {
    name: {
        p1Name: `Player 1`,
        p2Name: `Player 2`
    },
    avatar: {
        index: {
            p1Index: 0,
            p2Index: 0
        },
        type: {
            p1Type: `standard`,
            p2Type: `standard`
        }
    },
    die: {
        color: `Black`,
        value: 1,
        face: `One`
    },
    winner: `Player`,
    Arrays: {
        dieColors: ['Black', 'Blue', 'Green', 'Orange', 'Pink', 'Purple', 'Red', 'Yellow', 'Random'],

        avatars: [`standard`, `demon`, `fire`, `ice`, `earth`, `shadow`, `ghost`, `iron`, `robo`, `mystery`]
    },
};

// gDRContext is passed as the type for createContext in Data_Context.tsx
export type gDRContext = React.MutableRefObject<dataRefTypes>









// For turn based styling states in App_State_Context.tsx, and seen down below in appAndModalState. 
export interface turnStyles {
    turn: string,
    backGround: string,
}

export type setTurnStyles = React.Dispatch<React.SetStateAction<turnStyles>>

// Interfaces modSta & modPhases used by modalPhaseStates Obj, which is used to provide a set of properties to pass to the State Setter, provided by App_State_Context.tsx, in Modal_Container.tsx.
// In Modal_Container.tsx the Obj entries will be used by the modal's btn to conditionally change the state of the modal. States are represented by phases: initial, secondary, & final.
interface modSta {
    header: string,
    main: JSX.Element,
    BtnTxt: string
}

///////////////// Phase Naming //////////////////////
// Initial Phase - modal first pops up on page load, rendering the how to play content
// Secondary Phase - renders die color selector content 
// Final Phase - renders players' name input and avatar selection content
interface modPhases {
    initial: modSta,
    secondary: modSta,
    final: modSta,
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
        header: `NAMES & AVATARS`,
        main: <PlayersInputs/>,
        BtnTxt:`Let's Play!`
    },
};

// appAndModalState provides type for createContext in App_State_Context.tsx, as well as the init value obj below 
export interface appAndModalStates {
    app: jsxStates,
    modal: [modSta, React.Dispatch<React.SetStateAction<modSta>>],
    p1Points: numberStates,
    p2Points: numberStates,
    p1Score: numberStates
    p2Score: numberStates,
    p1Turn: [turnStyles, React.Dispatch<React.SetStateAction<turnStyles>>],
    p2Turn: [turnStyles, React.Dispatch<React.SetStateAction<turnStyles>>],
    onClick: ()=>void,
}


export const aMSObjDestruct: appAndModalStates = {
    app: [<div/>, (v)=>v],
    modal: [
        {
            header: '', 
            main: <div/>,
            BtnTxt: ''
        }, 
        (v)=>v
    ], 
    p1Points: [0, (v)=>v], 
    p2Points: [0, (v)=>v],  
    p1Score: [0, (v)=>v], 
    p2Score: [0, (v)=>v], 
    p1Turn: [{turn:'', backGround:''}, (v)=>v],
    p2Turn: [{turn:'', backGround:''}, (v)=>v],
    onClick: ()=>console.log(1),
} // provides an initial value for createContext in App_State_Context.tsx




// stateTypes passed as type for createContext in Die_Points_Scores_Context.tsx.
export interface dpsStateTypes {
    die: jsxStates,
    p1Points: numberStates,
    p2Points: numberStates,
    p1Score: numberStates
    p2Score: numberStates
}

