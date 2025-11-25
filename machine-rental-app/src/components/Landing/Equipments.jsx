import { memo } from 'react';

import MachineCard from './MachineCard';
import { FaArrowRight } from 'react-icons/fa';


const Equipments = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full bg-equipmentBg pb-10'>
            <div className='flex flex-col gap-10 justify-center items-center my-20 mx-auto'>
                <h1 className='leading-normal text-center text-[40px] font-bold max-sm:text-[30px]'>Popular Heavy Equipment</h1>
                <p className='leading-normal text-center text-[20px]'>Verified listings from trusted suppliers. Find the perfect machine for your project.</p>
            </div>
            <div className='grid md:grid-cols-2  mx-auto lg:grid-cols-3 sm:grid-cols-1 gap-10'>
                <MachineCard />
                <MachineCard />
                <MachineCard />
                <MachineCard />
                <MachineCard />
                <MachineCard />
            </div>
            <div className=' flex justify-center items-center my-10'>
                <button className='bg-primaryBtn flex justify-center items-center gap-2.5 w-[260px] h-[46px] rounded-md text-primary font-medium'>View All Equipment
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default memo(Equipments);


