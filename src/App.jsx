import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/Employeedashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {
 const [user, setUser] = useState(null)
 const [loggedInUSerData, setLoggedInUSerData] = useState(null)
 const [userData, setUserData]= useContext(AuthContext)

useEffect(()=>{
  const loggedInUser=localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUSerData(userData.data)
    }
},[])
 
 
 


 const HandleLogin =(email, password)=>{
     if(email=='admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
     }else if(userData){
      const employee=userData.find((e)=>email==e.email && e.password==password)
      if(employee){
      setUser('employee')
      setLoggedInUSerData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data:employee}))
      }
       
     }
     else{
      alert("Invalid Credentials")
     }
 }


 


 
  
  return (
    <>
    
    {!user ? <Login HandleLogin={HandleLogin}/>: ''}

    {user=='admin' ? <AdminDashboard changeUser={setUser}/> : (user=='employee' ? <EmployeeDashboard changeUser={setUser} data ={loggedInUSerData}/> : null)}

    {/* <AdminDashboard/> */}
    </>
  )
}

export default App