import {React,useState} from 'react'
import axios from 'axios';

const SignUpPage = () => {
    

    const dropdown_locations = ["India", "America", "Austrellia", "Rassia", "UAE"];
    const [userSignUpRec, setSignUp] = useState({fname:null, lname:null, emailid:null, password:null, cpassword:null, gender:null, location:null});

    const [isFnameValid, setIsFnameValid] = useState(false);
    const [isLnameValid, setIsLnameValid] = useState(false);

    let handleEvent = (event) =>
    {
        setSignUp({...userSignUpRec, [event.target.name]:event.target.value});
    }

    let validate = (event) => {
        if(event.target.name=="fname")
        {
            if (/^[a-zA-Z]+$/.test(event.target.value))
                setIsFnameValid(true);
            else
                setIsFnameValid(false);
        }
        else if(event.target.name=="lname")
        {
            if (/^[a-zA-Z]+$/.test(event.target.value))
                setIsLnameValid(true);
            else
                setIsLnameValid(false);
        }        
            
    }

    const doSignUp = () => {
        console.log("in signup, " + JSON.stringify(userSignUpRec, null,3));
        
        axios.post("http://localhost:3002/api/user/create", userSignUpRec)
        .then((response)=>{
            console.log(JSON.stringify(response, null,3));
        })
        .catch((error)=>{
            console.log(JSON.stringify(error, null,3));
        })
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
                                <div className="col-md-12">
                                    <label className="ms-2">First Name</label><span style={{ color: "red" }}>*</span>
                                    <input type="text" className="form-control mx-2 my-1" name="fname" onChange={handleEvent} onKeyUp={validate}/>
                                    <label className="text-danger mx-2" style={{fontSize:"12px"}}> {isFnameValid?"":"Not valid"} </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label className="ms-2">Last Name</label><span style={{ color: "red" }}>*</span>
                                    <input type="text" className="form-control mx-2 my-1" name="lname" onChange={handleEvent} />
                                    <label className="text-danger mx-2" style={{fontSize:"12px"}}> {isLnameValid?"":"Invalid Last Name"} </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <label className="ms-2">Username/Email</label><span style={{ color: "red" }}>*</span>
                                    <input type="text" className="form-control mx-2 my-1" name="emailid" onChange={handleEvent} />
                                    <label className="text-danger mx-2" style={{fontSize:"12px"}}>  </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <label className="ms-2">Password</label><span style={{ color: "red" }}>*</span>
                                    <input type="password" className="form-control mx-2 my-1" name="password" onChange={handleEvent} />
                                    <label className="text-danger mx-2" style={{fontSize:"12px"}}>  </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <label className="ms-2">Confirm Password</label><span style={{ color: "red" }}>*</span>
                                    <input type="password" className="form-control mx-2 my-1" name="cpassword" onChange={handleEvent} />
                                    <label className="text-danger mx-2" style={{fontSize:"12px"}}> </label>
                                </div>
                            </div>                            


                            <div className="row mt-4">
                                <div className="col-md-12">
                                   <lable className="me-3">Gender</lable>

                                   <input type="radio" value="Male" name="gender" id="rmale" className="mx-2" onChange={handleEvent}/>
                                   <label for="rmale">Male</label>

                                   <input type="radio" value="Female" name="gender" id="rfemale" className="mx-2" onChange={handleEvent}/>
                                   <label for="rfemale">Female</label>                                   
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <select className="form-control mx-2 my-1" name="location" onChange={handleEvent}>
                                        {dropdown_locations.map(item=><option value={item} key={item}>{item}</option>)}
                                    </select>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-12">
                                    <input type="button" className="btn btn-primary my-4 float-end" value="Submit" onClick={doSignUp} />
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