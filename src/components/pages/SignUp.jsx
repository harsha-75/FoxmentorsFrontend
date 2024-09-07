import React from "react";
import "../../styles.css";
import {Link} from 'react-router-dom';

function Signup(){
return(
  <div className="addUser">
    <h3>Sign UP</h3>
    <form className="addUserForm">
      <div className="inputGroup">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" autoComplete="off" placeholder="Enter Your Name" required/>

        <label htmlFor="name">Email:</label>
        <input type="email" id="email" autoComplete="off" placeholder="Enter Your Email" required/>

        <label htmlFor="name">Password:</label>
        <input type="password" id="password" autoComplete="off" placeholder="Enter Your Password" required/>

        <label htmlFor="name">Confirm Password:</label>
        <input type="password" id="Password" autoComplete="off" placeholder="Confirm Your Password" required/>

        <button type="submit" class="btn btn-success">Sign UP</button>
      </div>
    </form>
    <div className="login">
      <p>Already have an account ? </p>
      <Link to="/signin" type="submit" class="btn btn-primary">Login</Link>

    </div>
  </div>
)
}

export default Signup;