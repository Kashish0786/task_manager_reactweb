import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import Tasklist from '../tasklist/Tasklist'

const Employe = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} />
      <TaskNumber data={props.data} />
      <Tasklist data={props.data} />
    </div>
  )
}

export default Employe