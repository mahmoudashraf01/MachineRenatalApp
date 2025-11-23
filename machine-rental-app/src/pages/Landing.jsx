import { memo } from 'react';
import Hero from '../components/Landing/Hero';
import Equipments from '../components/Landing/Equipments';
import Serveys from '../components/Serveys';
import Footer from '../components/Footer';
import HowItWorks from '../components/Landing/HowItWorks';
import WhyChoose from '../components/Landing/WhyChoose';


const Landing = () => {
    return (
        <>
            <Hero />
            <Equipments />
            <HowItWorks />
            <WhyChoose />
            <Serveys />
            <Footer />
        </>
    );
};

export default memo(Landing);