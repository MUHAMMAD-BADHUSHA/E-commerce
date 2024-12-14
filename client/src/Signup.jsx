import React from 'react'
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <div>
      
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center ">
                            <h3>Sign Up</h3>
                        </div>
                        <div className="card-body">
                            <form action='/signUp'method='post'>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter your username" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                                </div>
                                
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <small>Already have an account? <Link to={'/login'} href="#">Login here</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Signup