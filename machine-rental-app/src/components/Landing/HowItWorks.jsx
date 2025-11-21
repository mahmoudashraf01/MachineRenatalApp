import { memo } from 'react';
import { FaSearch, FaPaperPlane, FaBars } from "react-icons/fa";

const HowItWorks = () => {
    return (
        <div className="w-full py-16 px-6 flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="text-gray-600 mt-2 max-w-xl">
                Get started in three easy steps. Simple, fast, and reliable.
            </p>


            {/* Steps */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
                {/* Step 1 */}
                <div className="flex flex-col items-center w-full">
                    <div className="relative">
                        <div className="w-28 h-28 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl shadow-md">
                            <FaSearch />
                        </div>
                        {/* Number badge */}
                        <span className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-semibold text-gray-900 shadow-md">
                            1
                        </span>
                    </div>


                    <h3 className="mt-6 text-xl font-semibold text-gray-900">Search for Machines</h3>
                    <p className="text-gray-600 mt-2 max-w-xs leading-relaxed">
                        Browse our extensive catalog of verified heavy equipment. Filter by type, location, and availability.
                    </p>
                </div>


                {/* Step 2 */}
                <div className="flex flex-col items-center w-full">
                    <div className="relative">
                        <div className="w-28 h-28 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl shadow-md">
                            <FaPaperPlane />
                        </div>
                        <span className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-semibold text-gray-900 shadow-md">
                            2
                        </span>
                    </div>


                    <h3 className="mt-6 text-xl font-semibold text-gray-900">Send Booking Request</h3>
                    <p className="text-gray-600 mt-2 max-w-xs leading-relaxed">
                        Select your dates and submit a booking request. Get instant confirmation from verified suppliers.
                    </p>
                </div>


                {/* Step 3 */}
                <div className="flex flex-col items-center w-full">
                    <div className="relative">
                        <div className="w-28 h-28 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl shadow-md">
                            <FaBars />
                        </div>
                        <span className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-semibold text-gray-900 shadow-md">
                            3
                        </span>
                    </div>


                    <h3 className="mt-6 text-xl font-semibold text-gray-900">Start Your Project</h3>
                    <p className="text-gray-600 mt-2 max-w-xs leading-relaxed">
                        Receive your equipment on time and start your project with confidence. We're here to support you.
                    </p>
                </div>
            </div>


            {/* CTA Section */}
            <div className="mt-14 flex flex-col items-center">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ready to get started?</h3>


                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition">
                        Browse Equipment
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(HowItWorks);