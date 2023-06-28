import React from "react";
import Layout from "../../components/Layout";
import "../../styles/Authstyles.css";
import { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:8000/api/v1/auth/forget-password", {
        email,
        newPassword,
        answer
      });
      if (resp.data.success) {
        toast.success(resp.data.message);
        
        navigate("/login");
      } else {
        toast.error("Invalid Information");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Ecommerce app - Forget Password"}>
      <div className="register">
        <form onSubmit={handleSubmit}>
          <h1 className="mb-10 title">Forget Password</h1>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="formEmail"
              placeholder="Enter your Eamil"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="foranswer"
              placeholder="Enter your favorite Food"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};
export default ForgetPassword;
