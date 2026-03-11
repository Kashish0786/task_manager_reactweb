// import React from 'react'

// const Alltask= () => {
//   return (
//     <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-48 overflow-auto'>
//         <div className='bg-gray-600 mb-2 py-2 px-4 rounded flex justify-between'>
//             <h2>Kashish</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>

//         <div className='bg-gray-600 mb-2 py-2 px-4 rounded flex justify-between'>
//             <h2>Kashish</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>

//         <div className='bg-gray-600 mb-2 py-2 px-4 rounded flex justify-between'>
//             <h2>Kashish</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>

//         <div className='bg-gray-600 mb-2 py-2 px-4 rounded flex justify-between'>
//             <h2>Kashish</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>

//         <div className='bg-gray-600 mb-2 py-2 px-4 rounded flex justify-between'>
//             <h2>Kashish</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//     </div>
//   )
// }

// export default Alltask




import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Alltask = () => {

  const authData = useContext(AuthContext)

  return (
    <div className='bg-[#0a0a0a] p-6 rounded-2xl shadow-[0_0_40px_#00f2ff22] min-h-[300px]'>
      
      {/* Table Header */}
      <div className='grid grid-cols-5 gap-4 mb-4 text-center'>
        <h2 className='text-[#00f2ff] font-semibold tracking-wide py-2 rounded-lg
                        bg-[#00f2ff11] border border-[#00f2ff66] shadow-[0_0_10px_#00f2ff22]'>
          Employee
        </h2>
        <h3 className='text-[#00f2ff] font-semibold tracking-wide py-2 rounded-lg
                        bg-[#00f2ff11] border border-[#00f2ff66] shadow-[0_0_10px_#00f2ff22]'>
          New Task
        </h3>
        <h5 className='text-[#00f2ff] font-semibold tracking-wide py-2 rounded-lg
                        bg-[#00f2ff11] border border-[#00f2ff66] shadow-[0_0_10px_#00f2ff22]'>
          Active
        </h5>
        <h5 className='text-[#00f2ff] font-semibold tracking-wide py-2 rounded-lg
                        bg-[#00f2ff11] border border-[#00f2ff66] shadow-[0_0_10px_#00f2ff22]'>
          Completed
        </h5>
        <h5 className='text-[#00f2ff] font-semibold tracking-wide py-2 rounded-lg
                        bg-[#00f2ff11] border border-[#00f2ff66] shadow-[0_0_10px_#00f2ff22]'>
          Failed
        </h5>
      </div>

      {/* Task Rows */}
      <div className='h-56 overflow-y-auto'>
        {authData.employees.map(function(elem,idx) {
          return (
            <div key={idx}
              className='grid grid-cols-5 gap-4 mb-3 text-center py-3 px-2 rounded-lg
                         bg-[#1a1a1a] border border-[#00f2ff33] 
                         hover:shadow-[0_0_15px_#00f2ff55] transition-all duration-300'>
              <h2 className='text-white font-medium'>{elem.firstName}</h2>
              <h3 className='text-[#00f2ffcc] font-medium'>{elem.taskCounts.newTask}</h3>
              <h5 className='text-[#00ff99cc] font-medium'>{elem.taskCounts.active}</h5>
              <h5 className='text-[#ffcc00cc] font-medium'>{elem.taskCounts.completed}</h5>
              <h5 className='text-[#ff4d4dcc] font-medium'>{elem.taskCounts.failed}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Alltask