import React, { useEffect, useState } from 'react'
import axios from 'axios';

export  function ListStudents(props) {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/list-student').then(
            (res)=>{
               
                setStudents(res.data.data);
            }
        )
      
    }, [])
    function doAction(id, action){
        if(action==="delete")
        {
            axios.get('http://localhost:3000/delete-student?id='+id).then(
                (res)=>{
                            console.log(res.data.data);




                            axios.get('http://localhost:3000/list-student').then(
                                (res)=>{
                                    console.log(res.data.data);
                                    setStudents(res.data.data);
                                }
                            )
                   
                }
            )

        }
        else if(action=="update")
        {
            props.history.push("/create-student/"+id);
        }
    }
    var studentList = students.map((st)=>{

       return <tr key={st._id}>
        <td>{st.name}</td>
        <td>{st.age}</td>
        <td>{st.marks}</td>
        <td>{st.email}</td>
        <td ><button onClick={()=>{doAction(st._id, "delete")}}> delete </button></td>
        <td><button onClick={()=>{doAction(st._id, "update")}}> Update </button></td>
        </tr>

    })
    return (
        <div class="container-fluid">
        <h1 class="mt-4">Tables</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
            <li class="breadcrumb-item active">Tables</li>
        </ol>
    
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-table mr-1"></i>
                DataTable Example
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Marks</th>
                                <th>Email</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            <th>Name</th>
                                <th>Age</th>
                                <th>Marks</th>
                                <th>Email</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </tfoot>

                        <tbody>
                            {studentList}
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
       
    )
}
