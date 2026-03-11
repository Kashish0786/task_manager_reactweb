// import React from 'react'

// const TaskNumber = () => {
//   return (
//     <div className='flex mt-10 justify-between gap-5 screen'>
//     <div className='rounded-xl w-[90%] py-6 px-9  bg-gray-500 
// hover:bg-gray-700 
// hover:scale-105 
// transition-all duration-300 cursor-pointer'>
//         <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
//         <h3 className='text-xl font-medium'>New Task</h3>
//     </div>

//     <div className='rounded-xl w-[90%] py-6 px-9  bg-gray-500 
// hover:bg-gray-700 
// hover:scale-105 
// transition-all duration-300 cursor-pointer'>
//         <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
//         <h3 className='text-xl font-medium'>Completed Task</h3>
//         </div>

//     <div className='rounded-xl w-[90%] py-6 px-9  bg-gray-500 
//     hover:bg-gray-700 
//     hover:scale-105 
//     transition-all duration-300 cursor-pointer'>
//         <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
//         <h3 className='text-xl font-medium'>Accept Task</h3>
//     </div>
    
//     <div className='rounded-xl w-[90%] py-6 px-9  bg-gray-500 
//     hover:bg-gray-700 
//     hover:scale-105 
//     transition-all duration-300 cursor-pointer'>
//         <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
//         <h3 className='text-xl font-medium'>Failed Task</h3>
//     </div>
//     </div>
//   )
// }

// export default TaskNumber

// import React from 'react'

// const TaskNumber = ({ data }) => {

//   if (!data) return null

//   return (
//     <div className='flex mt-10 justify-between gap-5'>

//       <div className='rounded-xl w-full py-6 px-9 bg-gray-500'>
//         <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
//         <h3 className='text-xl font-medium'>New Task</h3>
//       </div>

//       <div className='rounded-xl w-full py-6 px-9 bg-gray-500'>
//         <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
//         <h3 className='text-xl font-medium'>Completed Task</h3>
//       </div>

//       <div className='rounded-xl w-full py-6 px-9 bg-gray-500'>
//         <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
//         <h3 className='text-xl font-medium'>Accepted Task</h3>
//       </div>

//       <div className='rounded-xl w-full py-6 px-9 bg-gray-500'>
//         <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
//         <h3 className='text-xl font-medium'>Failed Task</h3>
//       </div>

//     </div>
//   )
// }

// export default TaskNumber

import React from 'react'

const TaskNumber = ({ data }) => {

  if (!data) return null

  return (
    <div className='flex mt-10 justify-between gap-6'>

      {/* NEW TASK */}
      <div className='rounded-xl w-full py-6 px-9 bg-[#0a0a0a] border border-[#00f2ff33]
      hover:shadow-[0_0_10px_#00f2ff] hover:scale-102 transition-all duration-150 cursor-pointer'>
        <h2 className='text-3xl font-bold text-[#00f2ff] drop-shadow-[0_0_8px_#00f2ff]'>
          {data.taskCounts.newTask}
        </h2>
        <h3 className='text-lg text-gray-400 mt-1'>New Task</h3>
      </div>

      {/* COMPLETED */}
      <div className='rounded-xl w-full py-6 px-9 bg-[#0a0a0a] border border-[#39ff1433]
      hover:shadow-[0_0_10px_#39ff14] hover:scale-102 transition-all duration-150 cursor-pointer'>
        <h2 className='text-3xl font-bold text-[#39ff14] drop-shadow-[0_0_8px_#39ff14]'>
          {data.taskCounts.completed}
        </h2>
        <h3 className='text-lg text-gray-400 mt-1'>Completed</h3>
      </div>

      {/* ACTIVE */}
      <div className='rounded-xl w-full py-6 px-9 bg-[#0a0a0a] border border-[#ffaa0033]
      hover:shadow-[0_0_10px_#ffaa00] hover:scale-102 transition-all duration-150 cursor-pointer'>
        <h2 className='text-3xl font-bold text-[#ffaa00] drop-shadow-[0_0_8px_#ffaa00]'>
          {data.taskCounts.active}
        </h2>
        <h3 className='text-lg text-gray-400 mt-1'>Active</h3>
      </div>

      {/* FAILED */}
      <div className='rounded-xl w-full py-6 px-9 bg-[#0a0a0a] border border-[#ff073a33]
      hover:shadow-[0_0_10px_#ff073a] hover:scale-102 transition-all duration-150 cursor-pointer'>
        <h2 className='text-3xl font-bold text-[#ff073a] drop-shadow-[0_0_8px_#ff073a]'>
          {data.taskCounts.failed}
        </h2>
        <h3 className='text-lg text-gray-400 mt-1'>Failed</h3>
      </div>

    </div>
  )
}

export default TaskNumber