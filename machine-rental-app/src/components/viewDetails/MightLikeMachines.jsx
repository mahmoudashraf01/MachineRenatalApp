import { memo } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import MightLikeMachineCard from './MightLikeMachineCard';

const MightLikeMachines = () => {
    return (
        <div className='flex flex-col gap-6 py-5 w-full'>
            <div className='flex max-sm:flex-col max-md:flex-col max-sm:gap-3 max-md:gap-3 justify-between'>
                <div className='flex lg:justify-start lg:items-start justify-center items-center flex-col gap-7'>
                    <h1 className='text-[40px] font-semibold'>You Might Also Like</h1>
                    <p className='text-gray-500'>Similar machines that might interest you</p>
                </div>
                <div className=' flex lg:justify-end justify-center items-center'>
                    <button className='bg-primaryBtn flex justify-center items-center gap-2.5 px-4 py-3  rounded-md text-primary font-medium'>View All Equipment
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className='grid md:grid-cols-2  mx-auto lg:grid-cols-3 sm:grid-cols-1 gap-10'>
                <MightLikeMachineCard />
                <MightLikeMachineCard />
                <MightLikeMachineCard />
            </div>

        </div>
    );
};

export default memo(MightLikeMachines);




