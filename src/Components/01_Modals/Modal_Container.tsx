import { useContext } from 'react';
import { AppStateContext } from '../../Utilities/Context/App_State_Context';


export const ModalContainer = (): JSX.Element => {

  const {modal: [current], onClick} = useContext(AppStateContext) 
  // onClick for btn below to switch modal phases, close modal, pass player data, and start game
  
  const {header, main, BtnTxt} = current  
  //Extraction of state for use in JSX body below
  
  return (
    <div 
      className={`
        modalSize flex justify-between items-center flex-col headings sm:border-r-4 sm:border-b-4 sm:border-neutral-600 shadow-xl shadow-blue-700 
        
        sm:rounded-2xl
      `}
    >
        <header 
          className={`
              flex justify-center items-center w-full h-[12.5%] bg-fuchsia-600  
              
              sm:h-[12%] sm:rounded-t-2xl
            `}
        >
            <h2 
              className={`
                text-center text-yellow-200 text-opacity-100 mobileH2 font-bold
              `}
            >
              {header}
            </h2>
        </header>
        <main 
          className={`
            w-full h-3/4 flex flex-col justify-center items-center bg-yellow-200 bg-opacity-95 

            sm:h-[73%]
          `}
        >
            {main}
        </main>
        <footer 
          className={`
            w-full h-[12.5%] flex justify-center items-center bg-neutral-800 
            
            sm:h-[15%] sm:rounded-b-2xl sm:bg-fuchsia-600
          `}
        >
            <button 
                className={`
                  w-full h-full bg-fuchsia-600 modalBtnTxt-mobile outline-none transition ease-linear active:bg-fuchsia-800 active:scale-[.95] active:shadow-inner duration-[15ms] cursor-pointer

                  sm:w-1/3 sm:h-2/3 sm:rounded-2xl sm:modalBtnTxt-laptop sm:font-bold sm:border-modalBBY sm:border-t-modalBB1 sm:border-l-modalBB1 sm:border-b-modalBB2 sm:border-r-modalBB2 sm:bg-gray-600 sm:bg-opacity-80 sm:transition sm:ease-out sm:hover:bg-yellow-200 sm:hover:text-blue-500 sm:hover:text-opacity-100 sm:hover:shadow-modBtnHov sm:active:shadow-modBtnAct sm:hover:bg-opacity-100 sm:active:scale-x-[.98] sm:active:scale-y-[.98] sm:active:border-modalBBLY 
                  sm:duration-150
                `}
                onClick={onClick}
            >
                {BtnTxt}
            </button>
        </footer>
    </div>
  )
}