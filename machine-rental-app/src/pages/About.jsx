import { memo } from 'react';
import Hero from '../components/Landing/Hero';
import AboutHero from '../components/About/AboutHero';
import Impact from '../components/About/impact';

const About = () => {
    return (
        <>
            <AboutHero />
            <Impact />

        </>
    );
};

export default memo(About);