import { imgArrMaker } from '../../../../Utilities/Logic/Array_Of_Images'

export const Select_Die = (): JSX.Element => {
  
    const [Black, Blue, Green, Orange, Pink, Purple, Red, Yellow, Random] = imgArrMaker(0);

    return (
        <div className='h-dieRowCon w-[95%] flex flex-col justify-around items-center bg-blue-400 rounded-[2rem] shadow-dieModEdges p-[10px]'>
            <div className='dieOptRow'>
                {Black}
                {Blue}
                {Green}
            </div>
            <div className='dieOptRow'>
                {Orange}
                {Pink}
                {Purple}
            </div>
            <div className='dieOptRow'>
                {Red}
                {Yellow}
                {Random}
            </div>
        </div>
    )
}

