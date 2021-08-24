import React from 'react'


const Login = () => {
    return(
     <div className="login-modal">
         <div className="login-cover">
      <div className="login-modal-div">
          <div className="auth-header">Login</div>

          <form>
              <div className="form-row">
                  <div className="auth-div">Email Address</div>
                  <input className="modal-textfield" type="text" placeholder="" required />
              </div>
              <div className="form-row">
                  <div  className="auth-div">Password</div>
                  <input className="modal-textfield" type="password" placeholder="" required />
              </div>
              <br/>
              <button type="submit" className="modal-actions-ok">Login</button>
          </form>
      </div>
         </div>

     </div>
    )
}

export default Login;