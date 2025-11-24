import { memo } from 'react';
import MachineImg from '../../assets/machineImg.png'
import FilledStar from '../../assets/filledStar.svg'
import EmptyStar from '../../assets/emptyStar.svg'
import Verified from '../../assets/verifyVector.svg'
import Location from '../../assets/location2.svg'
import LeftArrow from '../../assets/leftArrow.svg'
import RightArrow from '../../assets/rightArrow.svg'

const MachineBookingDetails = () => {
    return (
        <div className="w-full rounded-md shadow-2xl bg-white p-4 md:p-8">

            <div className="flex flex-col md:flex-row gap-6">
                {/* LEFT: IMAGES */}
                <div className="w-full lg:w-6/8 md:w-[70%] flex flex-col gap-4">
                    {/* Large Image */}
                    <div className="w-full h-72 md:h-96 bg-gray-200 rounded-xl overflow-hidden relative">
                        <img src={MachineImg} alt="main" className="w-full h-full object-cover" />


                        {/* Left Arrow */}
                        <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2">
                            <img src={LeftArrow} alt="prev" className="w-4 h-4" />
                        </button>


                        {/* Right Arrow */}
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2">
                            <img src={RightArrow} alt="next" className="w-4 h-4" />
                        </button>
                    </div>


                    {/* Small Images */}
                    <div className="grid grid-cols-4 gap-3">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-20 bg-gray-200 rounded-xl overflow-hidden">
                                <img src={MachineImg} alt="thumb" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>


                {/* RIGHT: DETAILS */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div className='flex gap-2 items-center'>
                        <h1 className="text-2xl lg:text-[36px] font-bold">CAT 320D Excavator</h1>
                        <img src={Verified} alt="verified" className="w-6 h-6 mr-2" />
                    </div>


                    <div className="text-sm text-gray-500">Excavator | ID: 1</div>


                    {/* Rating + Location */}
                    <div className="flex items-center gap-3 text-sm">
                        <div className="flex items-center gap-1">
                            <img src={FilledStar} alt="star" className="w-4 h-4" />
                            <img src={FilledStar} alt="star" className="w-4 h-4" />
                            <img src={FilledStar} alt="star" className="w-4 h-4" />
                            <img src={FilledStar} alt="star" className="w-4 h-4" />
                            <img src={EmptyStar} alt="star" className="w-4 h-4" />
                            <span>4.8 (24 reviews)</span>
                        </div>


                        <div className="flex items-center gap-1">
                            <img src={Location} alt="loc" className="w-4 h-4" />
                            <span>Chicago, IL</span>
                        </div>
                    </div>


                    {/* Status */}
                    <div className="flex flex-col items-start gap-3 text-sm">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                            Available
                        </span>
                        <span className="bg-red-100 rounded-full text-red-500 px-3 py-1 text-xs font-semibold">-20%</span>
                    </div>


                    {/* Price */}
                    <div>
                        <div className="text-lg font-semibold">Price from $100 / day</div>
                        <div className="text-gray-400 line-through text-sm">was $120</div>
                    </div>

                    <hr className='text-[#2E3A4533]' />
                    {/* Pricing Plans */}
                    <div className="flex flex-wrap gap-3 mt-2">
                        <div className="border border-gray-300 rounded-xl px-4 py-2 text-center">
                            <div className="text-sm text-gray-600">Daily Rate</div>
                            <div className="font-bold text-secondary">$350</div>
                        </div>
                        <div className="border border-gray-300 rounded-xl px-4 py-2 text-center">
                            <div className="text-sm text-gray-600">Weekly Rate</div>
                            <div className="font-bold text-secondary">$350</div>
                        </div>
                        <div className="border border-gray-300 rounded-xl px-4 py-2 text-center">
                            <div className="text-sm text-gray-600">Monthly Rate</div>
                            <div className="font-bold text-secondary">$350</div>
                        </div>
                    </div>



                    {/* Button */}
                    <button className="bg-blue-600 text-white py-3 rounded-xl mt-3 w-full ">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(MachineBookingDetails);