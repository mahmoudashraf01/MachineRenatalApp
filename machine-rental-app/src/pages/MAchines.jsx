import { memo } from 'react';
import MachineHero from '../components/Machines/MachineHero';
import FilteredMachines from '../components/Machines/FilteredMachines';

const Machines = () => {
    return (
        <>
            <MachineHero />
            <FilteredMachines />
        </>
    );
};

export default memo(Machines);