import { memo } from 'react';

const SecondaryButton = () => {
    return (
        <button className='bg-secondary w-[190px] h-10 p-2.5  rounded-md text-[18px] font-medium'>
            Login
        </button>
    );
};

export default memo(SecondaryButton);