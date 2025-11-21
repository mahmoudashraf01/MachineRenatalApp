import { memo } from 'react';
import { FaShieldAlt, FaBolt, FaThLarge, FaHeadset } from "react-icons/fa";

const WhyChoose = () => {
    return (
        <div className="w-full py-16 px-6 bg-gray-50 flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900">Why Choose MachineRentals?</h2>
            <p className="text-gray-600 mt-2 max-w-2xl leading-relaxed">
                The most trusted platform for heavy equipment rentals. Built for professionals, by professionals.
            </p>


            {/* Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center w-full">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                        <FaShieldAlt />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">Verified Companies</h3>
                    <p className="text-gray-600 mt-2 text-sm max-w-xs">
                        All equipment suppliers are thoroughly vetted and verified for your safety and peace of mind.
                    </p>
                </div>


                {/* Card 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center w-full">
                    <div className="w-12 h-12 rounded-lg bg-yellow-100 text-yellow-500 flex items-center justify-center text-2xl">
                        <FaBolt />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">Fast and Simple Booking</h3>
                    <p className="text-gray-600 mt-2 text-sm max-w-xs">
                        Book equipment in minutes with our streamlined process. No paperwork hassles.
                    </p>
                </div>


                {/* Card 3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center w-full">
                    <div className="w-12 h-12 rounded-lg bg-gray-200 text-gray-700 flex items-center justify-center text-2xl">
                        <FaThLarge />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">Wide Equipment Variety</h3>
                    <p className="text-gray-600 mt-2 text-sm max-w-xs">
                        Access thousands of machines from excavators to cranes, all in one platform.
                    </p>
                </div>


                {/* Card 4 */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center w-full">
                    <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-2xl">
                        <FaHeadset />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">Reliable Support</h3>
                    <p className="text-gray-600 mt-2 text-sm max-w-xs">
                        24/7 customer support to help you with any questions or issues during your rental.
                    </p>
                </div>
            </div>


            {/* Stats */}
            <div className="w-full max-w-5xl mt-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-bold text-blue-600">1000+</h3>
                    <p className="text-gray-700 mt-1">Verified Machines</p>
                </div>


                <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-bold text-blue-600">500+</h3>
                    <p className="text-gray-700 mt-1">Trusted Suppliers</p>
                </div>


                <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-bold text-blue-600">50K+</h3>
                    <p className="text-gray-700 mt-1">Successful Rentals</p>
                </div>


                <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
                    <p className="text-gray-700 mt-1">Customer Support</p>
                </div>
            </div>
        </div>
    );
};

export default memo(WhyChoose);