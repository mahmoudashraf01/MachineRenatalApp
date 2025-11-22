import { memo } from 'react';
import { FaShieldAlt, FaBolt, FaThLarge, FaHeadset } from "react-icons/fa";
import Verify from '../../assets/verifyVector.svg';
import Support from '../../assets/supportVector.svg';
import Transperancy from '../../assets/transperancyVector.svg';
import Efficiency from '../../assets/efficencyVector.svg';


const CoreValues = () => {
    return (
        <div className="w-full py-16 px-6 bg-gray-50 flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values?</h2>
            <p className="text-gray-600 mt-2 max-w-2xl leading-relaxed">
                The principles that guide everything we do and define who we are as a company.
            </p>


            {/* Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center w-full">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                        <img src={Verify} alt="" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">Ease</h3>
                    <p className="text-gray-600 mt-2 text-sm max-w-xs">
                        Renting equipment should be simple and straightforward, with minimal steps and no complexity.
                    </p>
                </div>


                {/* Card 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center w-full">
                    <div className="w-12 h-12 rounded-lg bg-yellow-100 text-yellow-500 flex items-center justify-center text-2xl">
                        <FaBolt />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">Trust</h3>
                    <p className="text-gray-600 mt-2 text-sm max-w-xs">
                        We carefully verify suppliers and equipment so customers can rely on what they get with confidence.
                    </p>
                </div>


                {/* Card 3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center w-full">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-2xl">
                         <img src={Transperancy} alt="" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">Transparencyy</h3>
                    <p className="text-gray-600 mt-2 text-sm max-w-xs">
                        Prices and details are clear from the start, with no hidden fees or unexpected charges.
                    </p>
                </div>


                {/* Card 4 */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center w-full">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-2xl">
                         <img src={Efficiency} alt="" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">Reliable Support</h3>
                    <p className="text-gray-600 mt-2 text-sm max-w-xs">
                        24/7 customer support to help you with any questions or issues during your rental.
                    </p>
                </div>

                {/* Card 5 */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center w-full">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-2xl">
                         <img src={Verify} alt="" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">Variety</h3>
                    <p className="text-gray-600 mt-2 text-sm max-w-xs">
                        A wide range of equipment from various suppliers in one place, making it easy to find what fits your needs.
                    </p>
                </div>
                {/* Card 6 */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center w-full">
                    <div className="w-12 h-12 rounded-lg bg-[#F6C90E40] flex items-center justify-center text-2xl">
                        <img src={Support} alt="" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">Support</h3>
                    <p className="text-gray-600 mt-2 text-sm max-w-xs">
                        We support you every step of the way, ensuring the equipment arrives and works smoothly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default memo(CoreValues);