import React from 'react'

export default function UniqueAspects() {
  const backgroundColors = ['#FADBD7', '#DAF0E3', '#E3DDF2'];
  return (
    <div className='mt-20'>
      <h2 className=' font-medium text-4xl xl:text-5xl m-auto max-w-lg  text-center'>The Unique Aspects of Dubballup</h2>
      {backgroundColors.map((bgColor, index) => (
        <div key={index} className='px-8Pa1 md:px-12 xl:px-0  flex flex-col md:flex-row md:justify-around items-center mt-16 gap-7'>
          <div>
            <h3 className='font-medium text-2xl xl:text-3xl max-w-sm '>Matched to you and your customers.</h3>
            <p className='text-[#757575] max-w-md break-words font-light text-lg'>
              Lorem ipsum dolor sit amet consectetur. Ipsum ut gravida consequat elementum nunc in.
              Libero facilisis faucibus ut condimentum etiam elit. Amet adipiscing eu urna venenatis a et in eget.
              Sed nullam non suspendisse lectus non vulputate.
            </p>
          </div>
          <div className={` w-[320px] sm:w-[450px] h-[500px] rounded-lg`} style={{ backgroundColor: bgColor }}></div>
        </div>
      ))}
    </div>
  )
}
