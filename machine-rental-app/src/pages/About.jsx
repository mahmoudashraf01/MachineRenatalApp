import { memo } from 'react';
import Hero from '../components/Landing/Hero';
import AboutHero from '../components/About/AboutHero';
import Impact from '../components/About/impact';
import MesionVesion from '../components/About/MesionVesion';

const About = () => {
    return (
        <>
            <AboutHero />
            <Impact />
            <MesionVesion />

        </>
    );
};

export default memo(About);