// import React from 'react'

// const Accept = () => {
//   return (
//     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gray-500 rounded-xl'>
//         <div className='flex justify-between item-center'>
//             <h3 className='bg-gray-600 text-sm px-5 py-1 rounded'>High</h3>
//             <h4 className='text-sm'> 20 feb 2024</h4>
//         </div>
//         <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
//         <p className='text-sm mt-2'>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sint aliquam est reprehenderit ratione, 
//             animi voluptates dolores fuga voluptate laborum molestiae officia ab asperiores quis quisquam sunt 
//             facilis praesentium unde.
//             </p>
//             <div className='flex items-center justify-end gap-3 mt-5'>
//                 <button className='bg-gray-500 py-3 hover:bg-gray-700 px-5 rounded text-sm mt-4 w-full'>Mark as Completed</button>
//                 <button className='bg-gray-500 py-3 hover:bg-gray-700 px-5 rounded text-sm mt-4 w-full'>Mark as Failed</button>
//             </div>
//         </div>
//   )
// }

// export default Accept

// import React from 'react'

// const Accept = () => {
//   return (
//     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#0a0a0a] 
//     border border-[#00f2ff33] rounded-xl 
//    '>

//       {/* Top Section */}
//       <div className='flex justify-between items-center'>
//         <h3 className='bg-[#ff073a22] text-[#ff073a] text-sm px-4 py-1 rounded-full 
//         border border-[#ff073a55]'>
//           High
//         </h3>

//         <h4 className='text-gray-400 text-sm'>
//           20 Feb 2024
//         </h4>
//       </div>

//       {/* Title */}
//       <h2 className='mt-5 text-2xl font-bold text-[#00f2ff] '>
//         Make a Youtube Video
//       </h2>

//       {/* Description */}
//       <p className='text-sm mt-3 text-gray-400 leading-relaxed'>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sint aliquam est reprehenderit ratione, 
//         animi voluptates dolores fuga voluptate laborum molestiae officia ab asperiores quis quisquam sunt 
//         facilis praesentium unde.
//       </p>

//       {/* Buttons */}
//       <div className='flex items-center justify-between gap-3 mt-6'>

//         {/* Completed */}
//         <button className='w-full py-2 rounded-lg text-sm font-medium
//         bg-[#39ff1422] text-[#39ff14] border border-[#39ff1455]
//         hover:shadow-[0_0_12px_#39ff14] hover:scale-105 transition-all duration-300'>
//           ✔ Completed
//         </button>

//         {/* Failed */}
//         <button className='w-full py-2 rounded-lg text-sm font-medium
//         bg-[#ff073a22] text-[#ff073a] border border-[#ff073a55]
//         hover:shadow-[0_0_12px_#ff073a] hover:scale-105 transition-all duration-300'>
//           ✖ Failed
//         </button>

//       </div>
//     </div>

//   )
// }

// export default Accept

// import React from 'react'

// const Accept = ({data}) => {
//   console.log();
//   return (
//     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#0a0a0a] 
//     border border-[#00f2ff33] rounded-xl 
//     flex flex-col justify-between 
//      hover:shadow-[0_0_5px_#ffaa00] hover:scale-102 transition-all duration-150 cursor-pointer '>

//       {/* TOP CONTENT */}
//       <div>

//         {/* Top Section */}
//         <div className='flex justify-between items-center'>
//           <h3 className='bg-[#ff073a22] text-[#ff073a] text-sm px-4 py-1 rounded-full 
//           border border-[#ff073a55]'>{data.category}
//           </h3>

//           <h4 className='text-gray-400 text-sm'>{data.date}
//           </h4>
//         </div>

//         {/* Title */}
//         <h2 className='mt-5 text-2xl font-bold text-[#00f2ff]'>{data.title}
//         </h2>

//         {/* Description */}
//         <p className='text-sm mt-3 text-gray-400 leading-relaxed'>{data.description}
//         </p>

//       </div>

//       {/* BUTTONS (always bottom) */}
//       <div className='flex gap-3 mt-6'>

//         <button className='w-full py-2 rounded-lg text-sm font-medium
//         bg-[#39ff1422] text-[#39ff14] border border-[#39ff1455]
//         hover:shadow-[0_0_12px_#39ff14] hover:scale-105 transition-all duration-300'>
//           ✔ Completed
//         </button>

//         <button className='w-full py-2 rounded-lg text-sm font-medium
//         bg-[#ff073a22] text-[#ff073a] border border-[#ff073a55]
//         hover:shadow-[0_0_12px_#ff073a] hover:scale-105 transition-all duration-300'>
//           ✖ Failed
//         </button>

//       </div>
//     </div>
//   )
// }

// export default Accept

import React from 'react'

const Accept = ({data}) => {
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

export default Accept