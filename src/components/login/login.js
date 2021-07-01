import React from 'react'

const LoginPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card m-2 bg-white" style={{ "width": "500px" }}>
                        <div className="card-header">
                            <h1 class="text-center">
                                <span style={{ "color": "red" }}>C</span>
                                <span style={{ "color": "darkblue" }}>R</span>
                                <span style={{ "color": "green" }}>U</span>
                                <span style={{ "color": "orange" }}>D</span>
                                &nbsp; APP
                            </h1>
                        </div>

                        <div className="card-body mx-auto">
                            <div className="row">
                                <div className="col-md-8">
                                    <label className="ms-5">Username/Email</label><span style={{ color: "red" }}>*</span>
                                    <input type="text" className="form-control mx-5 my-1" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-8">
                                    <label className="ms-5">Password</label><span style={{ color: "red" }}>*</span>
                                    <input type="password" className="form-control mx-5 my-1" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-8">
                                    <input type="button" className="btn btn-primary" value="Login" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoginPage;