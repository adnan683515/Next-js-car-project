"use client";
import { signIn } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {


    const handlesocialLogin = async (providerName) => {

        const result = await signIn(providerName, { redirect: false })
        console.log(result)
    }
    return (
        <div className="flex justify-center items-center">
            <div className="flex gap-3">
                {/* Google */}
                <button
                    onClick={() => handlesocialLogin('google')}
                    className="flex items-center justify-center gap-2 w-[200px] py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
                >
                    <FaGoogle size={22} className="text-[#4285F4]" />
                    <span className="text-sm font-medium text-gray-700">
                        Sign in with Google
                    </span>
                </button>

                {/* GitHub */}
                <button
                    onClick={() => handlesocialLogin('github')}
                    className="flex items-center justify-center gap-2 w-[200px] py-2 rounded-lg bg-black hover:bg-[#24292F] transition"
                >
                    <FaGithub size={22} className="text-white" />
                    <span className="text-sm font-medium text-white">
                        Sign in with GitHub
                    </span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
