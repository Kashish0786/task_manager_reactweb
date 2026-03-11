// import React, { useState } from 'react'

// const Createtask = () => {

//   const [taskTitle, setaskTitle] = useState('')
//   const [taskDescription, settaskDescription] = useState('')
//   const [taskDate, settaskDate] = useState('')
//   const [asignTo, setasignTo] = useState('')
//   const [category, setcategory] = useState('')

//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log(taskTitle, taskDescription, taskDate, asignTo, category)
//   }

//   return (
//     <div className=' w-full p-7'>

//       <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
//         <form onSubmit={(e)=>{
//           submitHandler(e)
//         }}
//         className='flex flex-wrap w-full items-start justify-between gap-6'>

//           {/* LEFT SIDE */}
//           <div className='w-1/2'>

//             <div>
//               <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
//               <input
//               value={taskTitle}
//               onChange={(e)=>{
//                 setTaskTitle(e.target.value)
//               }}
//                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
//                 type="text"
//                 placeholder='Make a UI design'
//               />
//             </div>

//             <div>
//               <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
//               <input
//               value={taskDate}
//               onChange={(e)=>{
//                 setTaskDate(e.target.value)
//               }}
//                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
//                 type='date'
//               />
//             </div>

//             <div>
//               <h3 className='text-sm text-gray-300 mb-1'>Assign to</h3>
//               <input
//               value={asignTo}
//               onChange={(e)=>{
//                 setAsignTo(e.target.value)
//               }}
//                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
//                 type='text'
//                 placeholder='Employee name'
//               />
//             </div>

//             <div>
//               <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
//               <input
//               value={category}
//               onChange={(e)=>{
//                 setCategory(e.target.value)
//               }}
//                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
//                 type='text'
//                 placeholder='design, dev, etc'
//               />
//             </div>

//           </div>

//           {/* RIGHT SIDE */}
//           <div className='w-2/5 flex flex-col'>
//             <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
//             <textarea
//             value={taskDescription}
//               onChange={(e)=>{
//                 setTaskDescription(e.target.value)
//               }}
//               className='text-sm py-2 px-2 w-full rounded outline-none bg-transparent border border-gray-400'
//               rows='10'
//             ></textarea>

//             <button className='bg-gray-500 py-3 hover:bg-gray-700 px-5 rounded text-sm mt-4 w-full'>
//               Create Task
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default Createtask




import React, { useState } from 'react'

const Createtask = ({ changeUser }) => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      assignTo: assignTo,
      category: category,
      status: 'new'
    }

    console.log("New Task:", newTask)

    

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
  }

  const logOutUser = () => {
  localStorage.removeItem('loggedInUser')
  changeUser(null)
}

  return (
    <div className='w-full p-7 bg-[#0a0a0a] min-h-screen'>


      {/* Logout Button */}
      <div className="flex justify-end mb-4">

        <button
          onClick={logOutUser}
          className='bg-[#00f2ff15] border border-[#00f2ff88] text-[#00f2ffcc] 
            px-6 py-2 rounded-lg font-semibold tracking-wide
            hover:bg-[#00f2ff33] hover:text-[#00f2ff] 
            hover:shadow-[0_0_8px_#00f2ff55]
            transition-all duration-300 hover:scale-105'
        >
          Logout
        </button>
      </div>

      <div className='p-6 mt-4 rounded-xl bg-[#111] border border-[#00f2ff33] shadow-[0_0_30px_#00f2ff22]'>

        <h2 className='text-3xl font-bold text-[#00f2ff] mb-6 text-center tracking-wide'>
          Create New Task 🚀
        </h2>

        <form 
          onSubmit={submitHandler}
          className='flex flex-wrap w-full items-start justify-between gap-8'
        >

          {/* LEFT SIDE */}
          <div className='w-[48%]'>

            {/* Input common class */}
            {/* neon input */}
            
            <div className='mb-4'>
              <h3 className='text-sm text-gray-400 mb-1'>Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className='w-full px-3 py-2 rounded bg-transparent border border-[#00f2ff55] 
                text-white outline-none focus:border-[#00f2ff] focus:shadow-[0_0_10px_#00f2ff]'
                type="text"
                placeholder='Make a UI design'
              />
            </div>

            <div className='mb-4'>
              <h3 className='text-sm text-gray-400 mb-1'>Date</h3>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className='w-full px-3 py-2 rounded bg-transparent border border-[#00f2ff55] 
                text-white outline-none focus:border-[#00f2ff] focus:shadow-[0_0_10px_#00f2ff]'
                type='date'
              />
            </div>

            <div className='mb-4'>
              <h3 className='text-sm text-gray-400 mb-1'>Assign To</h3>
              <input
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                className='w-full px-3 py-2 rounded bg-transparent border border-[#00f2ff55] 
                text-white outline-none focus:border-[#00f2ff] focus:shadow-[0_0_10px_#00f2ff]'
                type='text'
                placeholder='Employee name'
              />
            </div>

            <div className='mb-4'>
              <h3 className='text-sm text-gray-400 mb-1'>Category</h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='w-full px-3 py-2 rounded bg-transparent border border-[#00f2ff55] 
                text-white outline-none focus:border-[#00f2ff] focus:shadow-[0_0_10px_#00f2ff]'
                type='text'
                placeholder='Design, Dev, etc'
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className='w-[48%] flex flex-col'>

            <h3 className='text-sm text-gray-400 mb-1'>Description</h3>

            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className='w-full px-3 py-2 rounded bg-transparent border border-[#00f2ff55] 
              text-white outline-none focus:border-[#00f2ff] '
              rows='9'
              placeholder='Enter task details...'
            ></textarea>

            <button 
              type='submit'

              className='mt-6 bg-[#00f2ff11] border border-[#00f2ff66] 
              text-[#00f2ffcc] py-3 px-5 rounded-lg font-semibold tracking-wide 
              hover:bg-[#00f2ff22] hover:border-[#00f2ff99] 
              hover:shadow-[0_0_6px_#00f2ff] transition-all duration-200'
            >
              Create Task
            </button>

          </div>

        </form>
      </div>
    </div>
  )
}

export default Createtask