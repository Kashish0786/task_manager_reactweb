

import React from 'react'

const Header = ({ data, changeUser }) => {
  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    changeUser(null)
  }

  // Agar data undefined ho, pura header render mat karo
  if (!data) return null

  return (
    <div className='flex items-center justify-between px-6 py-4 bg-[#0a0a0a] border-b border-[#00f2ff33]'>
      <h1 className='text-lg font-medium text-gray-300'>
        Hello 👋 <br />
        <span className='text-3xl font-bold text-[#00f2ff] tracking-wide drop-shadow-[0_0_8px_#00f2ff]'>
          {data.firstName }  {/* Agar firstName nahi hai to 'User' show karo */}
        </span>
      </h1>

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
  )
}

export default Header

