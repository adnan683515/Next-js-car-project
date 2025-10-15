const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-[500px] border-2 border-[#234C6A] rounded-2xl p-8 bg-white transition-transform duration-300 hover:scale-[1.02]">
                <h2 className="text-3xl font-bold text-center text-[#234C6A] mb-6">
                    Login
                </h2>

                <form className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#234C6A]"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#234C6A]"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#234C6A] text-white py-2 rounded-lg font-semibold transition-transform duration-200 hover:scale-[1.03]"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
