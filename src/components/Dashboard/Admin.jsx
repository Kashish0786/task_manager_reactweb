
import React from 'react'
import Header from '../other/Header'
import Createtask from '../other/Createtask'
import Alltask from '../other/Alltask'

const Admin = (props) => {
  return (
    // <div className='h-screen w-full p-7 bg-[#1C1C1C]'>
    <div className='h-screen w-full p-7 bg-gray-900'>
      <Header changeUser={props.changeUser}  />
      <Createtask changeUser={props.changeUser} />
      <Alltask />
    </div>
  )
}

export default Admin