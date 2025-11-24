import { memo } from 'react';
import MachineBookingDetails from './MachineBookingDetails';


const MachineDetails = () => {
    return (
        <div className='bg-[#F4F5F7] px-10 py-10'>
            <MachineBookingDetails />
        </div>
    );
};

export default memo(MachineDetails);