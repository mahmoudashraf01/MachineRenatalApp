import { memo } from "react";
import { FaSearch, FaMapMarkerAlt, FaBox, FaCalendarAlt } from "react-icons/fa";

const SearchContainer = () => {
    return (
        <div className=" w-full px-10">
            <div className="w-full bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4">
                {/* Desktop & Large Screens */}
                <div className=" grid lg:grid-cols-5 md:grid-cols-4 gap-4 items-end">
                    {/* Equipment Name */}
                    <div className="flex flex-col gap-2 w-full">
                        <label className="font-semibold text-gray-700 flex items-center gap-2">
                            <FaBox className='text-primaryBtn' /> Equipment Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Equipment Name"
                            className="border rounded-lg p-2 w-full"
                        />
                    </div>

                    {/* Category */}
                    <div className="flex flex-col gap-2 w-full">
                        <label className="font-semibold text-gray-700 flex items-center gap-2">
                            <FaBox className='text-primaryBtn' /> Category
                        </label>
                        <input
                            type="text"
                            placeholder="Category"
                            className="border rounded-lg p-2 w-full"
                        />
                    </div>

                    {/* Location */}
                    <div className="flex flex-col gap-2 w-full">
                        <label className="font-semibold text-gray-700 flex items-center gap-2">
                            <FaMapMarkerAlt className='text-primaryBtn' /> Location
                        </label>
                        <input
                            type="text"
                            placeholder="Enter city or zip code"
                            className="border rounded-lg p-2 w-full"
                        />
                    </div>

                    {/* Date From */}
                    <div className="flex flex-col gap-2 w-full">
                        <label className="font-semibold text-gray-700 flex items-center gap-2">
                            <FaCalendarAlt className='text-primaryBtn' /> Date From
                        </label>
                        <input
                            type="date"
                            className="border rounded-lg p-2 w-full"
                        />
                    </div>

                    {/* Date To */}
                    <div className="flex flex-col gap-2 w-full">
                        <label className="font-semibold text-gray-700 flex items-center gap-2">
                            <FaCalendarAlt className='text-primaryBtn' /> Date To
                        </label>
                        <input
                            type="date"
                            className="border rounded-lg p-2 w-full"
                        />
                    </div>
                </div>



                {/* Search Button */}
                <div className="flex justify-end mt-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                        <FaSearch /> Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(SearchContainer);


