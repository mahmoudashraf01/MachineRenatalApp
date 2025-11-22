import { memo } from 'react';
import HeroContact from '../components/contact/HeroContact';
import ContactSection from '../components/contact/ContactSection';

const Contact = () => {
    return (
        <>
            <HeroContact />
            <ContactSection/>
        </>
    );
};

export default memo(Contact);