import { memo } from 'react';
import AuthImg from '../assets/auth.png'
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            <div className="relative hidden lg:flex items-center justify-center rounded-r-3xl overflow-hidden">
                {/* الصورة */}
                <img
                    src={AuthImg}
                    alt="Auth background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0A25408C]/50"></div>
                <div className="absolute text-white px-10 text-center">
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-yellow-400 text-black font-bold text-sm rounded-md px-2 py-1 mr-2">
                            logo
                        </div>
                        <h1 className="text-3xl font-semibold">
                            Machine<span className="text-yellow-400">Rentals</span>
                        </h1>
                    </div>
                    <p className="max-w-md text-gray-200 text-sm leading-relaxed">
                        Your trusted platform for heavy machinery rentals. Connecting equipment
                        owners with construction professionals.
                    </p>
                </div>
            </div>



            <div className="flex items-center justify-center bg-white p-6">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                    {/* Tabs (Login / Register) */}
                    <div className="flex justify-center mb-8 space-x-6 text-gray-500">
                        <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
                            Login
                        </button>
                        <button className="hover:text-blue-600">Register</button>
                    </div>

                    {/* Welcome Text */}
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-800">Welcome Back!</h2>
                        <p className="text-gray-500 mt-1">
                            Sign in to manage your rentals and bookings.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-4">
                        {/* Email */}
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Remember me & Forgot password */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-blue-600" />
                                <span>Remember me</span>
                            </label>
                            <button className="text-blue-600 hover:underline">
                                Forgot password?
                            </button>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Login
                        </button>

                        {/* Divider */}
                        <div className="flex items-center my-4">
                            <div className="flex-1 h-px bg-gray-300" />
                            <span className="px-3 text-sm text-gray-500">or continue with</span>
                            <div className="flex-1 h-px bg-gray-300" />
                        </div>

                        {/* Google Button */}
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-2 border rounded-lg py-3 hover:bg-gray-50 transition"
                        >
                            <FcGoogle size={22} />
                            <span className="text-gray-700 font-medium">Google</span>
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don’t have an account?{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default memo(Auth);