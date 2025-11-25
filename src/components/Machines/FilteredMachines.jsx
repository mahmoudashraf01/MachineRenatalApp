import { memo } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import MachinesFilter from './MachinesFilter';
import FilteredMachineCards from './FilteredMachineCards';


const FilteredMachines = () => {
    return (



        <div className=' justify-center items-center w-full bg-equipmentBg pb-10'>
            <div className='flex max-sm:flex-col max-md:flex-col justify-start max-sm:justify-center items-start max-sm:items-center max-md:items-center gap-10 px-10 py-10'>
                <MachinesFilter />
                <div className='flex flex-col gap-7 w-full'>
                    <div className='flex lg:justify-start justify-center gap-2'>
                        <h1 className='lg:text-[32px] text-[20px] font-bold '>Available Machines</h1>
                        <p>(12 results)</p>
                    </div>
                    <div className=' grid md:grid-cols-1 mx-auto xl:grid-cols-3 lg:grid-cols-2  sm:grid-cols-1 gap-10'>
                        <FilteredMachineCards />
                        <FilteredMachineCards />
                        <FilteredMachineCards />
                        <FilteredMachineCards />
                        <FilteredMachineCards />
                        <FilteredMachineCards />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(FilteredMachines);


