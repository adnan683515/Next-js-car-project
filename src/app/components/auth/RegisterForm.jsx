"use client"
import { Regsiteruser } from "@/app/(auth)/auth";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const RegisterForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const onSubmitFrom =  async (e) => {
        e.preventDefault()

        const name = e.target.username.value 
        const email = e.target.email.value 
        const password  = e.target.password.value 
        const confirmedPassword = e.target.confirmedpass.value

        if(password !== confirmedPassword){
            
            toast.error('password does not match')
            return
        }
        const result = await Regsiteruser({name,email,password})

        if(result?.status == 409){
            toast.error(`${result?.message}`)
            return
        }
        toast.success('Registration Successfully!')
        
    }


    return (
        <div>
            <form onSubmit={(e) => onSubmitFrom(e)} className="space-y-4">

                <div>
                    <label className="block text-[#234C6A] font-medium mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        className="w-full border border-[#234C6A] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#234C6A]"
                    />
                </div>

                <div>
                    <label className="block text-[#234C6A] font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full border border-[#234C6A] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#234C6A]"
                    />
                </div>


                <div>
                    <label className="block text-[#234C6A] font-medium mb-1">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            name="password"
                            className="w-full border border-[#234C6A] rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#234C6A]"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-[#234C6A] cursor-pointer"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>

                <div>
                    <label className="block text-[#234C6A] font-medium mb-1">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <input
                            type={showConfirm ? "text" : "password"}
                            placeholder="Confirm password"
                            name="confirmedpass"
                            className="w-full border border-[#234C6A] rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#234C6A]"
                        />
                        <span
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute right-3 top-3 text-[#234C6A] cursor-pointer"
                        >
                            {showConfirm ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>


                <button
                    type="submit"
                    className="w-full bg-[#234C6A] text-white py-2 rounded-md hover:bg-[#1d3e56] transition duration-200"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;