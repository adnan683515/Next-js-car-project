"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialLogin from "./SocailLogin/SocialLogin";

const LoginForm = () => {
    const router = useRouter();

    const handleLoginSubmitForm = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            console.log("result", result);

            if (result?.error) {
                toast.error("Authentication failed!");
            } else {
                toast.success("Login successful!");
                router.push("/");
            }
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong!");
        }
    };

    return (
        <div>
            <form onSubmit={handleLoginSubmitForm} className="space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#234C6A]"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#234C6A]"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#234C6A] text-white py-2 rounded-lg font-semibold transition-transform duration-200 hover:scale-[1.03]"
                >
                    Login
                </button>
            </form>

            <div className="mt-[10px]">
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default LoginForm;
