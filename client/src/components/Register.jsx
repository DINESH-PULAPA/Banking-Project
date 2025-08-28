import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContext';

const registerImg = "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"; // unique bank register image

const Register = ({setIsLoginBox}) => {
  const {setUsername, setEmail, setPassword, usertype, setUsertype, register, setHomeBranch} = useContext(GeneralContext);

  const handleRegister = async (e) =>{
    e.preventDefault();
    await register()
  }
  return (
    <form className="authForm modern-auth-form" onSubmit={handleRegister}>
      <div className="modern-login-img-wrapper">
        <img src={registerImg} alt="Register Bank" className="modern-login-img" />
      </div>
      <h2>
        <span role="img" aria-label="register" style={{marginRight: '8px'}}>📝</span>
        Register
      </h2>
      <div className="modern-input-group">
        <label htmlFor="modernUsername">Username</label>
        <input
          type="text"
          id="modernUsername"
          placeholder="username"
          autoComplete="username"
          onChange={(e)=> setUsername(e.target.value)}
          className="modern-input"
        />
      </div>
      <div className="modern-input-group">
        <label htmlFor="modernEmail">Email address</label>
        <input
          type="email"
          id="modernEmail"
          placeholder="name@example.com"
          autoComplete="email"
          onChange={(e)=> setEmail(e.target.value)}
          className="modern-input"
        />
      </div>
      <div className="modern-input-group">
        <label htmlFor="modernPassword">Password</label>
        <input
          type="password"
          id="modernPassword"
          placeholder="Password"
          autoComplete="new-password"
          onChange={(e)=> setPassword(e.target.value)}
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
      {usertype === 'customer' ? (
        <div className="modern-input-group">
          <label htmlFor="modernHomeBranch">Home branch</label>
          <select
            id="modernHomeBranch"
            onChange={(e)=> setHomeBranch(e.target.value)}
            className="modern-input"
          >
            <option value="">Select branch</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="bangalore">Bangalore</option>
            <option value="chennai">Chennai</option>
            <option value="mumbai">Mumbai</option>
            <option value="tirupati">Tirupati</option>
            <option value="vizag">Vizag</option>
            <option value="pune">Pune</option>
            <option value="delhi">Delhi</option>
            <option value="kochi">Kochi</option>
            <option value="Venkatagiri">Venkatagiri</option>
          </select>
        </div>
      ) : null}
      <button type="submit" className="modern-btn">Sign up</button>
      <p className="modern-switch-text">
        Already registered? <span className="modern-switch-link" onClick={()=> setIsLoginBox(true)}>Login</span>
      </p>
    </form>
  )
}
export default Register;