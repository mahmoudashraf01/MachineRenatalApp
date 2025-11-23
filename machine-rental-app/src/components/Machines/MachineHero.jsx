import { memo } from 'react';
import HeroImg from '../../assets/hero1.jpg'
import Landing from '../../assets/Landing.jpg'
import Contact from '../../assets/contact.jpeg'
import SearchMachine from './SearchMachine';

const MachineHero = () => {
    return (<div className="relative bg-[#1F6FEB17] h-[600px] w-full flex flex-col items-center justify-center overflow-hidden">

        <div className=' flex flex-col justify-center items-center py-10 relative'>
            <div className='text-center py-5 flex flex-col justify-center items-center relative text-primary text-[50px] font-bold drop-shadow-lg max-sm:text-2xl leading-relaxed'>
                <h1 className='text-primaryBtn'>
                    Find the Right Equipment <span className='text-secondary'> for Your</span>
                </h1>
                <h1 className='text-secondary'>
                    Next Project
                </h1>
            </div>
            <div className='w-full flex justify-center items-center '>
                <p className=' text-center text-[#2E3A45CC] text-base text-[20px] leading-relaxed'>Browse verified heavy machines from trusted suppliers across the nation.</p>
            </div>
        </div>
        <SearchMachine />
    </div>
    );
};

export default memo(MachineHero);
