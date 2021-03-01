import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";




const Home =()=>
{

    const[users,setuser]=useState([]);

    
    const loadusers = async ()=>
{
    const result = await axios.get("http://localhost:3003/users");
    setuser(result.data);
    
    
}
  useEffect(()=>{
    loadusers();
},[]);
  

const deleteUser = async id => {
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/${id}`);
    loadusers();
}



    return(
        <div>
            <table className="table border shadow">
                <thead  className="thead-dark">
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">StudentName</th>
                        <th scope="col">userName</th>
                        <th scope="col">Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => (
                                <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td> 
                                <td>
                                    <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>view</Link>
                                    <Link className="btn btn-outline-primary mr-2" 
                                     to={`/users/edit/${user.id}`}>Edit</Link>
                                    <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                   
                                    </td>
                                </tr>
                                
                            ))
                       
                       
                       }
                    </tbody>
            </table>
        </div>
    )
}
export default Home;