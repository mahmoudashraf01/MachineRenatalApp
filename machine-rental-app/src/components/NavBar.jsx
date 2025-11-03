import Rect, { memo, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';

const NavBar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-24 bg-navColor mx-auto px-4 text-primary'>
            <div className='flex justify-between gap-3'>
                <button className='bg-secondary w-[5opx] h-[50px] p-2.5  rounded-md text-[18px] font-medium'>
                    Logo
                </button>
                <h1 className=' text-[26px] font-semibold text-primary pt-[18px]'>MachineRentals.</h1>
            </div>
            <div>
                <ul className='hidden md:flex'>
                    <li className='p-4 text-[18px]  font-medium'>Home</li>
                    <li className='p-4 text-[18px] font-medium'>Machines</li>
                    <li className='p-4 text-[18px] font-medium'>About</li>
                    <li className='p-4 text-[18px] font-medium'>About</li>
                    <li className='p-4 text-[18px] font-medium'>Contact</li>
                </ul>
            </div>
            <div className='flex max-sm:hidden justify-between gap-2.5'>
                <PrimaryButton />
                <SecondaryButton />
            </div>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full z-50 bg-navColor ease-in-out duration-500' : 'fixed -left-full top-0 w-[60%] border-r border-r-gray-900 h-full bg-navColor z-50 ease-in-out duration-500'}>
                <div className='flex items-center py-4 px-4 gap-3'>
                    <button className='bg-secondary w-12 h-10 p-2.5  rounded-md text-[12px] font-medium'>
                        Logo
                    </button>
                    <h1 className=' text-[12px] font-semibold text-primary '>MachineRentals.</h1>
                </div>
                <li className='p-4 border-b border-gray-300'>Home</li>
                <li className='p-4 border-b border-gray-300'>Machines</li>
                <li className='p-4 border-b border-gray-300'>About</li>
                <li className='p-4 border-b border-gray-300'>Contact</li>
            </ul>
        </div>
    );
};

export default memo(NavBar);