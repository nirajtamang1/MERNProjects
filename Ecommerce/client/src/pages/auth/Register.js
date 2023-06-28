import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/Authstyles.css"
const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
   const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const resp = await axios.post('http://localhost:8000/api/v1/auth/register',{name, email, phone, address,password,answer})
      if(resp.data.success){
        toast.success(resp.data.message)
        // navigate("/login")
      }else{
        alert(resp.data.message);
      }
    }catch(error){
      console.log(error);
    }
   
   
   }
  return (
    <Layout title={"Register-ecommerce app"}>
      <div className="register">
        
        <form onSubmit={handleSubmit}>
        <h1 className="mb-10 title">Register</h1>
          <div className="mb-3">
            <input
              type="text"
              value = {name}
              onChange={(e) =>setName(e.target.value)}
              className="form-control"
              id="formName"
              placeholder="Enter your name"
              required
            />
          </div>
         
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="form-control"
              id="formPhone"
              placeholder="Enter your Phone number"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              type="text"
              className="form-control"
              id="formaddress"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              id="formEmail"
              placeholder="Enter your Eamil"
              required
            />
          </div>
          <div className="mb-3">
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3">
            <input
            value={answer}
            onChange={(e)=>setAnswer(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputAnswer1"
              placeholder="what is your favriote food"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};
export default Register;
