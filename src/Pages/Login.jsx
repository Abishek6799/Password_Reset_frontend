import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrFormViewHide } from "react-icons/gr";
import { BiShowAlt } from "react-icons/bi";

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    await axios
      .post("https://password-rest-backend-wdjk.onrender.com/api/auth/login", payload)
      .then((res) => {
        toast.success(res.data.message);
        setToken(res.data.token)
        navigate("/Welcome");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
    setEmail("");
    setPassword("");
  };


  return (
    <div className="bg-gradient-to-r from-green-500 to-lime-500 w-screen h-screen fixed">
        <div className="w-5/6 sm:w-4/5 lg:w-3/6 mx-auto border-black shadow-2xl mt-28 sm:mt-44 rounded-3xl bg-white relative">
        <h1 className="text-center text-2xl font-bold pt-5 text-rose-500">Login</h1>
        <form onSubmit={handleSubmit} className="container flex flex-col gap-8 px-10 md:px-16 lg:px-20 pt-5">
        <p className="flex flex-wrap sm:flex-nowrap items-center gap-4 ">
          <label htmlFor="email" className="text-2xl w-1/3 text-blue-500">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email Id"
            required
            className="border-2 border-black w-full sm:w-2/3  p-2 hover:rounded-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p className="flex flex-wrap sm:flex-nowrap items-center gap-4 ">
          <label htmlFor="password" className="text-2xl w-1/3 text-blue-500">Password</label>
          <div className=" w-full sm:w-2/3 z-50 relative  items-center">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter Your Password"
            required
            className="flex-grow border-2 border-black hover:rounded-full z-0 w-full p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2 scale-150 px-2" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ?  <BiShowAlt />:<GrFormViewHide />}
          </button>
          </div>
          
        </p>
        <br></br>
        <button type="submit" className="bg-[#01ec64] -mt-12 text-black hover:text-white border border-black text-lg  hover:bg-[#179b4e] transition-all duration-300 ease-in-out py-2 w-full hover:rounded-full">Login</button>
        <div className="flex justify-between text-blue-500 -mt-5 mb-5 ">
        <button className="hover:underline">
        <Link to={"/"}> Don't Have An Account ? Register</Link>
      </button>
    
      <button className="hover:underline">
        <Link to={"/forgot-password"}>Forgot Password</Link>
      </button>
        </div>
        
      </form>
  
      
        </div>
      
    </div>
  );
};

export default Login;