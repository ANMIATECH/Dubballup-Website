import React from 'react'
import img from '../../assets/image.svg'

export default function AboutUs() {
    const items = Array.from({ length: 6 });
    return (
        <div className='mt-20'>
            <h2 className='font-medium text-4xl xl:text-5xl m-auto max-w-xl text-center   '>What people are saying about us!</h2>
            <p className='text-[#AFAFAF] font-medium text-center my-3 break-words'>Lorem ipsum dolor sit amet consectetur. Tellus non neque mattis eleifend volutpat. Tellus leo arcu.</p>
            <div className='mt-16  grid grid-cols-1 md:grid-cols-3  mx-auto w-fit gap-6 '>
            {items.map((_, index) => (
        <div key={index} className='bg-gray-50 px-6 py-4 w-fit rounded-lg border-t-[1.5px]'>
          <div className='flex'>
            <div><img src={img} alt="image" /></div>
            <div className='ml-2'>
              <h2 className='text-gray-600 font-medium'>Jeremy MCPeak</h2>
              <a className='text-[#4BB6F0] font-medium' href="#" target="_blank" rel="noopener noreferrer">@jumcpeak</a>
            </div>
          </div>
          <div>
            <p className='max-w-[360px] break-words font-semibold text-gray-500'>
              I just received an invite to <a className='text-[#4BB6F0] font-medium' href="#" target="_blank" rel="noopener noreferrer">@reflectnotes</a>, and holy crap! It is well thought out, and I can see this being my note-taking platform going forward. Well done! I'm looking forward to seeing how the app progresses.
            </p>
          </div>
        </div>
      ))}
            </div>
        </div>
    )
}
