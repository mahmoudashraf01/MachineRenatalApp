import { memo } from 'react';
import Phone from '../../assets/phone.svg';
import Email from '../../assets/email.svg';
import WorkingHours from '../../assets/Group.svg';

const ContactSection = () => {
    return (
        <div className="w-full bg-[#f3f4f6] py-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* LEFT CARD - CONTACT SUPPORT FORM */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        Contact Support
                    </h2>

                    <p className="text-gray-600 text-sm mb-6">
                        We’re here to help with anything related to rentals, machine listings,
                        delivery arrangements, and account issues.
                    </p>

                    {/* FORM */}
                    <div className="flex flex-col gap-4">

                        <div>
                            <label className="text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full mt-1 border border-gray-200 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full mt-1 border border-gray-200 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Your Company <span className="text-gray-400">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your company"
                                className="w-full mt-1 border border-gray-200 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                rows={4}
                                placeholder="Please describe your issue in details..."
                                className="w-full mt-1 border border-gray-200 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                            Send to support
                        </button>
                    </div>
                </div>

                {/* RIGHT CARD - CONTACT INFO */}
                <div className="bg-white p-6 rounded-xl shadow-md  h-fit">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Contact Information
                    </h2>

                    {/* Phone */}
                    <div className="flex items-start gap-4 pb-4 border-b border-gray-300">
                        <div className="w-12 h-12 rounded-lg bg-[#1F6FEB1C] flex items-center justify-center text-2xl">
                            <img src={Phone} alt="phone" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Phone Support</h3>
                            <p className="text-gray-600 text-sm">+00000000000000000</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4 py-4 border-b border-gray-300">
                        <div className="w-12 h-12 rounded-lg bg-[#1F6FEB1C] flex items-center justify-center text-2xl">
                            <img src={Email} alt="email" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Email Support</h3>
                            <p className="text-primaryBtn text-sm">support@machinerentals.com</p>
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-4 pt-4">
                        <div className="w-12 h-12 rounded-lg bg-[#1F6FEB1C] flex items-center justify-center text-2xl">
                            <img src={WorkingHours} alt="working hours" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Working Hours</h3>
                            <p className="text-gray-600 text-sm">24/9</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default memo(ContactSection);