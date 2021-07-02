import {React,useState} from 'react'

const SignUpPage = () => {

    const dropdown_locations = ["India", "America", "Austrellia", "Rassia", "UAE"];

    const [userSignUpRec, setSignUp] = useState({fname:null, lname:null, emailid:null, password:null, cpassword:null, gender:null, location:null});


    let handleEvent = (event) =>
    {
        setSignUp({...userSignUpRec, [event.target.name]:event.target.value});
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div className="card m-2 bg-white" style={{ "width": "400px" }}>
                        <div className="card-header">
                            <h1 class="text-center">
                                <span style={{ "color": "red" }}>C</span>
                                <span style={{ "color": "darkblue" }}>R</span>
                                <span style={{ "color": "green" }}>U</span>
                                <span style={{ "color": "orange" }}>D</span>
                                &nbsp; APP
                            </h1>
                        </div>

                        <div className="card-body mx-auto mt-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <label className="ms-2">First Name</label><span style={{ color: "red" }}>*</span>
                                    <input type="text" className="form-control mx-2 my-1" name="fname" onChange={handleEvent} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label className="ms-2">Last Name</label><span style={{ color: "red" }}>*</span>
                                    <input type="text" className="form-control mx-2 my-1" name="lname" onChange={handleEvent} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <label className="ms-2">Username/Email</label><span style={{ color: "red" }}>*</span>
                                    <input type="text" className="form-control mx-2 my-1" name="emailid" onChange={handleEvent} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <label className="ms-2">Password</label><span style={{ color: "red" }}>*</span>
                                    <input type="password" className="form-control mx-2 my-1" name="password" onChange={handleEvent} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <label className="ms-2">Confirm Password</label><span style={{ color: "red" }}>*</span>
                                    <input type="password" className="form-control mx-2 my-1" name="cpassword" onChange={handleEvent} />
                                </div>
                            </div>                            


                            <div className="row mt-4">
                                <div className="col-md-12">
                                   <lable class="me-3">Gender</lable>

                                   <input type="radio" value="Male" name="gender" id="rmale" class="mx-2" />
                                   <label for="rmale">Male</label>

                                   <input type="radio" value="Female" name="gender" id="rfemale" class="mx-2" />
                                   <label for="rfemale">Female</label>                                   
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <select class="form-control mx-2 my-1">
                                        {dropdown_locations.map(item=><option value={item}>{item}</option>)}
                                    </select>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-12">
                                    <input type="button" className="btn btn-primary my-4 float-end" value="Submit" />
                                </div>
                            </div>                            

                        </div>
                    </div>
                </div>
            </div>

            <p>{JSON.stringify(userSignUpRec)}</p>
        </div>
    )
}


export default SignUpPage;