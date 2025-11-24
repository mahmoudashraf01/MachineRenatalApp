import { memo } from 'react';
import MachineCard from '../../components/Landing/MachineCard';
import { FaArrowRight } from 'react-icons/fa';
import MachinesFilter from './MachinesFilter';


const FilteredMachines = () => {
    return (



        <div className=' justify-center items-center w-full bg-equipmentBg pb-10'>
            <div className='flex max-sm:flex-col max-md:flex-col justify-start max-sm:justify-center items-start max-sm:items-center max-md:items-center gap-10 px-10 py-10'>
                <MachinesFilter />
                <div className='grid  md:grid-cols-1 mx-auto lg:grid-cols-3 sm:grid-cols-1 gap-10'>
                    <MachineCard />
                    <MachineCard />
                    <MachineCard />
                    <MachineCard />
                    <MachineCard />
                    <MachineCard />
                </div>

            </div>
        </div>
    );
};

export default memo(FilteredMachines);


