import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='bg-light'>
          <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="card shadow p-4" style={{ width: '400px' }}>
            <h1 className="text-center mb-4">Login</h1>
            <form action='/login' method='post'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
                <div className="text-center mt-3">
                    <small>Don't have an account? <Link to={'/signup'}>Sign up</Link></small>
                </div>
            </form>
        </div>
    </div>

    </div>
  )
}

export default Login