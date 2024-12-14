import React from 'react'
import AdminNav from '../../components/AdminNav'
import AllProducts from './AllProducts'
import { Link } from 'react-router-dom'


function AdminPage() {
  return (
    <div>

        <AdminNav></AdminNav>
        <div style={{textAlign:"right", marginTop:'30px', display:'flow', position:'sticky'}} className='container sticky-btn'><Link to={'/addProducts'} ><button className='btn btn-success' >Add Products</button></Link></div>
       <div className='container'><AllProducts /></div>  
    </div>
  )
}

export default AdminPage