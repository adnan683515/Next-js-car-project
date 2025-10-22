import LoginForm from "./components/page"

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-[500px] border-2 border-[#234C6A] rounded-2xl p-8 bg-white transition-transform duration-300 hover:scale-[1.02]">
                <h2 className="text-3xl font-bold text-center text-[#234C6A] mb-6">
                    Login
                </h2>

                <LoginForm></LoginForm>
            </div>
        </div>
    )
}

export default LoginPage
