import { memo } from 'react';
import Hero from '../components/Landing/Hero';
import AboutHero from '../components/About/AboutHero';
import Impact from '../components/About/impact';
import MesionVesion from '../components/About/MesionVesion';
import CoreValues from '../components/About/CoreValues';
import Serveys from '../components/Landing/Serveys';
import Footer from '../components/Landing/Footer';

const About = () => {
    return (
        <>
            <AboutHero />
            <Impact />
            <MesionVesion />
            <CoreValues />
            <Serveys/>
            <Footer/>
        </>
    );
};

export default memo(About);