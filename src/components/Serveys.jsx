import { memo } from 'react';
import Img from '../assets/img.jpg'
import { LiaStarSolid } from 'react-icons/lia';
import { FaAngleRight } from 'react-icons/fa6';
import { FaAngleLeft } from 'react-icons/fa6';
import Comma from '../assets/comma.svg';
const Serveys = () => {
    return (
        <div className='flex flex-col justify-center items-center my-7'>
            <div className='flex flex-col my-10 justify-center items-center gap-7'>
                <h2 className='text-[40px] text-blue-950 font-semibold text-center leading-relaxed max-sm:text-3xl'>What Our Clients Say</h2>
                <p className='text-center text-gray-700 text-[20px] font-normal leading-relaxed max-sm:text-[15px]'>Trusted by leading construction companies across the nation.</p>
            </div>
            <div className='lg:px-15 px-10 w-full'>
                <div className=' border flex flex-col border-gray-300 rounded-2xl shadow-2xl w-full '>
                    <div className='relative justify-center items-center'>
                        <div className='absolute max-sm:w-[50px] max-sm:h-[50px] w-[70px] h-[70px] rounded-[50%] -top-10 max-sm:-top-[25px] left-20 max-sm:left-7'>
                            <img src={Comma} alt="" />
                        </div>
                        <div className=' max-sm:px-10 text-center py-10 px-10 gap-5 flex flex-col justify-center items-center '>
                            <p className='text-center text-[28px] max-sm:text-[15px] leading-relaxed'>
                                "The variety of equipment available is impressive. We can find  everything we need in one place, from excavators to cranes. Highly  recommended for any construction business."
                            </p>
                            {/* <div className=' text-center border-b lg:w-300 md:w-180 max-md:w-150 max-sm:w-70 text-[#2E3A4533]'></div> */}
                        </div>
                        <hr className=' mx-20 mb-8 text-[#2E3A4533]' />
                    </div>
                    <div className='flex pb-10 px-15  gap-2'>
                        <img className='w-12 h-12 rounded-[50%]' src={Img} alt="revey-image" />
                        <div className='flex flex-col gap-2'>
                            <p className='text-[18px] max-sm:text-[12px] font-semibold pt-1.5'>Verified Companies</p>
                            <div className='flex text-[8px]'>
                                <LiaStarSolid />
                                <LiaStarSolid />
                                <LiaStarSolid />
                                <LiaStarSolid />
                                <LiaStarSolid />
                                <LiaStarSolid />
                                <LiaStarSolid />
                                <LiaStarSolid />
                                <LiaStarSolid />
                                <LiaStarSolid />
                                <LiaStarSolid />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center py-10 gap-5'>
                    <div className='flex justify-center items-center w-10 h-10 max-sm:w-5 max-sm:h-5 border border-primaryBtn rounded-[50%]'>
                        <FaAngleLeft className='text-primaryBtn' />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <div className='w-5 h-5 max-sm:w-2.5 max-sm:h-2.5 bg-primaryBtn rounded-[50%]'></div>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <div className='w-5 h-5 max-sm:w-2.5 max-sm:h-2.5 bg-[#D9D9D9] rounded-[50%]'></div>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <div className='w-5 h-5 max-sm:w-2.5 max-sm:h-2.5 bg-[#D9D9D9] rounded-[50%]'></div>
                    </div>
                    <div className='flex justify-center items-center w-10 h-10 max-sm:w-5 max-sm:h-5 border border-primaryBtn rounded-[50%]'>
                        <FaAngleRight className='text-primaryBtn' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Serveys);