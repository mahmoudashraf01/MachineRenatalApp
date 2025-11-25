import { memo } from 'react';
import HeroContact from '../components/contact/HeroContact';
import ContactSection from '../components/contact/ContactSection';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
            <HeroContact />
            <ContactSection />
            <Footer />
        </>
    );
};

export default memo(Contact);