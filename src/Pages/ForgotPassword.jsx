import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
          .post("https://password-rest-backend-wdjk.onrender.com/api/auth/forgot-password", {email})
          .then((res) => {
            toast.success(res.data.message);
           navigate("/login")
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.response.data.message);
          });
      };


    return (
    <div className="bg-gradient-to-r from-green-500 to-lime-500 w-screen h-screen fixed">
        <div className="w-5/6 sm:w-4/5 lg:w-3/6 mx-auto border-black shadow-2xl mt-28 sm:mt-44 rounded-3xl bg-white relative">
        <h1 className="text-center text-2xl font-bold pt-5 text-rose-500">Forgot-Password</h1>
        <form onSubmit={handleSubmit} className="container flex flex-col gap-8 px-10 md:px-16 lg:px-20 pt-5">
        <p className="flex flex-wrap sm:flex-nowrap items-center gap-4 ">
          <label htmlFor="email" className="text-2xl w-1/3 text-blue-500">Email</label>
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
        <button type="submit" className="bg-[#01ec64] mb-7 text-black hover:text-white border border-black text-lg  hover:bg-[#179b4e] transition-all duration-300 ease-in-out py-2 w-full hover:rounded-full">Send</button>
      </form>
        </div>
      
    </div>
    );
};

export default ForgotPassword;