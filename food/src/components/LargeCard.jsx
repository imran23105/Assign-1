import React from 'react'



const LargeCard = ({food}) => {
  return (
        <div className=' grid grid-cols-2 bg-black text-yellow-50 py-7 border rounded-lg'>
            <div className='p-2'>
                <p className='font-bold'>{food.tittle}</p>
                <p className='text-[14px] '>{food.description}</p>
            </div>
            <div>
                <img src={food.image} alt="" className='h-full w-[300px] border rounded-lg relative' />
                <button className=' bg-green-400 text-black border rounded-lg p-1 absolute  my-[-20px] mx-[150px]'>ADD ME</button>
            
            </div>
        </div>
  )
}

export default LargeCard