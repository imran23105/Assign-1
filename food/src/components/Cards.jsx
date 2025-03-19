import React from 'react'


const Cards = ({food2}) => {
  return (
    <div className='p-5'>
            <div className='p-2'>
                <img src={food2.image} alt="" className='border rounded-xl relative' />
                <p className='font-bold'>{food2.name}</p>
                <p className='text-[14px] '>{food2.price}</p>
                <button className='bg-green-400 p-2 border rounded-lg absolute my-[-100px] mx-[100px]'>ADD ME</button>
            </div>
    </div>
  )
}

export default Cards