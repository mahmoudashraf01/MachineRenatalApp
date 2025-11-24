import { memo } from 'react';
import machineImg from '../../assets/machine_item.png'
import { AiOutlineVerified } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsShieldCheck } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const FilteredMachineCard = () => {
    return (
        <div className='relative w-full max-w-sm mx-auto overflow-hidden h-[475px] bg-primary rounded-2xl shadow-2xl'>
            <div className='w-[424px] h-[305px] rounded-t-2xl relative flex items-center justify-center overflow-hidden' >
                <img
                    src={machineImg}
                    alt="hero"
                    className="absolute top-0 left-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/20"></div>

            </div>
            <div className='absolute top-3 left-2  flex items-center justify-center w-[116px] h[32px] rounded-2xl bg-secondary p-2.5'>
                Excavator
            </div>

            <div className=' absolute top-3 right-2 flex items-center justify-center gap-1.5 w-[116px] h[32px] rounded-2xl bg-primaryBtn p-2.5 text-primary'>
                <BsShieldCheck />
                Verified
            </div>
            <div className='mx-4 my-4 border-b border-gray-200'>
                <p className='text-[20px] font-semibold'>CAT 320D Excavator </p>
                <div className='flex gap-2.5 py-4'>
                    <BiMap className='text-primaryBtn' />
                    <p>Chicago ,IL</p>
                </div>
            </div >
            <div className='flex justify-between items-center mx-4'>
                <div>
                    <h1 className='text-secondary font-bold text-2xl'>820$</h1>
                    <p className='text-gray-500 text-[12px]'>per day</p>
                </div>
                <NavLink to = '/viewDetails'>
                    <button className='w-32 h-9 border border-primaryBtn rounded-md font-medium text-primaryBtn'>
                        View Details
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default memo(FilteredMachineCard);