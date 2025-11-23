import { memo } from 'react';
import MachineHero from '../components/Machines/MachineHero';

const Machines = () => {
    return (
        <>
            <MachineHero />
        </>
    );
};

export default memo(Machines);