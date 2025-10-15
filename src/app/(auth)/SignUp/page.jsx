import RegisterForm from "@/app/components/auth/RegisterForm";


const SignUp = () => {


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-[500px] border border-[#234C6A] rounded-xl p-6 shadow-md bg-white">
                <h2 className="text-center text-[40px] md:text-[50px] font-extrabold uppercase tracking-[0.6em] text-[#234C6A] drop-shadow-md">
                    SIGN&nbsp;&nbsp;UP
                </h2>


                <RegisterForm></RegisterForm>
            </div>
        </div>
    );
};

export default SignUp;
