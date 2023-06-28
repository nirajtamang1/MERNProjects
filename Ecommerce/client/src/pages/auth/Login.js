import React,{ useState } from "react";
import Layout from "../../components/Layout";
import "../../styles/Authstyles.css"
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/auth";
const Login = () =>{
    const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [auth,setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
     const handleSubmit = async (e) =>{
      e.preventDefault();
      try{
        const resp = await axios.post('http://localhost:8000/api/v1/auth/login',{email,password})
        if(resp.data.success){
          toast.success(resp.data.message)
          setAuth({
            ...auth,
            user:resp.data.user,
            token:resp.data.token,
          });
          localStorage.setItem('auth', JSON.stringify(resp.data))
          navigate(location.state || "/")
        }else{
          toast.error("Invalid Information")
        }
      }catch(error){
        console.log(error);
      }
     
     
     }
    return (
        <Layout title={"Register-ecommerce app"}>
        <div className="register">
          
          <form onSubmit={handleSubmit}>
          <h1 className="mb-10 title">LogIn</h1>
            
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
            <button type="submit" className="btn btn-primary" onClick={() => {navigate('/forgetPassword')}}>
              Forget Password
            </button>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            
          </form>
        </div>
      </Layout>
    )
}
export default Login;