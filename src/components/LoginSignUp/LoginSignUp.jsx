import React, { useState } from 'react'
import './LoginSignUp.css'

import user_icon from '../assests/person.png'
import email_icon from '../assests/email.png'
import password_icon from '../assests/password.png'

const LoginSignUp = () => {
    const [action, setaction] = useState("Login");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="person" placeholder='Name'/>
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Mail-id'/>
            </div>
            <div className="input">
                <img src={password_icon } alt="" />
                <input type="password" placeholder='Password'/>
            </div> 
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setaction("Sign Up")}}>Sign-Up</div>
            <div className={action === "Sign Up"?"submit gray":"submit"} onClick={()=>{setaction("Login")}}>Login</div>
        </div>
    </div>
  )
} 

export default LoginSignUp
