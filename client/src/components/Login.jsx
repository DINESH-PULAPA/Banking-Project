import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContext';

const loginImg = "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80"; // unique bank login image

const Login = ({setIsLoginBox}) => {
  const {setEmail, setPassword, login, setUsertype} = useContext(GeneralContext);

  const handleLogin = async (e) =>{
    e.preventDefault();
    await login();
  }

  return (
    <>
      <div className="modern-login-img-navbar">
        <img src={loginImg} alt="Login Bank" className="modern-login-img" />
      </div>
      <form className="authForm modern-auth-form" onSubmit={handleLogin}>
        <h2>
          <span role="img" aria-label="login" style={{marginRight: '8px'}}>🔐</span>
          Login
        </h2>
        <div className="modern-input-group">
          <label htmlFor="modernEmail">Email address</label>
          <input
            type="email"
            id="modernEmail"
            placeholder="name@example.com"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            className="modern-input"
          />
        </div>
        <div className="modern-input-group">
          <label htmlFor="modernPassword">Password</label>
          <input
            type="password"
            id="modernPassword"
            placeholder="Password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            className="modern-input"
          />
        </div>
        <div className="modern-input-group">
          <label htmlFor="modernUsertype">User type</label>
          <select
            id="modernUsertype"
            onChange={(e)=> setUsertype(e.target.value)}
            className="modern-input"
          >
            <option value="">Select type</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
        </div>
        <button type="submit" className="modern-btn">Sign in</button>
        <p className="modern-switch-text">
          Not registered? <span className="modern-switch-link" onClick={()=> setIsLoginBox(false)}>Register</span>
        </p>
      </form>
    </>
  )
}
export default Login