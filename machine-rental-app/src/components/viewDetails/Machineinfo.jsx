import { memo, useState } from 'react';
import TechnicalSpecifications from './TechnicalSpecifications';

const Machineinfo = () => {
    const [activeTab, setActiveTab] = useState("specs");

    return (
        <div className='w-full flex flex-col rounded-md shadow-2xl bg-white p-4 md:p-8'>

            {/* Tabs */}
            <div className='flex gap-5 max-sm:justify-between  pb-3'>
                <button
                    onClick={() => setActiveTab("specs")}
                    className={`text-base font-medium pb-2 ${activeTab === "specs"
                        ? "text-navColor border-b-2 border-secondary"
                        : "text-[#0A254066]"
                        }`}
                >
                    Specifications
                </button>

                <button
                    onClick={() => setActiveTab("photos")}
                    className={`text-base font-medium pb-2 ${activeTab === "photos"
                        ? "text-navColor border-b-2 transition-colors duration-150 border-secondary"
                        : "text-[#0A254066]"
                        }`}
                >
                    Photos/Gallery
                </button>
            </div>

            {/* Content */}
            <div className='mt-5'>
                {activeTab === "specs" && (
                    <TechnicalSpecifications />
                )}

                {activeTab === "photos" && (
                    <h1 className='text-xl font-semibold text-navColor'>
                        Photos
                    </h1>
                )}
            </div>
        </div>
    );
};

export default memo(Machineinfo);
