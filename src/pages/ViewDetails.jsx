import { memo } from 'react';
import MachineDetails from '../components/viewDetails/MachineDetails';
import Footer from '../components/Footer';

const ViewDetails = () => {
    return (
        <>
            <MachineDetails />
            <Footer/>
        </>
    );
};

export default memo(ViewDetails);