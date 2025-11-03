import { memo } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/home/Hero';
import Equipments from '../components/home/Equipments';
import Serveys from '../components/home/Serveys';
import Footer from '../components/home/Footer';

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Equipments />
            <Serveys />
            <Footer/>
        </>
    );
};

export default memo(Home);