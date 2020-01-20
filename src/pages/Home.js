import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms';
import Button from '../components/StyledHero'
// Navigation - Navbar
// Hero - Header Background Image
// Banner - Header Mid-Banner across bg-image
// 
const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="deluxe
                rooms starting at #5000">
                    <Link to="/rooms" className="btn-primary">
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            
        </>
    );
}

export default Home