// import React, { useState } from 'react'

// const Login = ({handleLogin}) => {
  

//   // two way binding
//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')

//   const submitHandler = (e)=> {
//   e.preventDefault()
//   handleLogin(email,password)
//   console.log("email is", email)
//   console.log("password is", password)

//   setEmail("")
//   setPassword("")
// }
//   return (
//     <div className='flex h-screen w-screen items-center justify-center'>
//         <div className='border-2 border-gray-600 rounded-xl p-20'>
//             <form 
//             onSubmit={(e)=>{submitHandler(e)}}
//             className='flex flex-col items-center justify-center'>
                
//                 <input 
//                 value={email}
//                 onChange={(e)=>{setEmail(e.target.value)
//                 }}
//                 required 
//                 className='outline-none bg-transparent border-2 border-gray-300 py-4 px-5 text-xl rounded-full placeholder:text-gray-400' 
//                 id="email" 
//                 type="email" 
//                 autoComplete="email" 
//                 placeholder='Enter Your Email' />
                
//                 <input
//                 value={password}
//                 onChange={(e)=>{
//                   setPassword(e.target.value)
//                 }}
//                 required 
//                 className='outline-none bg-transparent border-2 border-gray-300 py-4 px-5 text-xl rounded-full mt-4 placeholder:text-gray-400' 
//                 id="password" 
//                 type="password" 
//                 autoComplete="current-password" 
//                 placeholder='Enter Password'/>
//                 <button className='text-white outline-none border-2 bg-gray-600 py-4 px-5 text-xl rounded-full mt-4 placeholder:text-white'>Login</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login

// import React, { useState } from 'react'

// const Login = ({ handleLogin }) => {

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const submitHandler = (e) => {
//     e.preventDefault()
//     handleLogin(email, password)

//     setEmail("")
//     setPassword("")
//   }

//   return (
//     <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-[#1f1f1f] via-[#2c2c2c] to-[#121212]'>

//       {/* Glass Card */}
//       <div className='backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl rounded-2xl p-10 w-[350px]'>

//         {/* Heading */}
//         <h2 className='text-3xl font-bold text-white text-center mb-6'>
//           Welcome 👋
//         </h2>

//         <p className='text-gray-400 text-center mb-6 text-sm'>
//           Login to continue your dashboard
//         </p>

//         <form onSubmit={submitHandler} className='flex flex-col gap-4'>

//           {/* Email */}
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             type="email"
//             placeholder='Email Address'
//             className='w-full px-4 py-3 rounded-lg bg-transparent border border-gray-500 text-white placeholder-gray-400 outline-none focus:border-white transition'
//           />

//           {/* Password */}
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             type="password"
//             placeholder='Password'
//             className='w-full px-4 py-3 rounded-lg bg-transparent border border-gray-500 text-white placeholder-gray-400 outline-none focus:border-white transition'
//           />

//           {/* Button */}
//           <button
//             type='submit'
//             className='mt-4 bg-gradient-to-r from-gray-500 to-gray-700 hover:scale-105 hover:shadow-lg transition-all duration-300 py-3 rounded-lg text-white font-semibold'
//           >
//             Login
//           </button>

//         </form>

//         {/* Footer */}
//         <p className='text-gray-500 text-xs text-center mt-6'>
//           Built with ❤️ using React + Tailwind
//         </p>

//       </div>
//     </div>
//   )
// }

// export default Login


import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"; // add this at top

const Login = ({ handleLogin }) => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    handleLogin(email, password)

    setEmail("")
    setPassword("")

  }
    
  return (
    <div className='relative flex h-screen w-screen items-center justify-center bg-black overflow-hidden'>

      {/* Top Left Logo */}
      <h1 className='absolute top-5 left-8 text-xl font-semibold text-cyan-400 tracking-wide'>
        Task Manager System
      </h1>


      {/* Glow Background Effect */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

      {/* Glass Card */}
      <div className='backdrop-blur-xl bg-white/5 border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,0.2)] rounded-2xl p-10 w-[350px] z-10'>

        {/* Heading */}
        <h2 className='text-3xl font-bold text-white text-center mb-2'>
          Welcome 👋
        </h2>

        <p className='text-cyan-300 text-center mb-6 text-sm'>
          Login to continue your dashboard
        </p>

        <form onSubmit={submitHandler} className='flex flex-col gap-4'>

          {/* Email */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder='Email Address'
            className='w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition'
          />

          {/* Password */}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder='Password'
            className='w-full px-4 py-3 rounded-lg bg-transparent border 
            border-gray-600 text-white placeholder-gray-400 outline-none 
            focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition'
          />

          {/* Button */}
          <button
            type='submit'
            className='mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 
            hover:scale-105 hover:shadow-[0_0_10px_rgba(34,211,238,0.4)] 
            transition-all duration-300 py-3 rounded-lg text-black font-semibold'
          >
            Login
          </button>


        </form>

        {/* Footer */}
        <p className='text-gray-500 text-xs text-center mt-6'>
          Built with ❤️ using React + Tailwind
        </p>

      </div>
    </div>
  )
}

export default Login