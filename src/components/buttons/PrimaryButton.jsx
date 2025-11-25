import { memo } from 'react';

const PrimaryButton = () => {
    return (
        <button className='bg-primaryBtn w-[140px] h-10 p-2.5 rounded-md text-[18px] font-medium'>
            Login
        </button>
    );
};

export default memo(PrimaryButton);