import axios from 'axios'
import React, { useEffect, useState } from 'react'




export  function Login() {
    const [email1, setemail] = useState("")
    const [password,setpassworrd] = useState("")
    function setData(e)
    {
        e.target.name=="Email" && setemail(e.target.value)
        e.target.name=="Password" && setpassworrd(e.target.value)
        

    }
    function sendInfo(){
        var w={
            email1
        }
        axios.post('http://localhost:3000/login-student',w).then((res)=>{
           alert(res.data.data)
        })

    }
    return(
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                                    <div class="card-body">
                                        <form>
                                            <div class="form-group">
                                                <label class="small mb-1" for="inputEmail">Email</label>
                                                <input name="Email" value={email1} onChange={(e)=>{setData(e);}} class="form-control py-4" id="inputEmailAddress" type="email" placeholder="Enter email address" />
                                            </div>
                                            <div class="form-group">
                                                <label class="small mb-1" for="inputPassword">Password</label>
                                                <input name="Password" value={password} onChange={(e)=>{setData(e);}} class="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" />
                                            </div>
                                          
                                            <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                            
                                                <a class="btn btn-primary" onClick={sendInfo}>Login</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center">
                                        <div class="small"><a href="register.html">Need an account? Sign up!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2020</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    )
}