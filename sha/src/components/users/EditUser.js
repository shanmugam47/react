import React, { useState,useEffect } from "react";
import axios from 'axios'
import { useHistory,useParams } from "react-router-dom";
//import { propTypes } from "react-bootstrap/esm/Image";

const EditUser = (props) => {
  let history = useHistory();
  
  const {id} = useParams();
   const [user, setUser] = useState({});

 

  const onInputChange = e => {
    setUser( { ...user, [e.target.name]: e.target.value });
  };


 

  const onSubmit = async event => {
    event.preventDefault();
    await axios.put(`${process.env.REACT_APP_BASE_URL}/${id}`,user);
    history.push("/");
  };


    

  
  
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_BASE_URL}/`+props.match.params.id)
    .then(res=>res.json())
    .then((result)=>{
      setUser(result);
    })
    
},[])

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={event => onSubmit(event)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={event => onInputChange(event)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={user.username}
              onChange={event => onInputChange(event)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={user.email}
              onChange={event => onInputChange(event)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={user.phone}
              onChange={event => onInputChange(event)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={user.website}
              onChange={event => onInputChange(event)}
            />
          </div>
          <button className="btn btn-primary btn-block">EditUser</button>
         
        </form>
      </div>
    </div>
  );
};

export default EditUser;