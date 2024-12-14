import React, { useState } from 'react'
import AdminPage from '../Pages/Admin/AdminPage'
import UserPage from '../Pages/Users/UserPage'




function Home() {
    const [admin,setAdmin]=useState(false)
  return (
    <div>
       {admin ?<AdminPage/>: <UserPage/> }
       
       
       
    </div>
  )
}

export default Home