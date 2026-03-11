import React from 'react'

const New = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#0a0a0a] border border-[#39ff1433]  rounded-xl
      hover:shadow-[0_0_5px_#00f2ff] hover:scale-102 transition-all duration-150 cursor-pointer'>
        <div className='flex justify-between item-center'>
            <h3 className='bg-[#ff073a22] text-[#ff073a] text-sm px-4 py-1 rounded-full 
          border border-[#ff073a55]'>{data.category}</h3>
            <h4 className='text-gray-400 text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-bold text-[#00f2ff]'>{data.title}</h2>
        <p className='text-sm mt-3 text-gray-400 leading-relaxed'>{data.description}</p>

        <div className='flex gap-3 mt-6'>

        <button className='w-full py-2 rounded-lg text-sm font-medium
        bg-[#39ff1422] text-[#39ff14] border border-[#39ff1455]
        hover:shadow-[0_0_5px_#39ff14] hover:scale-102 transition-all duration-150'>
          ✔ Completed
        </button>

        <button className='w-full py-2 rounded-lg text-sm font-medium
        bg-[#ff073a22] text-[#ff073a] border border-[#ff073a55]
        hover:shadow-[0_0_5px_#ff073a] hover:scale-102 transition-all duration-150'>
          ✖ Failed
        </button>

      </div>
      </div>
  )
}

export default New