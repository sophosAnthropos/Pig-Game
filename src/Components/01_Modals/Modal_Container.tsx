import { useContext } from 'react';
import { AppStateContext } from '../../Utilities/Context/App_State_Context';


export const ModalContainer = (): JSX.Element => {

  const {modal: [current], onClick} = useContext(AppStateContext) 
  // onClick for btn below to switch modal phases, close modal, pass player data, and start game
  
  const {header, main, BtnTxt} = current  
  //Extraction of state for use in JSX body below
  
  return (
    <div className='modalSize flex justify-between items-center flex-col sm:rounded-2xl shadow-xl shadow-blue-700'>
        <header className='flex justify-center items-center w-full h-tenth bg-fuchsia-600 bg-opacity-80 sm:rounded-t-2xl'>
            <h2 className='text-center text-yellow-300 text-opacity-100 text-4xl font-bold'>
              {header}
            </h2>
        </header>
        <main 
          className='w-full h-3/4 flex flex-col justify-center items-center  bg-yellow-200 bg-opacity-95'
        >
            {main}
        </main>
        <footer className='w-full h-btnCon flex justify-center items-center bg-fuchsia-600 bg-opacity-80 sm:rounded-b-2xl'>
            <button 
                className='
                transition ease-out 
                w-1/3 h-3/5 
                rounded-2xl
                text-yellow-200 text-opacity-100 font-bold text-xl
                border-modalBBY  border-t-modalBB1 border-l-modalBB1 border-b-modalBB2 border-r-modalBB2
                bg-gray-600 bg-opacity-80 cursor-pointer
                hover:shadow-modBtnHov hover:bg-yellow-200 hover:bg-opacity-100 hover:scale-x-[.98] hover:scale-y-[.98] hover:border-modalBBLY hover:text-blue-500 hover:text-opacity-100
                duration-300'
                onClick={onClick}
            >
                {BtnTxt}
            </button>
        </footer>
    </div>
  )
}