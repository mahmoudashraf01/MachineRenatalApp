import React, { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';
import Logo from '../assets/logocontainer.svg';

const NavBar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-24 bg-navColor mx-auto px-4 text-primary'>
            <NavLink to='/'>
                <img src={Logo} alt="" />
            </NavLink>
            <div>
                <ul className='hidden lg:flex'>
                    <li className='p-4'>
                        <NavLink
                            to='/'
                            end
                            className={({ isActive }) =>
                                `text-[18px] font-medium transition-colors duration-150 ${isActive
                                    ? 'text-secondary underline decoration-secondary decoration-2'
                                    : 'text-white hover:text-secondary hover:underline hover:decoration-secondary'
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className='p-4'>
                        <NavLink
                            to='/machines'
                            className={({ isActive }) =>
                                `text-[18px] font-medium transition-colors duration-150 ${isActive
                                    ? 'text-secondary underline decoration-secondary decoration-2'
                                    : 'text-white hover:text-secondary hover:underline hover:decoration-secondary'
                                }`
                            }
                        >
                            Machines
                        </NavLink>
                    </li>
                    <li className='p-4'>
                        <NavLink
                            to='/about'
                            className={({ isActive }) =>
                                `text-[18px] font-medium transition-colors duration-150 ${isActive
                                    ? 'text-secondary underline decoration-secondary decoration-2'
                                    : 'text-white hover:text-secondary hover:underline hover:decoration-secondary'
                                }`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li className='p-4'>
                        <NavLink
                            to='/contact'
                            className={({ isActive }) =>
                                `text-[18px] font-medium transition-colors duration-150 ${isActive
                                    ? 'text-secondary underline decoration-secondary decoration-2'
                                    : 'text-white hover:text-secondary hover:underline hover:decoration-secondary'
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='hidden lg:flex justify-between gap-2.5'>
                <PrimaryButton />
                <SecondaryButton />
            </div>
            <div onClick={handleNav} className='block lg:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full z-50 bg-navColor ease-in-out duration-500' : 'fixed -left-full top-0 w-[60%] border-r border-r-gray-900 h-full bg-navColor z-50 ease-in-out duration-500'}>
                <div className='flex items-center py-7 px-4 gap-3'>
                    <img src={Logo} alt="" className='w-60'/>
                </div>
                <li className='p-4 border-b border-gray-300'>
                    <NavLink to='/' end className={({ isActive }) => isActive ? 'text-secondary' : 'text-white hover:text-secondary'}>Home</NavLink>
                </li>
                <li className='p-4 border-b border-gray-300'>
                    <NavLink to='/machines' className={({ isActive }) => isActive ? 'text-secondary' : 'text-white hover:text-secondary'}>Machines</NavLink>
                </li>
                <li className='p-4 border-b border-gray-300'>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'text-secondary' : 'text-white hover:text-secondary'}>About</NavLink>
                </li>
                <li className='p-4 border-b border-gray-300'>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-secondary' : 'text-white hover:text-secondary'}>Contact</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default memo(NavBar);