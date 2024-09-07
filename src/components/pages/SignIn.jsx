import React from 'react'
import "../../styles.css";
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div className="addUser">
        <h3>Login</h3>
        <form className="addUserForm">
            <div className="inputGroup">
                      
            
                <label htmlFor="name">Email:</label>
                <input 
                type="email"
                id="email"
                autoComplete="off"
                placeholder="Enter Your Email" required/>

           
            
                <label htmlFor="name">Password:</label>
                <input 
                type="password"
                id="password"
                autoComplete="off"
                placeholder="Enter Your Password" required/>
                <button type="submit" class="btn btn-primary">Login</button>
                <a href="/forget"> Forgot Password </a>
                
                

            </div>
           
        </form>
        
        <div className="log">
            <p>Don't have account ?</p>
            <Link  to="/signup" type="submit" class="btn btn-success">Sign UP </Link> 
            <Link  to="/signout" type="submit" class="btn btn-success">Log Out </Link>        

        </div>
        <div className="signout">
        
        </div>
      
    </div> 
  )
}

export default Signin;
