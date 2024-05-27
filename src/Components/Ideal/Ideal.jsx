import React from 'react'
import icon from "../../assets/Vector.svg"

import Cart from '../Cart/Cart'

export default function Ideal() {
    return (
        <div>
            <div className='mt-20 flex justify-center'>
                <button className=' bg-white text-[#383838]  font-medium border flex items-center text-lg py-1 px-1 rounded-md'><img src={icon} alt="icon" className='me-2' />Audience</button>
            </div>
            <h2 className='m-auto max-w-sm text-4xl text-center mt-6'>Ideal for everyone, but especially for </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {Array.from({ length: 6 }).map((_, index) => (
                    <Cart key={index} />
                ))}
            </div>
        </div>
    )
}
