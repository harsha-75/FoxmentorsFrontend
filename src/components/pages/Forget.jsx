import React from "react";

import "../../styles.css";

function Forget(){
    return(
<div className="addUser">
        <h3>Forget Password</h3>
        <form className="addUserForm">
            <div className="inputGroup">

                <label htmlFor="name">Email:</label>
                <input 
                type="email"
                id="email"
                autoComplete="off"
                placeholder="Enter Your Email" required/>         
            
                <button type="submit" class="btn btn-secondary">Next</button>              
               
             </div>
        </form>
        
    </div> 
)
}
export default Forget;