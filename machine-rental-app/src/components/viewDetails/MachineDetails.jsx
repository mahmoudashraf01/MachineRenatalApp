import { memo } from 'react';
import MachineBookingDetails from './MachineBookingDetails';
import Machineinfo from './Machineinfo';


const MachineDetails = () => {
    return (
        <div className='flex flex-col bg-[#F4F5F7] px-10 py-10 gap-6'>
            <MachineBookingDetails />
            <Machineinfo />
        </div>
    );
};

export default memo(MachineDetails);