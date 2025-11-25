import { memo } from 'react';
import MachineImg from '../../assets/machineImg.png'


const MachineMoreImages = () => {
    return (
        <div className='grid w-full  grid-cols-3 max-sm:grid-cols-1 gap-4'>
            <img src={MachineImg} alt="" className='h-[336px] w-full object-cover' />
            <img src={MachineImg} alt="" className='h-[336px] w-full object-cover' />
            <img src={MachineImg} alt="" className='h-[336px] w-full object-cover' />
            <img src={MachineImg} alt="" className='h-[336px] w-full object-cover' />
            <img src={MachineImg} alt="" className='h-[336px] w-full object-cover' />
        </div>
    );
};

export default memo(MachineMoreImages);