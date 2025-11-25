import { memo } from 'react';
import Search from '../../assets/search.svg'
import SearchBTN from '../../assets/searchBtn.svg'
import Location from '../../assets/location2.svg'

const SearchMachine = () => {
    return (
        <div className='w-full px-5'>
            <div className="w-full bg-white shadow rounded-xl p-4 md:p-6 ">

                <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
                    {/* Keyword */}
                    <div className="w-full">
                        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
                            <img src={Search} alt="search" className="w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search by keyword (e.g , Excavator ,Crane ,Loader)"
                                className="w-full outline-none text-sm"
                            />
                        </div>
                    </div>


                    {/* Category */}
                    <div className="w-full">
                        <div className="flex items-center text-gray-500 gap-2 border border-gray-300 rounded-lg px-3 py-2">
                            <select className="w-full outline-none text-sm bg-transparent">
                                <option>All Categories</option>
                            </select>
                        </div>
                    </div>


                    {/* Location */}
                    <div className="w-full">
                        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
                            <img src={Location} alt="location" className="w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full outline-none text-sm"
                            />
                        </div>
                    </div>


                    {/* Newest */}
                    <div className="w-full">
                        <div className="flex items-center text-gray-500 gap-2 border border-gray-300 rounded-lg px-3 py-2">
                            <select className="w-full outline-none text-sm bg-transparent">
                                <option>Newest</option>
                            </select>
                        </div>
                    </div>


                    {/* Search Button */}
                    <div className="flex  justify-center items-center">
                        <button className="flex  justify-center items-center bg-blue-600 w-full text-white px-6 py-2 rounded-lg gap-2 hover:bg-blue-700 transition-all">
                            <img src={SearchBTN} alt="search" className="w-4 h-4" />
                            Search
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default memo(SearchMachine);