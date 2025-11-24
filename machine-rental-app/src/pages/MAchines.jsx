import { memo } from 'react';
import MachineHero from '../components/Machines/MachineHero';
import FilteredMachines from '../components/Machines/FilteredMachines';
import Serveys from '../components/Serveys';
import Footer from '../components/Footer';

const Machines = () => {
    return (
        <>
            <MachineHero />
            <FilteredMachines />
            <Serveys />
            <Footer />
        </>
    );
};

export default memo(Machines);