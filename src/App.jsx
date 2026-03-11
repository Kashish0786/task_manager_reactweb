// import React, { useContext, useEffect, useState } from 'react'
// import Admin from './components/Dashboard/Admin'
// import Login from './components/Auth/Login'
// import { getLocalStorage, setLocalStorage } from './utils/localstorage'
// import Employe from './components/Dashboard/Employe'    
// import { AuthContext } from './context/AuthProvider'
  

// const App = () => {

//   const [user, setUser] = useState(null)
//   const [loggedInUserData, setloggedInUserData] = useState(null)
//   const authData = useContext(AuthContext)  

//   useEffect(() => {
//     if(authData){
//       const loggedInUser = localStorage.getItem('loggedInUser')
//       if(loggedInUser){
//         setUser(loggedInUser.role)
//       }

//     }
  
//   }, [authData]);
  

//   const handleLogin = (email, password) => {

//     if(email == 'admin@me.com' && password == '123'){
//       setUser('admin')
//       localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin' }))
//     }
//     else if(authData){
//       const employee = authData.employees.find((e)=>email == e.email && e.password == password)
//       if(employee){
//         setUser('employee')
//         setloggedInUserData(employee)
//          localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee' })) 
//       }
     
//     }
//     else{
//     alert("Invalid Credentials")
//   }
// }



// // const data = useContext(AuthContext)  
// // console.log(data)

//   return (
//     <> 
//     {!user ? <Login handleLogin={handleLogin} />: ''}
//     {user === 'admin' ? <Admin changeUser={setUser}/> : user === 'employee' ? <Employe changeUser={setUser} data = {loggedInUserData} /> : null }
//     {/* <Employe/>*/}
//     {/* <Admin /> */}


//     </>
//   )
// }

// export default App



// import React, { useContext, useEffect, useState } from 'react'
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Admin from './components/Dashboard/Admin'
// import Login from './components/Auth/Login'
// import Employe from './components/Dashboard/Employe'
// import { AuthContext } from './context/AuthProvider'

// const App = () => {

//   const [user, setUser] = useState('')
//   const [employeeData, setEmployeeData] = useState(null)

//   const authData = useContext(AuthContext)

//   useEffect(() => {
//     if (authData) {
//       const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

//       if (loggedInUser) {
//         setUser(loggedInUser.role)
//         setEmployeeData(loggedInUser.data)
//       }
//     }
//   }, [authData])

//   const handleLogin = (email, password) => {

//     if (!authData) {
//       alert("Auth data not loaded yet")
//       return
//     }

//     // ✅ ADMIN CHECK
//     const admin = authData.admin.find(
//       (e) => e.email === email && e.password === password
//     )

//     // ✅ EMPLOYEE CHECK
//     const employee = authData.employees.find(
//       (e) => e.email === email && e.password === password
//     )

//     if (admin) {
//       setUser('admin')
//       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
//     } 
//     else if (employee) {
//       setUser('employee')
//       setEmployeeData(employee)
//       localStorage.setItem('loggedInUser', JSON.stringify({
//         role: 'employee',
//         data: employee
//       }))
//     } 
//     else {
//       alert("Invalid Credentials")
//     }
//   };

//   return (
//     <>
//       {!user && <Login handleLogin={handleLogin} />}

//       {user === 'admin' && <Admin changeUser={setUser} />}

//       {user === 'employee' && (
//         <Employe changeUser={setUser} data={employeeData} />
//       )}
//     </>
//   )
// }

// export default App

import React, { useContext, useEffect, useState } from 'react'
import Admin from './components/Dashboard/Admin'
import Login from './components/Auth/Login'
import Employe from './components/Dashboard/Employe'
import { AuthContext } from './context/AuthProvider'
import Header from './components/other/Header'

const App = () => {
  const [user, setUser] = useState('')
  const [employeeData, setEmployeeData] = useState(null)
   const [showSignup, setShowSignup] = useState(false)
  const authData = useContext(AuthContext)

  useEffect(() => {
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
      if (loggedInUser) {
        setUser(loggedInUser.role)
        setEmployeeData(loggedInUser.data)
      }
    }
  }, [authData])

  const handleLogin = (email, password) => {
    if (!authData) return alert("Auth data not loaded yet")

    const admin = authData.admin.find(
      (e) => e.email === email && e.password === password
    )
    const employee = authData.employees.find(
      (e) => e.email === email && e.password === password
    )

    if (admin) {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (employee) {
      setUser('employee')
      setEmployeeData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({
        role: 'employee',
        data: employee
      }))
    } else {
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
       
      {user === 'admin' && <Admin changeUser={setUser} />}

      {user === 'employee' && (
        <>
           <Header  data={employeeData} changeUser={setUser} /> 
          <Employe changeUser={setUser} data={employeeData} /> 
        </>
      )}
    </>

       
  )
}

export default App

// import React, { useContext, useEffect, useState } from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import Admin from './components/Dashboard/Admin'
// import Login from './components/Auth/Login'
// import Signup from './components/Auth/Signup'
// import Employe from './components/Dashboard/Employe'
// import Header from './components/other/Header'
// import { AuthContext } from './context/AuthProvider'

// const App = () => {
//   const [user, setUser] = useState('')
//   const [employeeData, setEmployeeData] = useState(null)
//   const authData = useContext(AuthContext)

//   useEffect(() => {
//     if (authData) {
//       const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
//       if (loggedInUser) {
//         setUser(loggedInUser.role)
//         setEmployeeData(loggedInUser.data)
//       }
//     }
//   }, [authData])

//   const handleLogin = (email, password) => {
//     if (!authData) return alert("Auth data not loaded yet")

//     const admin = authData.admin.find(e => e.email === email && e.password === password)
//     const employee = authData.employees.find(e => e.email === email && e.password === password)

//     if (admin) {
//       setUser('admin')
//       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
//     } else if (employee) {
//       setUser('employee')
//       setEmployeeData(employee)
//       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
//     } else {
//       alert("Invalid Credentials")
//     }
//   }

//   return (
//     <Routes>
//       {/* Default redirect */}
//       <Route path="/" element={<Navigate to="/login" />} />

//       {/* Auth Routes */}
//       <Route path="/login" element={!user ? <Login handleLogin={handleLogin} /> : <Navigate to={user === 'admin' ? "/admin" : "/employee"} />} />
//       <Route path="/signup" element={!user ? <Signup /> : <Navigate to={user === 'admin' ? "/admin" : "/employee"} />} />

//       {/* Admin Route */}
//       <Route path="/admin" element={user === 'admin' ? <Admin changeUser={setUser} /> : <Navigate to="/login" />} />

//       {/* Employee Route */}
//       <Route path="/employee" element={user === 'employee' ? (
//         <>
//           <Header data={employeeData} changeUser={setUser} />
//           <Employe changeUser={setUser} data={employeeData} />
//         </>
//       ) : <Navigate to="/login" />} />
//     </Routes>
//   )
// }

// export default App