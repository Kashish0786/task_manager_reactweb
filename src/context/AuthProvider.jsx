
// import React, { createContext } from 'react'
// import { getLocalStorage } from '../utils/localstorage'
// export const AuthContext = createContext()

// const AuthProvider = ({children}) => {

//     const [userData, setuserData] = useState(null)

//     const data = getLocalStorage()
//     console.log(data.employees)
//   return (
//     <div>
//      <AuthContext.Provider value={"kashish"}>
//        {children}
//      </AuthContext.Provider>  
//     </div>
//   )
// }

// export default AuthProvider

// import React, { createContext, useState, useEffect } from 'react'
// import { getLocalStorage, setLocalStorage } from '../utils/localstorage'

// export const AuthContext = createContext()

// const AuthProvider = ({ children }) => {

//   const [userData, setUserData] = useState(null)

//   const data = getLocalStorage()
//   console.log(data?.employees)

// useEffect(() => {
//   setLocalStorage()
//   const { employees, admin } = getLocalStorage()
//   setUserData({ employees, admin })
// }, [])

//   return (
//     <div>
//     <AuthContext.Provider value={{ userData, setUserData }}>
//       {children}
//     </AuthContext.Provider>
//     </div>
//   )
// }

// export default AuthProvider


import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin })
  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider