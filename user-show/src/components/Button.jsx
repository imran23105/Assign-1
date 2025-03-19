import React from 'react'

const Button = () => {
  return (
    <div>
        <div className="flex justify-between items-center bg-black  p-4">
                
                <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-red-500">+ Register</button>
                <button className="bg-white text-black  px-3 py-1 rounded">Export</button>
                <button className="bg-white text-black px-3 py-1 rounded">Lay Out</button>
              </div>
    </div>
  )
}

export default Button