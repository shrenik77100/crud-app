import {React, useState} from 'react'

const LoginPage = () => {

    const [userRec, setUserRecord] = useState({"username":null, "password":null});


    let handleEvent = (event) =>{
        setUserRecord({...userRec, [event.target.name]:event.target.value});
    }

    let handleLoginClick = () =>{

    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div className="card m-2 bg-white" style={{ "width": "400px" }}>
                        <div className="card-header">
                                <h1 className="text-center">
                                    <span style={{ "color": "red" }}>C</span>
                                    <span style={{ "color": "darkblue" }}>R</span>
                                    <span style={{ "color": "green" }}>U</span>
                                    <span style={{ "color": "orange" }}>D</span>
                                    &nbsp; APP
                                </h1>
                        </div>

                        <div className="card-body mx-auto mt-4">
                            <div className="row">
                                <div className="col-md-10">
                                    <label className="ms-2">Username/Email</label><span style={{ color: "red" }}>*</span>
                                    <input type="text" className="form-control mx-2 my-1" name="username" onChange={handleEvent} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-10">
                                    <label className="ms-2">Password</label><span style={{ color: "red" }}>*</span>
                                    <input type="password" className="form-control mx-2 my-1" name="password" onChange={handleEvent} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-10">
                                    <input type="button" className="btn btn-primary my-1 float-end" value="Login" onClick={handleLoginClick} />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col d-flex justify-content-center">
                                  <a href="signup">Do you want to create a new account?</a>                                   
                                </div>
                            </div>     

                            <div className="row">
                                <div className="col-md-12">
                                  <a href="forgotpw">Forgot Password?</a>                                   
                                </div>
                            </div>                                                         

                        </div>
                    </div>
                </div>
            </div>

            <p>{JSON.stringify(userRec)}</p>
        </div>
    )
}


export default LoginPage;