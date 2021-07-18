import React, { useEffect, useState } from 'react'
import axios from 'axios';
export  function CreateStudent(props) {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [marks, setmarks] = useState("")
    const [age, setage] = useState("")
    const [city, setcity] = useState("")


    var stid = props.match.params.id;

    useEffect(() => {
        if(stid)
        {axios.get('http://localhost:3000/student-by-id?id='+stid).then(
            (res)=>{
                console.log(res.data.data);
                setname(res.data.data[0].name);
                setemail(res.data.data[0].email);
                setage(res.data.data[0].age);

                setmarks(res.data.data[0].marks);
                setcity(res.data.data[0].city);
              
            }
        
        )
        }
      
    }, [])


    function setValue(e)
    {
        e.target.name=="Name" && setname(e.target.value)
        e.target.name=="Age" && setage(e.target.value)
        e.target.name=="Marks" && setmarks(e.target.value)
        e.target.name=="Email" && setemail(e.target.value)
        e.target.name=="City" && setcity(e.target.value)

    }
    function sendData(){
        var s={
            name,email,age,marks,city
        }
        if(stid)
        {   s._id=stid;
            axios.post('http://localhost:3000/update-student',s).then((res)=>{
                alert(res.data.data);
            })
         
    

        }
        else
        {
            axios.post('http://localhost:3000/create-student',s).then((res)=>{
                alert(res.data.data);
            })
         
    

        }


      
     


   
    }
  
    return (
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                    <div class="card-body">
                        <form>
                       
                            <div class="form-group">
                                <label class="small mb-1" for="inputName">Name</label>
                                <input name="Name" value={name} onChange={(e)=>{setValue(e);}} class="form-control py-4" id="inputName" type="text" placeholder="Enter Name" />
                            </div>
                            <div class="form-group">
                                <label class="small mb-1" for="inputEmail">Email</label>
                                <input name="Email" value={email} onChange={(e)=>{setValue(e);}} class="form-control py-4" id="inputEmail" type="email" placeholder="Enter Email" />
                            </div>
                            <div class="form-group">
                                <label class="small mb-1" for="inputAge">Age</label>
                                <input  name="Age"  value={age} onChange={(e)=>{setValue(e);}} class="form-control py-4" id="inputAge" type="number" placeholder="Enter Age" />
                            </div>
                            <div class="form-group">
                                <label class="small mb-1" for="inputMarks">Marks</label>
                                <input name="Marks" value={marks} onChange={(e)=>{setValue(e);}} class="form-control py-4" id="inputMarks" type="number" placeholder="Enter Marks" />
                            </div>
                            <div class="form-group">
                                <label class="small mb-1" for="inputCity">City</label>
                                <select name="City" value={city} onChange={(e)=>{setValue(e);}} class="form-control " id="inputCity"  >
                                    <option value="jaipur" >jaipur</option>
                                    <option value="Pune" >Pune</option>
                                    <option value="Chandigarh" >Chandigarh</option>
                                    <option value="Gujarat" >Gujarat</option>
                                </select>
                            </div>
                          
                          
                            <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                            
                                <a class="btn btn-primary" onClick={sendData}>{stid?"update Student":"Create Student"}</a>
                            </div>
                        </form>
                    </div>
                    {/* <div class="card-footer text-center">
                        <div class="small"><a href="register.html">Need an account? Sign up!</a></div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
       
    )
}
